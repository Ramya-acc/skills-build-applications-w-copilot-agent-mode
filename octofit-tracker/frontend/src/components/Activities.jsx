import { useEffect, useState } from 'react'
import { fetchJson } from '../api'

export default function Activities() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const codespace = import.meta.env.VITE_CODESPACE_NAME?.trim()
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/'

  useEffect(() => {
    fetchJson('activities/')
      .then((d) => setItems(Array.isArray(d) ? d : []))
      .catch((e) => setError(e.message))
  }, [])

  return (
    <section className="card p-4 mb-4">
      <h2 className="h4">Activities</h2>
      <p className="text-muted">API: {endpoint}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {items.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <ul className="list-group">
          {items.map((a) => (
            <li key={a._id || a.id} className="list-group-item">
              {`${a.type} — ${a.durationMinutes} min`}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
