import { useEffect, useState } from 'react'
import { fetchJson, apiBase } from '../api'

export default function Workouts() {
  const [list, setList] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJson('workouts/')
      .then((d) => setList(Array.isArray(d) ? d : []))
      .catch((e) => setError(e.message))
  }, [])

  return (
    <section className="card p-4 mb-4">
      <h2 className="h4">Workouts</h2>
      <p className="text-muted">API: {apiBase('workouts/')}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {list.length === 0 ? (
        <p>No workouts found.</p>
      ) : (
        <ul className="list-group">
          {list.map((w) => (
            <li key={w._id || w.id} className="list-group-item">
              {w.title}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
