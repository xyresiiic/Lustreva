const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) console.error('DB Error:', err);
  else {
    console.log('Connected to SQLite');
    initDb();
  }
});

const ADMIN_EMAILS = ['lustrevaa@gmail.com'];

function initDb() {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT,
    name TEXT,
    isAdmin INTEGER DEFAULT 0
  )`);
  
  // Attempt to add isAdmin column if it doesn't exist (for existing databases)
  db.run(`ALTER TABLE users ADD COLUMN isAdmin INTEGER DEFAULT 0`, (err) => {
    // Ignore error if column already exists
  });

  db.run(`CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    title TEXT,
    price REAL,
    originalPrice REAL,
    category TEXT,
    occasion TEXT,
    rating REAL,
    reviews INTEGER,
    stock INTEGER,
    description TEXT,
    images TEXT,
    tags TEXT,
    isNew INTEGER
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    userId TEXT,
    items TEXT,
    total REAL,
    status TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS wishlists (
    userId TEXT PRIMARY KEY,
    items TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS newsletter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    subscribedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
}

// --- Auth APIs ---
app.post('/api/auth/register', (req, res) => {
  const { email, password, name } = req.body;
  const uid = 'user_' + Date.now();
  const isAdmin = ADMIN_EMAILS.includes(email) ? 1 : 0;
  
  db.run('INSERT INTO users (id, email, password, name, isAdmin) VALUES (?, ?, ?, ?, ?)', [uid, email, password, name, isAdmin], function(err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ user: { uid, email, displayName: name, isAdmin: isAdmin === 1 } });
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err || !row) return res.status(400).json({ error: 'invalid-credential' });
    res.json({ user: { uid: row.id, email: row.email, displayName: row.name, isAdmin: row.isAdmin === 1 } });
  });
});

app.get('/api/users/:uid', (req, res) => {
  db.get('SELECT * FROM users WHERE id = ?', [req.params.uid], (err, row) => {
    if (err || !row) return res.status(404).json({ error: 'Not found' });
    res.json({ uid: row.id, email: row.email, displayName: row.name, isAdmin: row.isAdmin === 1 });
  });
});

app.put('/api/users/:uid', (req, res) => {
  const { displayName } = req.body;
  db.run('UPDATE users SET name = ? WHERE id = ?', [displayName, req.params.uid], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// --- Admin: All Users ---
app.get('/api/users', (req, res) => {
  db.all('SELECT id, email, name, isAdmin FROM users', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const users = rows.map(r => ({ uid: r.id, email: r.email, displayName: r.name, isAdmin: r.isAdmin === 1 }));
    res.json(users);
  });
});

// --- Products APIs ---
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const products = rows.map(r => ({
      ...r,
      images: JSON.parse(r.images || '[]'),
      tags: JSON.parse(r.tags || '[]'),
      isNew: !!r.isNew
    }));
    res.json(products);
  });
});

app.post('/api/products', (req, res) => {
  const p = req.body;
  db.run(
    `INSERT OR REPLACE INTO products (id, title, price, originalPrice, category, occasion, rating, reviews, stock, description, images, tags, isNew)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [p.id, p.title, p.price, p.originalPrice, p.category, p.occasion, p.rating, p.reviews, p.stock, p.description, JSON.stringify(p.images || []), JSON.stringify(p.tags || []), p.isNew ? 1 : 0],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

app.delete('/api/products/:id', (req, res) => {
  db.run('DELETE FROM products WHERE id = ?', [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.get('/api/products/:id', (req, res) => {
  db.get('SELECT * FROM products WHERE id = ?', [req.params.id], (err, row) => {
    if (err || !row) return res.status(404).json({ error: 'Not found' });
    const p = {
      ...row,
      images: JSON.parse(row.images || '[]'),
      tags: JSON.parse(row.tags || '[]'),
      isNew: !!row.isNew
    };
    res.json(p);
  });
});

// --- Wishlist APIs ---
app.get('/api/wishlists/:uid', (req, res) => {
  db.get('SELECT items FROM wishlists WHERE userId = ?', [req.params.uid], (err, row) => {
    if (err || !row) return res.json({ items: [] });
    res.json({ items: JSON.parse(row.items || '[]') });
  });
});

app.post('/api/wishlists/:uid', (req, res) => {
  db.run(
    'INSERT OR REPLACE INTO wishlists (userId, items) VALUES (?, ?)',
    [req.params.uid, JSON.stringify(req.body.items || [])],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

// --- Orders APIs ---
// All orders (admin)
app.get('/api/orders', (req, res) => {
  db.all('SELECT * FROM orders ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const orders = rows.map(r => ({ ...r, items: JSON.parse(r.items || '[]') }));
    res.json(orders);
  });
});

// User orders
app.get('/api/orders/:uid', (req, res) => {
  db.all('SELECT * FROM orders WHERE userId = ? ORDER BY createdAt DESC', [req.params.uid], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const orders = rows.map(r => ({ ...r, items: JSON.parse(r.items || '[]') }));
    res.json(orders);
  });
});

app.post('/api/orders', (req, res) => {
  const o = req.body;
  const oid = o.orderId || ('ORD_' + Date.now());
  const total = o.totalAmount || o.total || 0;
  db.run(
    'INSERT INTO orders (id, userId, items, total, status, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
    [oid, o.userId, JSON.stringify(o), total, o.status || 'pending', o.createdAt || new Date().toISOString()],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ orderId: oid });
    }
  );
});

// Update order status (admin)
app.put('/api/orders/:id/status', (req, res) => {
  const { status } = req.body;
  db.run('UPDATE orders SET status = ? WHERE id = ?', [status, req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// --- Newsletter ---
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });
  db.run('INSERT OR IGNORE INTO newsletter (email) VALUES (?)', [email], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
