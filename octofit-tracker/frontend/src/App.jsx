import { NavLink, Routes, Route } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'

function App() {
  return (
    <div className="container py-4">
      <nav className="nav nav-pills flex-wrap gap-2 mb-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Users
        </NavLink>
        <NavLink to="/teams" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Teams
        </NavLink>
        <NavLink to="/activities" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Activities
        </NavLink>
        <NavLink to="/workouts" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Workouts
        </NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Leaderboard
        </NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return (
    <section className="card p-4">
      <h1 className="h3 mb-3">OctoFit Tracker</h1>
      <p className="mb-2">
        This demo uses <strong>VITE_CODESPACE_NAME</strong> to build Codespaces
        preview API URLs.
      </p>
      <p className="mb-2">
        Define <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to enable
        the preview domain at{' '}
        <code>https://&lt;VITE_CODESPACE_NAME&gt;-8000.app.github.dev/api/[component]/</code>.
      </p>
      <p className="mb-0">
        When unset, the app safely falls back to <code>http://localhost:8000/api/[component]/</code>.
      </p>
    </section>
  )
}

export default App
