import { useEffect, useState } from 'react'
import { fetchJson, API_HOST } from '../api'

export default function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const endpoint = `${API_HOST}/api/users/`

  useEffect(() => {
    fetchJson('users/')
      .then((d) => setUsers(Array.isArray(d) ? d : []))
      .catch((e) => setError(e.message))
  }, [])

  return (
    <section className="card p-4 mb-4">
      <h2 className="h4">Users</h2>
      <p className="text-muted">API: {endpoint}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="list-group">
          {users.map((u) => (
            <li key={u._id || u.id} className="list-group-item">
              {u.name || u.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
