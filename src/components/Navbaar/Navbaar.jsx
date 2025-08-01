import React from 'react'
import './Navbaar.css'
import { LayoutDashboard, TrendingUp, Users, Wallet, CreditCard, ChartPie, Settings } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const Navbaar = () => {
   return (
      <>
         <div className="navbaar">
            <p className='logo'>LOGO</p>
            <NavLink to='/' className='navbaar-item'>
               <LayoutDashboard />
               <p>Dashboard</p>
            </NavLink>
            <NavLink to='/investment-plans' className='navbaar-item'>
               <TrendingUp />
               <p>Investment Plans</p>
            </NavLink>
            <NavLink to='/investors' className='navbaar-item'>
               <Users />
               <p>Investors</p>
            </NavLink>
            <NavLink to='/withdrawals' className='navbaar-item'>
               <CreditCard />
               <p>Withdrawals</p>
            </NavLink>

         </div>
      </>
   )
}

export default Navbaar
