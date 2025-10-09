// Centralized API helper to ensure consistent base URL and single slash joining
const getBaseUrl = () => {
  const raw = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  return raw.replace(/\/+$/, '');
};

export const API_BASE_URL = getBaseUrl();

export const joinUrl = (path) => {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${p}`;
};

export async function apiFetch(path, options = {}) {
  const url = joinUrl(path);
  const resp = await fetch(url, options);
  // Try to parse JSON; if it fails, return text fallback
  const contentType = resp.headers.get('content-type') || '';
  let data;
  try {
    data = contentType.includes('application/json') ? await resp.json() : await resp.text();
  } catch (_) {
    data = null;
  }
  return { response: resp, data };
}
