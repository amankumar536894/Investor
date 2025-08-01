import React from 'react'
import './EditPlanPopup.css'
import { X } from 'lucide-react'

const EditPlanPopup = ({editplanpopup, setEditplanpopup}) => {
  return (
    <>
      <div className={`editplanpopup ${editplanpopup ? 'editplanpopupactive' : ''}`} onClick={()=>{setEditplanpopup(false)}}>
        <div className="editplanpopup-content" onClick={(e) => e.stopPropagation()}>
            <X className='editplanpopup-content-close' onClick={()=>{setEditplanpopup(false)}}/>
            <div className='editplanpopup-inputfull'>
                <input className='editplanpopup-inputfull-input' type='text' placeholder='Plan Name' />
                <select className='editplanpopup-inputfull-input'>
                    <option>Select Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>
            <div className="editplanpopup-inputfull">
                <input className='editplanpopup-inputfull-input' type='text' placeholder='Minimum Range' />
                <input className='editplanpopup-inputfull-input' type='text' placeholder='Maximum Range' />
            </div>
            <div className="editplanpopup-inputfull">
                <input className='editplanpopup-inputfull-input' type='text' placeholder='Enter ROI' />
                <input className='editplanpopup-inputfull-input' type='text' placeholder='Enter Timeperiod' />
            </div>
            <div className='editplanpopup-btns'>
                <p className='editplanpopup-btns-cancel'>Cancel</p>
                <p className='editplanpopup-btns-update'>Update Now</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default EditPlanPopup
