import React from 'react'
import './EditInvestorDetails.css'
import { X } from 'lucide-react'

const EditInvestorDetails = ({edituserpopup, setEdituserpopup}) => {
  return (
    <>
      <div className={`editinvestordetails ${edituserpopup ? 'editinvestordetails-active' : ''}`} onClick={()=>{setEdituserpopup(false)}} >
        <div className="editinvestordetails-inner" onClick={(e)=>{e.stopPropagation()}}>
            <X className='editinxestorpopup-cross' onClick={()=>{setEdituserpopup(false)}} />
            <input className='fullinputeditiman' type='text' placeholder='Enter Name'/>
            <div className='fullwidthouterinputeditman'>
                <select className='innerfullwidthman'>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
                <input className='innerfullwidthman' type='text' placeholder='Contact Number' />
            </div>
            <div className='editinvestorbtns'>
                <p className='editinvestorbtns-cancel' onClick={()=>{setEdituserpopup(false)}}>Cancel</p>
                <p className='editinvestorbtns-update'>Update Now</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditInvestorDetails
