const CODESPACE_NAME =
  typeof import.meta !== 'undefined'
    ? import.meta.env.VITE_CODESPACE_NAME?.trim()
    : undefined

const API_HOST = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000'

function apiBase(path) {
  const cleanPath = String(path || '').replace(/^\/*/, '')
  return `${API_HOST}/api/${cleanPath}`
}

async function fetchJson(path) {
  const url = apiBase(path)
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)

  const data = await res.json()

  if (Array.isArray(data)) return data
  if (data && Array.isArray(data.items)) return data.items
  if (data && Array.isArray(data.data)) return data.data
  if (data && Array.isArray(data.results)) return data.results
  return data
}

export { apiBase, fetchJson, API_HOST, CODESPACE_NAME }
