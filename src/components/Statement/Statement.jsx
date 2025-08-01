import React from 'react'
import './Statement.css'
import { X } from 'lucide-react'

const statement = [
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
        date: '22/12/2001',
        amount: 50000,
        final_amount: 70000
    },
    {
        type: 'Deposite',
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
                    <div className='statementtitlefull'>
                        <p>Profile Details</p>
                        <p>Statement</p>
                    </div>
                    <div className='profilestatementbox'>
                        <div className='profilestatementheader'>
                            <div className='profilestatementheadernavs forstatementbold'>Payment Type</div>
                            <div className='profilestatementheadernavs forstatementbold'>Date</div>
                            <div className='profilestatementheadernavs forstatementbold'>Amount</div>
                            <div className='profilestatementheadernavs forstatementbold'>Final Amount</div>
                        </div>
                        {statement.map((item) => {
                            return (
                                <div className='profilestatementheader'>
                                    <div className='profilestatementheadernavs'>{item.type}</div>
                                    <div className='profilestatementheadernavs'>{item.date}</div>
                                    <div className='profilestatementheadernavs'>Rs. {item.amount}</div>
                                    <div className='profilestatementheadernavs'>Rs. {item.final_amount}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statement
