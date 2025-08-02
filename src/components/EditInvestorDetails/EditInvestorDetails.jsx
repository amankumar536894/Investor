import React from 'react'
import './EditInvestorDetails.css'
import { X, Trash } from 'lucide-react'

const EditInvestorDetails = ({edituserpopup, setEdituserpopup, formData, setFormData, onUpdate, onDelete}) => {
  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate()
    }
  }

  const handleDelete = () => {
    if (onDelete) {
      onDelete()
    }
  }

  return (
    <>
      <div className={`editinvestordetails ${edituserpopup ? 'editinvestordetails-active' : ''}`} onClick={()=>{setEdituserpopup(false)}} >
        <div className="editinvestordetails-inner" onClick={(e)=>{e.stopPropagation()}}>
            <X className='editinxestorpopup-cross' onClick={()=>{setEdituserpopup(false)}} />
            <input 
                className='fullinputeditiman' 
                type='text' 
                placeholder='Enter Name'
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <div className='fullwidthouterinputeditman'>
                <select 
                    className='innerfullwidthman'
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <input 
                    className='innerfullwidthman' 
                    type='text' 
                    placeholder='Contact Number' 
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
            </div>
            <div className='fullwidthouterinputeditman'>
                <input 
                    className='innerfullwidthman' 
                    type='email' 
                    placeholder='Email Address' 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input 
                    className='innerfullwidthman' 
                    type='text' 
                    placeholder='Bank Account Number' 
                    value={formData.bankDetails.accountNumber}
                    onChange={(e) => setFormData({
                        ...formData, 
                        bankDetails: {...formData.bankDetails, accountNumber: e.target.value}
                    })}
                />
            </div>
            <div className='fullwidthouterinputeditman'>
                <input 
                    className='innerfullwidthman' 
                    type='text' 
                    placeholder='IFSC Code' 
                    value={formData.bankDetails.ifsc}
                    onChange={(e) => setFormData({
                        ...formData, 
                        bankDetails: {...formData.bankDetails, ifsc: e.target.value}
                    })}
                />
                <input 
                    className='innerfullwidthman' 
                    type='text' 
                    placeholder='Bank Name' 
                    value={formData.bankDetails.bankName}
                    onChange={(e) => setFormData({
                        ...formData, 
                        bankDetails: {...formData.bankDetails, bankName: e.target.value}
                    })}
                />
            </div>
            <div className='fullwidthouterinputeditman'>
                <input 
                    className='innerfullwidthman' 
                    type='number' 
                    placeholder='Total Money Invested' 
                    value={formData.totalMoneyInvested}
                    onChange={(e) => setFormData({...formData, totalMoneyInvested: e.target.value})}
                />
                <input 
                    className='innerfullwidthman' 
                    type='number' 
                    placeholder='Total Returns' 
                    value={formData.totalReturns}
                    onChange={(e) => setFormData({...formData, totalReturns: e.target.value})}
                />
            </div>
            <div className='editinvestorbtns'>
                <p className='editinvestorbtns-delete' onClick={handleDelete}>
                    <Trash size={16} />
                    Delete
                </p>
                <p className='editinvestorbtns-cancel' onClick={()=>{setEdituserpopup(false)}}>Cancel</p>
                <p className='editinvestorbtns-update' onClick={handleUpdate}>Update Now</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditInvestorDetails
