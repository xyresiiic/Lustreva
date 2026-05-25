// =============================================
// LUSTRÉVA — Custom Backend API v2
// Express + SQLite backend with admin endpoints
// =============================================

export const IS_CONFIGURED = true;
const API_URL = 'http://localhost:3001/api';

let currentUser = null;
let authChangeCallback = null;

export async function fbRegister(email, password, name) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  currentUser = data.user;
  if (authChangeCallback) authChangeCallback(currentUser);
  return { user: currentUser };
}

export async function fbLogin(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  currentUser = data.user;
  if (authChangeCallback) authChangeCallback(currentUser);
  return { user: currentUser };
}

export async function fbGoogleSignIn() {
  throw new Error('Google Sign-In is not available. Please use Email/Password.');
}

export async function fbSignOut() {
  currentUser = null;
  if (authChangeCallback) authChangeCallback(null);
}

export function onAuthChange(cb) {
  authChangeCallback = cb;
  setTimeout(() => cb(currentUser), 0);
  return () => { authChangeCallback = null; };
}

export async function updateDisplayName(user, name) {
  const res = await fetch(`${API_URL}/users/${user.uid}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ displayName: name })
  });
  if (!res.ok) throw new Error('Failed to update name');
  if (currentUser && currentUser.uid === user.uid) {
    currentUser.displayName = name;
  }
}

export async function getUserProfile(uid) {
  const res = await fetch(`${API_URL}/users/${uid}`);
  if (!res.ok) return null;
  return res.json();
}

// --- Admin: All Users ---
export async function getAllUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) return [];
  return res.json();
}

// --- Wishlist ---
export async function getWishlist(uid) {
  const res = await fetch(`${API_URL}/wishlists/${uid}`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.items || [];
}

export async function saveWishlist(uid, items) {
  await fetch(`${API_URL}/wishlists/${uid}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items })
  });
}

// --- Orders ---
export async function createOrder(order) {
  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data.orderId;
}

export async function getUserOrders(uid) {
  const res = await fetch(`${API_URL}/orders/${uid}`);
  if (!res.ok) return [];
  return res.json();
}

// Admin: All Orders
export async function getAllOrders() {
  const res = await fetch(`${API_URL}/orders`);
  if (!res.ok) return [];
  return res.json();
}

export async function updateOrderStatus(orderId, status) {
  const res = await fetch(`${API_URL}/orders/${orderId}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });
  if (!res.ok) throw new Error('Failed to update order status');
  return res.json();
}

// --- Products ---
export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) return null;
  const prods = await res.json();
  return prods.length > 0 ? prods : null;
}

export async function saveProduct(product) {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  if (!res.ok) throw new Error('Failed to save product');
}

export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Failed to delete product');
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}

// --- Newsletter ---
export async function subscribeToNewsletter(email) {
  const res = await fetch(`${API_URL}/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  if (!res.ok) throw new Error('Failed to subscribe');
}

export const auth = {};
export const db = {};