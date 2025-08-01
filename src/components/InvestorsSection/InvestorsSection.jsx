import React, {useState} from 'react'
import './InvestorsSection.css'
import { Plus, Search, TrendingUp, SquarePen, UserPen, Calendar, X } from 'lucide-react'
import EditInvestorDetails from '../EditInvestorDetails/EditInvestorDetails'
import Statement from '../Statement/Statement'

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

const InvestorsSection = () => {
    const [adduserpopup, setAdduserpopup] = useState(false)
    const [edituserpopup, setEdituserpopup] = useState(false)
    const [openStatement, setOpenStatement] = useState(false)


    return (
        <>
            <div className="overallleft">
                <div className="topbox">
                    <div className="topboxleft">
                        <p className='topboxlefttitle'>Investors</p>
                        <p className='topboxleftdesc'>Manage and view all investor accounts</p>
                    </div>
                    <div className="topboxright" onClick={()=>{setAdduserpopup(true)}}>
                        <Plus />
                        <p>Add Investor</p>
                    </div>
                </div>
                <div className='searchbarinvestor'>
                    <Search className='searchinputlogo' />
                    <input type='text' placeholder='search investor' />
                </div>
                <div className="investorpagefour">
                    <div className="investorpagefourper">
                        <TrendingUp className='investorstatsicon' />
                        <div>
                            <p className='investorpagefourpertitle'>Total Investors</p>
                            <p className='investorpagefourperdesc'>5</p>
                        </div>
                    </div>
                    <div className="investorpagefourper">
                        <TrendingUp className='investorstatsicon' />
                        <div>
                            <p className='investorpagefourpertitle'>Active Investors</p>
                            <p className='investorpagefourperdesc'>5</p>
                        </div>
                    </div>
                    <div className="investorpagefourper">
                        <Calendar className='investorstatsicon' />
                        <div>
                            <p className='investorpagefourpertitle'>This Month</p>
                            <p className='investorpagefourperdesc'>5</p>
                        </div>
                    </div>
                    <div className="investorpagefourper">
                        <TrendingUp className='investorstatsicon' />
                        <div>
                            <p className='investorpagefourpertitle'>Growth Rate</p>
                            <p className='investorpagefourperdesc'>5</p>
                        </div>
                    </div>
                </div>

                <div className='investorsdetailssection'>
                    <div className='investordetailsperrow'>
                        <div className='investorname forbgandbold'>Investor</div>
                        <div className='investorcontact forbgandbold'>Contact</div>
                        <div className='investorjoindate forbgandbold'>Join Date</div>
                        <div className='totalinvested forbgandbold'>Total Invested</div>
                        <div className='totalrevenue forbgandbold'>Total Returns</div>
                        <div className='investorstatus forbgandbold'>Status</div>
                        <div className="profileselect forbgandbold">Profile</div>
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
                                <div className='investorstatus'>Active</div>
                                <div className="profileselect">
                                    <UserPen onClick={()=>{setOpenStatement(true)}} />
                                </div>
                                <div className='actionbtn' onClick={()=>{setEdituserpopup(true)}}>
                                    <SquarePen />
                                    <p>Edit</p>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className={`addformpopup ${adduserpopup ? 'addformpopupactive' : ''}`}  onClick={()=>{setAdduserpopup(false)}}>
                    <div className="inneraddformppup" onClick={(e) => e.stopPropagation()}>
                        <X className='cutaddform' onClick={()=>{setAdduserpopup(false)}} />
                        <div className='addformpopline'>
                            <input className='addforminputper' type='text' placeholder='Enter Investor Name' />
                            <input className='addforminputper' type='text' placeholder='Enter Contact Number' />
                        </div>
                        <div className='addformpopline'>
                            <input className='addforminputper' type='text' placeholder='Enter Amount' />
                            <select className='addforminputper'>
                                <option>Select Plan</option>
                                <option>Plan One</option>
                                <option>Plan Two</option>
                            </select>
                        </div>
                        <p className='investnowbtn'>Invest Now</p>
                    </div>
                </div>

                <EditInvestorDetails edituserpopup={edituserpopup} setEdituserpopup={setEdituserpopup} />
                <Statement openStatement={openStatement} setOpenStatement={setOpenStatement} />
            </div>
        </>
    )
}

export default InvestorsSection
