import React, { useState, useEffect } from 'react'
import './InvestorsSection.css'
import { Plus, Search, TrendingUp, SquarePen, UserPen, Calendar, X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import EditInvestorDetails from '../EditInvestorDetails/EditInvestorDetails'
import Statement from '../Statement/Statement'

const InvestorsSection = () => {
    const [investors, setInvestors] = useState([])
    const [stats, setStats] = useState({
        totalInvestors: 0,
        activeInvestors: 0,
        thisMonthInvestors: 0,
        growthRate: 0
    })
    const [isLoading, setIsLoading] = useState(true)
    const [adduserpopup, setAdduserpopup] = useState(false)
    const [edituserpopup, setEdituserpopup] = useState(false)
    const [openStatement, setOpenStatement] = useState(false)
    const [selectedInvestor, setSelectedInvestor] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        bankDetails: {
            accountNumber: '',
            ifsc: '',
            bankName: ''
        },
        totalMoneyInvested: '',
        totalReturns: '',
        status: 'active'
    })
    const { token } = useAuth()

    useEffect(() => {
        fetchInvestors()
        fetchStats()
    }, [token])

    const fetchInvestors = async () => {
        if (!token) return

        try {
            setIsLoading(true)
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/investors`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                const data = await response.json()
                setInvestors(data.data || [])
            } else {
                console.error('Failed to fetch investors')
            }
        } catch (error) {
            console.error('Error fetching investors:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchStats = async () => {
        if (!token) return

        try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/investors/stats`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                const data = await response.json()
                setStats(data.data || {})
            }
        } catch (error) {
            console.error('Error fetching stats:', error)
        }
    }

    const handleCreateInvestor = async () => {
        if (!token) return

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/investors`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    phoneNumber: formData.phoneNumber,
                    email: formData.email,
                    address: formData.address,
                    bankDetails: formData.bankDetails,
                    totalMoneyInvested: parseInt(formData.totalMoneyInvested) || 0,
                    totalReturns: parseInt(formData.totalReturns) || 0,
                    status: formData.status,
                    isDeleted: false,
                    joinDate: new Date().toISOString()
                })
            })

            if (response.ok) {
                const data = await response.json()
                console.log('Investor created:', data)
                setAdduserpopup(false)
                setFormData({
                    name: '',
                    phoneNumber: '',
                    email: '',
                    address: '',
                    bankDetails: {
                        accountNumber: '',
                        ifsc: '',
                        bankName: ''
                    },
                    totalMoneyInvested: '',
                    totalReturns: '',
                    status: 'active'
                })
                fetchInvestors() // Refresh the investors list
                fetchStats() // Refresh stats
            } else {
                console.error('Failed to create investor')
            }
        } catch (error) {
            console.error('Error creating investor:', error)
        }
    }

    const handleEditInvestor = (investor) => {
        setSelectedInvestor(investor)
        setFormData({
            name: investor.name,
            phoneNumber: investor.phoneNumber,
            email: investor.email,
            address: investor.address || '',
            bankDetails: investor.bankDetails || {
                accountNumber: '',
                ifsc: '',
                bankName: ''
            },
            totalMoneyInvested: investor.totalMoneyInvested.toString(),
            totalReturns: investor.totalReturns.toString(),
            status: investor.status
        })
        setEdituserpopup(true)
    }

    const handleUpdateInvestor = async () => {
        if (!token || !selectedInvestor) return

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/investors/${selectedInvestor._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    phoneNumber: formData.phoneNumber,
                    email: formData.email,
                    bankDetails: {
                        accountNumber: formData.bankDetails.accountNumber,
                        ifsc: formData.bankDetails.ifsc,
                        bankName: formData.bankDetails.bankName
                    },
                    totalMoneyInvested: parseInt(formData.totalMoneyInvested),
                    totalReturns: parseInt(formData.totalReturns),
                    status: formData.status
                })
            })

            if (response.ok) {
                const data = await response.json()
                console.log('Investor updated:', data)
                setEdituserpopup(false)
                setSelectedInvestor(null)
                fetchInvestors() // Refresh the investors list
                fetchStats() // Refresh stats
            } else {
                console.error('Failed to update investor')
            }
        } catch (error) {
            console.error('Error updating investor:', error)
        }
    }

    const handleDeleteInvestor = async () => {
        if (!token || !selectedInvestor) return

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/investors/${selectedInvestor._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                console.log('Investor deleted successfully')
                setEdituserpopup(false)
                setSelectedInvestor(null)
                fetchInvestors() // Refresh the investors list
                fetchStats() // Refresh stats
            } else {
                console.error('Failed to delete investor')
            }
        } catch (error) {
            console.error('Error deleting investor:', error)
        }
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0
        }).format(amount)
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-IN')
    }

    const filteredInvestors = investors.filter(investor => 
        investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investor.phoneNumber.includes(searchTerm) ||
        investor.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (isLoading) {
        return (
            <div className="overallleft">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading investors...</p>
                </div>
            </div>
        )
    }

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
                    <input 
                        type='text' 
                        placeholder='search investor' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="investorpagefour">
                    <div className="investorpagefourper">
                        <TrendingUp className='investorstatsicon' />
                        <div>
                            <p className='investorpagefourpertitle'>Total Investors</p>
                            <p className='investorpagefourperdesc'>{stats.totalInvestors}</p>
                        </div>
                    </div>
                    <div className="investorpagefourper">
                        <TrendingUp className='investorstatsicon' />
                        <div>
                            <p className='investorpagefourpertitle'>Active Investors</p>
                            <p className='investorpagefourperdesc'>{stats.activeInvestors}</p>
                        </div>
                    </div>
                    <div className="investorpagefourper">
                        <Calendar className='investorstatsicon' />
                        <div>
                            <p className='investorpagefourpertitle'>This Month</p>
                            <p className='investorpagefourperdesc'>{stats.thisMonthInvestors}</p>
                        </div>
                    </div>
                    <div className="investorpagefourper">
                        <TrendingUp className='investorstatsicon' />
                        <div>
                            <p className='investorpagefourpertitle'>Growth Rate</p>
                            <p className='investorpagefourperdesc'>{stats.growthRate}%</p>
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
                    {filteredInvestors.length > 0 ? (
                        filteredInvestors.map((investor) => (
                            <div key={investor._id} className='investordetailsperrow'>
                                <div className='investorname'>{investor.name}</div>
                                <div className='investorcontact'>{investor.phoneNumber}</div>
                                <div className='investorjoindate'>{formatDate(investor.joinDate)}</div>
                                <div className='totalinvested'>{formatCurrency(investor.totalMoneyInvested)}</div>
                                <div className='totalrevenue'>{formatCurrency(investor.totalReturns)}</div>
                                <div className={`investorstatus ${investor.status}`}>{investor.status}</div>
                                <div className="profileselect">
                                    <UserPen onClick={()=>{setOpenStatement(true)}} />
                                </div>
                                <div className='actionbtn' onClick={()=>{handleEditInvestor(investor)}}>
                                    <SquarePen />
                                    <p>Edit</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-investors">
                            <p>No investors found</p>
                        </div>
                    )}
                </div>

                <div className={`addformpopup ${adduserpopup ? 'addformpopupactive' : ''}`}  onClick={()=>{setAdduserpopup(false)}}>
                    <div className="inneraddformppup" onClick={(e) => e.stopPropagation()}>
                        <X className='cutaddform' onClick={()=>{setAdduserpopup(false)}} />
                        <div className='addformpopline'>
                            <input 
                                className='addforminputper' 
                                type='text' 
                                placeholder='Enter Investor Name' 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                            <input 
                                className='addforminputper' 
                                type='text' 
                                placeholder='Enter Contact Number' 
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                            />
                        </div>
                        <div className='addformpopline'>
                            <input 
                                className='addforminputper' 
                                type='email' 
                                placeholder='Enter Email' 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                            <input 
                                className='addforminputper' 
                                type='text' 
                                placeholder='Enter Address' 
                                value={formData.address}
                                onChange={(e) => setFormData({...formData, address: e.target.value})}
                            />
                        </div>
                        <div className='addformpopline'>
                            <input 
                                className='addforminputper' 
                                type='text' 
                                placeholder='Bank Account Number' 
                                value={formData.bankDetails.accountNumber}
                                onChange={(e) => setFormData({
                                    ...formData, 
                                    bankDetails: {...formData.bankDetails, accountNumber: e.target.value}
                                })}
                            />
                            <input 
                                className='addforminputper' 
                                type='text' 
                                placeholder='IFSC Code' 
                                value={formData.bankDetails.ifsc}
                                onChange={(e) => setFormData({
                                    ...formData, 
                                    bankDetails: {...formData.bankDetails, ifsc: e.target.value}
                                })}
                            />
                        </div>
                        <div className='addformpopline'>
                            <input 
                                className='addforminputper' 
                                type='text' 
                                placeholder='Bank Name' 
                                value={formData.bankDetails.bankName}
                                onChange={(e) => setFormData({
                                    ...formData, 
                                    bankDetails: {...formData.bankDetails, bankName: e.target.value}
                                })}
                            />
                            <select 
                                className='addforminputper'
                                value={formData.status}
                                onChange={(e) => setFormData({...formData, status: e.target.value})}
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className='addformpopline'>
                            <input 
                                className='addforminputper' 
                                type='number' 
                                placeholder='Total Money Invested' 
                                value={formData.totalMoneyInvested}
                                onChange={(e) => setFormData({...formData, totalMoneyInvested: e.target.value})}
                            />
                            <input 
                                className='addforminputper' 
                                type='number' 
                                placeholder='Total Returns' 
                                value={formData.totalReturns}
                                onChange={(e) => setFormData({...formData, totalReturns: e.target.value})}
                            />
                        </div>
                        <p className='investnowbtn' onClick={handleCreateInvestor}>Add Investor</p>
                    </div>
                </div>

                <EditInvestorDetails 
                    edituserpopup={edituserpopup} 
                    setEdituserpopup={setEdituserpopup}
                    formData={formData}
                    setFormData={setFormData}
                    onUpdate={handleUpdateInvestor}
                    onDelete={handleDeleteInvestor}
                />
                <Statement openStatement={openStatement} setOpenStatement={setOpenStatement} />
            </div>
        </>
    )
}

export default InvestorsSection
