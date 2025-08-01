import React, {useState} from 'react'
import './PlansSection.css'
import { Plus, IndianRupee, TrendingUp, Calendar, SquarePen, Trash, X } from 'lucide-react'
import DeletePlanPopup from '../DeletePlanPopup/DeletePlanPopup'
import EditPlanPopup from '../EditPlanPopup/EditPlanPopup'

const PlansSection = () => {
    const [addplanpopup, setAdduserpopup] = useState(false)
    const [deleteplanpopup, setDeleteplanpopup] = useState(false)
    const [editplanpopup, setEditplanpopup] = useState(false)



    return (
        <>
            <div className="overallleft">
                <div className="topbox">
                    <div className="topboxleft">
                        <p className='topboxlefttitle'>Investment Plans</p>
                        <p className='topboxleftdesc'>Manage your investment plans and returns</p>
                    </div>
                    <div className="topboxright" onClick={()=>{setAdduserpopup(true)}}>
                        <Plus />
                        <p>Add Plans</p>
                    </div>
                </div>
                <div className="planmainbox">
                    {/* Plan 1 */}
                    <div className="planbox">
                        <div className='plantitlebox'>
                            <p className='planname'>Plan 1: Standard</p>
                            <p className='planstatus'>Active</p>
                        </div>
                        <div className='rangebox'>
                            <IndianRupee />
                            <div className='rangeinnerbox'>
                                <p className='investmentrangetitle'>Investment Range</p>
                                <p className='investmentrangeexact'>₹1,00,000 - ₹9,99,999</p>
                            </div>
                        </div>
                        <div className='returntimeboth'>
                            <div className='returntimebothbox'>
                                <TrendingUp />
                                <div className='rangeinnerbox'>
                                    <p className='investmentrangetitle'>1.5x Return</p>
                                    <p className='investmentrangeexact'>In 15 Months</p>
                                </div>
                            </div>
                            <div className='returntimebothbox'>
                                <Calendar />
                                <div className='rangeinnerbox'>
                                    <p className='investmentrangetitle'>ROI Paid</p>
                                    <p className='investmentrangeexact'>Daily (Mon-Fri)</p>
                                </div>
                            </div>
                        </div>
                        <div className='planbtns'>
                            <div className='planperbtn' onClick={()=>{setEditplanpopup(true)}}>
                               <SquarePen />
                               <p>Edit</p>
                            </div>
                            <div className='planperbtn' onClick={()=>{setDeleteplanpopup(true)}}>
                                <Trash />
                               <p>Delete</p>
                            </div>
                        </div>
                    </div>
                    {/* Plan 2 */}
                    <div className="planbox">
                        <div className='plantitlebox'>
                            <p className='planname'>Plan 2: Premium</p>
                            <p className='planstatus'>Active</p>
                        </div>
                        <div className='rangebox'>
                            <IndianRupee />
                            <div className='rangeinnerbox'>
                                <p className='investmentrangetitle'>Investment Range</p>
                                <p className='investmentrangeexact'>₹10,00,000 and above</p>
                            </div>
                        </div>
                        <div className='returntimeboth'>
                            <div className='returntimebothbox'>
                                <TrendingUp />
                                <div className='rangeinnerbox'>
                                    <p className='investmentrangetitle'>2x Return</p>
                                    <p className='investmentrangeexact'>In 20 Months</p>
                                </div>
                            </div>
                            <div className='returntimebothbox'>
                                <Calendar />
                                <div className='rangeinnerbox'>
                                    <p className='investmentrangetitle'>ROI Paid</p>
                                    <p className='investmentrangeexact'>Daily (Mon-Fri)</p>
                                </div>
                            </div>
                        </div>
                        <div className='planbtns'>
                            <div className='planperbtn'>
                               <SquarePen />
                               <p>Edit</p>
                            </div>
                            <div className='planperbtn'>
                                <Trash />
                               <p>Delete</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className={`addplanpopup ${addplanpopup ? 'addplanpopupactive' : ''}`} onClick={()=>{setAdduserpopup(false)}} >
                    <div className="inneraddplanpopup" onClick={(e) => e.stopPropagation()}>
                        <X className="planaddcross" onClick={()=>{setAdduserpopup(false)}} />
                        <input type='text' placeholder='Enter Plan Name' className='firstnameinput' />
                        <div className='inneraddpopfull'>
                            <input type='text' placeholder='Enter Minimum Range' />
                            <input type='text' placeholder='Enter Maximum Range' />
                        </div>
                        <div className='inneraddpopfull'>
                            <input type='text' placeholder='Enter ROI Return' />
                            <input type='text' placeholder='Enter Time Period' />
                        </div>
                        <p className='planaddnow'>Add Now</p>
                        
                    </div>
                </div>

                <DeletePlanPopup deleteplanpopup={deleteplanpopup} setDeleteplanpopup={setDeleteplanpopup}/>
                <EditPlanPopup editplanpopup={editplanpopup} setEditplanpopup={setEditplanpopup}/>
            </div>
        </>
    )
}

export default PlansSection
