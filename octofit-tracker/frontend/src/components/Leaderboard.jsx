import { useEffect, useState } from 'react'
import { fetchJson, API_HOST } from '../api'

export default function Leaderboard() {
  const [rows, setRows] = useState([])
  const [error, setError] = useState(null)
  const endpoint = `${API_HOST}/api/leaderboard/`

  useEffect(() => {
    fetchJson('leaderboard/')
      .then((d) => setRows(Array.isArray(d) ? d : []))
      .catch((e) => setError(e.message))
  }, [])

  return (
    <section className="card p-4 mb-4">
      <h2 className="h4">Leaderboard</h2>
      <p className="text-muted">API: {endpoint}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {rows.length === 0 ? (
        <p>No leaderboard entries found.</p>
      ) : (
        <ol className="list-group list-group-numbered">
          {rows.map((r) => (
            <li key={r._id || r.id} className="list-group-item">
              {r.user?.name || r.team?.name || `${r.points ?? 'No points'} points`}
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
