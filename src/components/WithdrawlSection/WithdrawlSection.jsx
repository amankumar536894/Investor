import React from 'react'
import './WithdrawlSection.css'
import '../InvestorsSection/InvestorsSection.css'


import { Plus, Search, BanknoteArrowDown } from 'lucide-react'

const dummyuser = [
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
    {
        id: 1,
        name: 'Amit Kumar', 
        contact: 6299188118,
        join_date: '22/09/2004',
        total_invested: "67,64,899",
        total_return: '78,562,540',
        status: 'active'
    }, 
]

const WithdrawlSection = () => {
    return (
        <>
            <div className="overallleft">
                <div className="topbox">
                    <div className="topboxleft">
                        <p className='topboxlefttitle'>Withdrawal Requests</p>
                        <p className='topboxleftdesc'>Manage investor withdrawal requests and payouts</p>
                    </div>
                </div>
                <div className='searchbarinvestor'>
                    <Search className='searchinputlogo' />
                    <input type='text' placeholder='search investor' />
                </div>

                <div className='investorsdetailssection'>
                    <div className='investordetailsperrow'>
                        <div className='investorname forbgandbold'>Investor</div>
                        <div className='investorcontact forbgandbold'>Contact</div>
                        <div className='investorjoindate forbgandbold'>Join Date</div>
                        <div className='totalinvested forbgandbold'>Total Invested</div>
                        <div className='totalrevenue forbgandbold'>Total Returns</div>
                        <div className='withdrawlsecinput forbgandbold'>Amount</div>
                        <div className='actionbtn forbgandbold'>Actions</div>
                    </div>
                    {dummyuser.map((item) => {
                        return (
                            <div className='investordetailsperrow'>
                                <div className='investorname'>Amit Kumar Chaudhary</div>
                                <div className='investorcontact'>6299188118</div>
                                <div className='investorjoindate'>22/09/2004</div>
                                <div className='totalinvested'>₹ 12,89,789</div>
                                <div className='totalrevenue'>₹ 52,67,529</div>
                                <div className='withdrawlsecinput'>
                                    <input className='withamountpg' type='text' placeholder='Amount' />
                                </div>
                                <div className='actionbtn' >
                                    <p className='formorestyle'>Withdrawl</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default WithdrawlSection
