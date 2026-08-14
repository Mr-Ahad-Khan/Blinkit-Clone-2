import fallbackProducts from './data/products';

export const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://localhost:8000/api';

export const CUSTOMER_STORAGE_KEY = 'blinkit_customer';
export const CHECKOUT_STORAGE_KEY = 'blinkit_checkout_details';

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function parseResponse(response) {
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new ApiError(data?.message || 'Backend request failed', response.status);
  }

  return data;
}

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  return parseResponse(response);
}

export function normalizeProduct(product) {
  const fallback = fallbackProducts.find((item) => item.id === Number(product.id));
  const price = Number(product.price ?? product.amount ?? fallback?.amount ?? 0);
  const stock = Number(product.stock ?? 0);

  return {
    id: Number(product.id),
    name: product.name || fallback?.name || 'Product',
    description: product.description || fallback?.description || 'Fresh product available now.',
    details: product.details || product.description || fallback?.details || 'Fresh product available now.',
    amount: Number.isFinite(price) ? price : 0,
    quantity: stock > 0 ? `${stock} in stock` : fallback?.quantity || 'Available',
    stock,
    category: product.category || fallback?.category || 'Groceries',
    rating: product.rating || fallback?.rating || 4.5,
    image: product.image || fallback?.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  };
}

export function readStoredCustomer() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOMER_STORAGE_KEY)) || null;
  } catch {
    return null;
  }
}

export function saveStoredCustomer(customer) {
  localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customer));
}

export function clearStoredCustomer() {
  localStorage.removeItem(CUSTOMER_STORAGE_KEY);
}
