import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard/Dashboard'
import InvestmentPlans from './pages/InvestmentPlans/InvestmentPlans'
import Investors from './pages/Investors/Investors'
import Withdrawals from './pages/Withdrawals/Withdrawals'
import Login from './pages/Login/Login'

function App() {

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
      path: '/login',
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

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
