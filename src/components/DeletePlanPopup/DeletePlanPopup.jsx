import React from 'react'
import './DeletePlanPopup.css'
import { X } from 'lucide-react'

const DeletePlanPopup = ({deleteplanpopup, setDeleteplanpopup}) => {
  return (
    <>
      <div className="deleteplanpopup" style={{display: deleteplanpopup ? 'flex' : 'none'}} onClick={() => setDeleteplanpopup(false)}>
        <div className="deleteplanpopup-content" onClick={(e) => e.stopPropagation()}>
            <X className='deleteplanpopup-content-close' onClick={() => setDeleteplanpopup(false)}/>
            <p className='deleteplanpopup-content-title'>Are you sure you want to delete this plan?</p>
            <div className="deleteplanpopup-content-buttons">
                <button className="deleteplanpopup-content-buttons-cancel">Cancel</button>
                <button className="deleteplanpopup-content-buttons-delete">Delete</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default DeletePlanPopup
