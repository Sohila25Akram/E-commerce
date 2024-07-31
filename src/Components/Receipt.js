import React, { useState } from 'react'
import Button from './Button'

export default function Receipt({setShowReceipt, paymentData}) {
  return (
    
    <div className='receipt-container w-full fixed top-0 flex justify-center items-center bg-blurColor h-full z-50' >
        <div className='receipt w-full md:w-fit border-t-8 border-hoverYellow bg-white'> 
            <div className='flex justify-between items-center px-2 py-4 md:px-20'>
                <a href='#'
                    className="text-xl font-medium uppercase">
                    engage
                </a>
                <div className='top-corner grow-1 text-textPlaceholder'>
                    <span className='block text-xs'>Oreder Id: <span className='text-tableTextColor text-sm'>#{paymentData.orderId}</span></span>
                    <span className='text-xs'>Order Date: <span className='text-tableTextColor text-sm'>{paymentData.orderDate}</span></span>
                </div>
            </div>
            <div className='thanks-section capitalize text-white text-4xl text-center py-8 bg-hoverYellow'>
                thank you for order
            </div>
            <div className='user-receipt-data my-10 px-2 md:px-20'>
                {/* <table className='w-full mx-auto my-12'>
                    <thead>
                        <tr>
                            <td>Product</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>light shoose<b><span className='mx-2 text-sm'>x</span>2</b></td>
                            <td>$18</td>
                        </tr>
                        <tr>
                            <td>glasses<b><span className='mx-2 text-sm'>x</span>1</b></td>
                            <td>$12</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Subtotal</td>
                            <td><b>$48</b></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td><b>$48</b></td>
                        </tr>
                    </tfoot>
                </table> */}
                <div className='text-tableTextColor border-b border-borderColor'><span className='user-title-data'>Full Name</span><span className='border-l border-borderColor'>{paymentData.firstName} {paymentData.lastName}</span></div>
                <div className='text-tableTextColor border-b border-borderColor'><span className='user-title-data'>Address</span><span className='capitalize border-l border-borderColor'>{paymentData.apartment}, {paymentData.street}, {paymentData.city}, {paymentData.country}</span></div>
                <div className='text-tableTextColor border-b border-borderColor'><span className='user-title-data'>Email</span><span className='border-l border-borderColor'>{paymentData.email}</span></div>
                <div className='text-tableTextColor border-b border-borderColor'><span className='user-title-data'>Phone</span><span className='border-l border-borderColor'>{paymentData.phone}</span></div>
                {/* <div><span className='user-title-data'>Total</span><span>$30</span></div> */}
                {/* {Object.keys(paymentData).map((key, index) => (
                    <div key={index}>
                        <span className='user-title-data'>{key}</span>
                        <span>{paymentData[key]}</span>
                    </div>
                ))} */}
                {/* <button className="w-full md:w-fit text-center inline-block h-fit tracking-widest uppercase bg-yellow-700 bg-opacity-40 text-white rounded-sm px-3 py-2 text-xs cursor-pointer transition duration-200 hover:bg-black mb-8 mt-10" onClick={() => setShowReceipt(false)}>Close</button> */}
                <div className='mt-[15px]'>
                    <Button label={'Close'} handleClick={() => setShowReceipt(false)} className='mb-8 mt-10' />
                </div>
            </div>
        </div>
    </div>
  )
}
