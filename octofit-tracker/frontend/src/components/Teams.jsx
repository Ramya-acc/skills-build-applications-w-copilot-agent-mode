import { useEffect, useState } from 'react'
import { fetchJson, apiBase } from '../api'

export default function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJson('teams/')
      .then((d) => setTeams(Array.isArray(d) ? d : []))
      .catch((e) => setError(e.message))
  }, [])

  return (
    <section className="card p-4 mb-4">
      <h2 className="h4">Teams</h2>
      <p className="text-muted">API: {apiBase('teams/')}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {teams.length === 0 ? (
        <p>No teams found.</p>
      ) : (
        <ul className="list-group">
          {teams.map((t) => (
            <li key={t._id || t.id} className="list-group-item">
              {t.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
