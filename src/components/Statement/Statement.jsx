import React from 'react'
import './Statement.css'
import { X } from 'lucide-react'

const statement = [
    {
        type: 'deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'withdrawal',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'withdrawal',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'withdrawal',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'withdrawal',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'withdrawal',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'withdrawal',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
]

const Statement = ({ openStatement, setOpenStatement }) => {
    return (
        <>
            <div className={`statement ${openStatement ? 'statement-active' : ''}`} onClick={() => { setOpenStatement(false) }}>
                <div className="statementinner" onClick={(e) => { e.stopPropagation() }}>
                    <X className='statementcuticon' onClick={() => { setOpenStatement(false) }} />
                    <div className='profilestatementbox'>
                        <div className='profilestatementheader'>
                            <div className='profilestatementheadernavs forstatementbold'>Payment Type</div>
                            <div className='profilestatementheadernavs forstatementbold'>Date</div>
                            <div className='profilestatementheadernavs forstatementbold'>CR Amount</div>
                            <div className='profilestatementheadernavs forstatementbold'>DR Amount</div>
                        </div>
                        {statement.map((item) => {
                            return (
                                <div className='profilestatementheader'>
                                    <div className='profilestatementheadernavs'>{item.type}</div>
                                    <div className='profilestatementheadernavs'>{item.date}</div>
                                    <div className='profilestatementheadernavs'>
                                        {item.type === 'deposite' ? `Rs. ${item.amount}` : ''}
                                    </div>
                                    <div className='profilestatementheadernavs'>
                                        {item.type === 'withdrawal' ? `Rs. ${item.amount}` : ''}
                                    </div>
                                </div>
                            );

                        })}
                    </div>
                    <div className='bottomcalc'>
                            <div className='forcalcbox'>
                                <p className='totalwrittentext'>Total</p>
                                <p className='totaladdedamount'>Rs 850050</p>
                                <p className='totaladdedamount'>Rs 559400</p>
                            </div>
                            <div className='forcalcbox'>
                                <p className='totalwrittentext'>Setteled Amount</p>
                                <p className='totaladdedamount'>Rs 559400</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Statement
