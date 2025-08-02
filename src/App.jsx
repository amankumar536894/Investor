import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard/Dashboard'
import InvestmentPlans from './pages/InvestmentPlans/InvestmentPlans'
import Investors from './pages/Investors/Investors'
import Withdrawals from './pages/Withdrawals/Withdrawals'
import Login from './pages/Login/Login'

// Root component that wraps everything with AuthProvider
const Root = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/loggin',
    element: <Login />
  },
  {
    path: '/investment-plans',
    element: (
      <ProtectedRoute>
        <InvestmentPlans/>
      </ProtectedRoute>
    )
  },
  {
    path: '/investors',
    element: (
      <ProtectedRoute>
        <Investors/>
      </ProtectedRoute>
    )
  },
  {
    path: '/withdrawals',
    element: (
      <ProtectedRoute>
        <Withdrawals/>
      </ProtectedRoute>
    )
  },
])

function App() {
  return <Root />
}

export default App
