import React from 'react'
import './Dash.css'
import { Link } from 'react-router-dom'
import { BadgeIndianRupee, Users, Hourglass, TrendingUp, MoveUpRight, MoveDownRight } from 'lucide-react'

const Dash = () => {
  return (
    <>
      <div className="overallleft">
        <div className="topbox">
            <div className="topboxleft">
                <p className='topboxlefttitle'>Dashboard</p>
                <p className='topboxleftdesc'>Monitor your investment platform performance</p>
            </div>
        </div>
        <div className="fourall">
            <div className="eachfour">
                <div className="eachfourleft">
                    <p className='eachfourlefttitle'>Total Investments</p>
                    <p className='eachfourleftnum'>1000</p>
                </div>
                <Users className='eachfourright' />
            </div>
            <div className="eachfour">
                <div className="eachfourleft">
                    <p className='eachfourlefttitle'>Active Users</p>
                    <p className='eachfourleftnum'>1234</p>
                </div>
                <Hourglass className='eachfourright' />
            </div>
            <div className="eachfour">
                <div className="eachfourleft">
                    <p className='eachfourlefttitle'>Pending Withdrawls</p>
                    <p className='eachfourleftnum'>4567890</p>
                </div>
                <TrendingUp className='eachfourright' />
            </div>
            <div className="eachfour">
                <div className="eachfourleft">
                    <p className='eachfourlefttitle'>Monthly ROI</p>
                    <p className='eachfourleftnum'>34%
                    </p>
                </div>
                <TrendingUp className='eachfourright' />
            </div>
        </div>
        <div className="twobigdash">
            <div className="eachtwobig">
                <div className="eachtwobigmain-title">
                  <MoveUpRight />
                  <p>Recent Investments</p>
                </div>
                
                <div className="eachtwobigmain-table">

                    <div className="eachtwomaintable">
                        <div className="eachtwomaintable-left">
                            <p className='eachtwomaintable-left-name'>Rahul Sharma</p>
                            <p className='eachtwomaintable-left-date'>2025-01-24</p>
                        </div>
                        <div className="eachtwomaintable-right">
                            <p className='eachtwomaintable-right-amount'>1000</p>
                            <p className='eachtwomaintable-right-plan'>Plan 1</p>
                        </div>
                    </div>


                    <div className="eachtwomaintable">
                        <div className="eachtwomaintable-left">
                            <p className='eachtwomaintable-left-name'>Rahul Sharma</p>
                            <p className='eachtwomaintable-left-date'>2025-01-24</p>
                        </div>
                        <div className="eachtwomaintable-right">
                            <p className='eachtwomaintable-right-amount'>1000</p>
                            <p className='eachtwomaintable-right-plan'>Plan 1</p>
                        </div>
                    </div>


                    <div className="eachtwomaintable">
                        <div className="eachtwomaintable-left">
                            <p className='eachtwomaintable-left-name'>Rahul Sharma</p>
                            <p className='eachtwomaintable-left-date'>2025-01-24</p>
                        </div>
                        <div className="eachtwomaintable-right">
                            <p className='eachtwomaintable-right-amount'>1000</p>
                            <p className='eachtwomaintable-right-plan'>Plan 1</p>
                        </div>
                    </div>
                    <Link to='/investors' className='allinvestment'>View All Investments</Link>
                </div>
            </div>


            <div className="eachtwobig">
                <div className="eachtwobigmain-title">
                  <MoveDownRight />
                  <p>Pending Requests</p>
                </div>
                <div className="eachtwobigmain-table">

                    <div className="eachtwomaintable">
                        <div className="eachtwomaintable-left">
                            <p className='eachtwomaintable-left-name'>Rahul Sharma</p>
                            <p className='eachtwomaintable-left-date'>2025-01-24</p>
                        </div>
                        <div className="eachtwomaintable-right">
                            <p className='eachtwomaintable-right-amount'>1000</p>
                            <p className='eachtwomaintable-right-plan'>Withdrawl</p>
                        </div>
                    </div>


                    <div className="eachtwomaintable">
                        <div className="eachtwomaintable-left">
                            <p className='eachtwomaintable-left-name'>Rahul Sharma</p>
                            <p className='eachtwomaintable-left-date'>2025-01-24</p>
                        </div>
                        <div className="eachtwomaintable-right">
                            <p className='eachtwomaintable-right-amount'>1000</p>
                            <p className='eachtwomaintable-right-plan'>Withdrawl</p>
                        </div>
                    </div>


                    <div className="eachtwomaintable">
                        <div className="eachtwomaintable-left">
                            <p className='eachtwomaintable-left-name'>Rahul Sharma</p>
                            <p className='eachtwomaintable-left-date'>2025-01-24</p>
                        </div>
                        <div className="eachtwomaintable-right">
                            <p className='eachtwomaintable-right-amount'>1000</p>
                            <p className='eachtwomaintable-right-plan'>Withdrawl</p>
                        </div>
                    </div>

                    <p className='allinvestment'>View All Requests</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dash
