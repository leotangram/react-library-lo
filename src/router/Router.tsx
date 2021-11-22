import { Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes
} from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'

const Router = () => {
  return (
    <Suspense fallback={<span>Lading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {routes.map(({ name, to }) => (
                <li key={to}>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
