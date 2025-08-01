import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import InvestmentPlans from './pages/InvestmentPlans/InvestmentPlans'
import Investors from './pages/Investors/Investors'
import Withdrawals from './pages/Withdrawals/Withdrawals'
import Login from './pages/Login/Login'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/investment-plans',
      element: <InvestmentPlans/>
    },
    {
      path: '/investors',
      element: <Investors/>
    },
    {
      path: '/withdrawals',
      element: <Withdrawals/>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
