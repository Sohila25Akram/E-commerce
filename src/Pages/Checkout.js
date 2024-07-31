import React, { useContext, useEffect, useState } from 'react'
import Receipt from '../Components/Receipt'
import { TotalAmountContext } from '../index';
import { useLocation } from 'react-router-dom';
import data from '../data.json'
import Button from '../Components/Button';

export default function Checkout({productsthatAddedToCart}) {
    // const { totalAmount, setTotalAmount } = useContext(TotalAmountContext);
    // const location = useLocation();
    // const { totalAmount } = location.state || {};
    const [totalAmountStored, setTotalAmountStored] = useState(0);
    const [quantityStored, setQuantityStored] = useState({});

    const [userData, setUserData] = useState({   
        firstName: '',
        lastName: '',
        company: '',
        country: 'egypt',
        street: '',
        apartment: '',
        city: '',
        postCode: '',
        phone: '',
        email: '',
        notes: '',
        password: '',
        orderId: 10000,
        orderDate: null
    })
    const [isChecked, setIsChecked] = useState(false)
    const [isNotValid, setIsNotValid] = useState(false)
    // const [isRequired, setIsRequired] = useState(false)
    const [showReceipt, setShowReceipt] = useState(false)

    const handleChange = (event) => {
        const {value , name} = event.target;
        setUserData({
            ...userData,
            [name] : value
        })
        console.log(userData)
        setIsNotValid(event.target.checkValidity());
        // setIsRequired((prevIsRequired) => ({
        //     ...prevIsRequired,
        //     [name]: required,
        // }));
    }

    const handleCheck = () => {
        setIsChecked(!isChecked)
    }

    const handleOrder = () => {

        setUserData(prev => ({
            ...userData,
            orderId: prev.orderId + 1,
            orderDate: new Date().toLocaleDateString()
        }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowReceipt(true);
        handleOrder();
    }
    useEffect(() =>{
        const storedTotalAmount = localStorage.getItem('totalAmount');
        if (storedTotalAmount !== null) {
          setTotalAmountStored(Number(storedTotalAmount));
        }
        const storedQuantities = {};
        productsthatAddedToCart.forEach(product => {
          const storedQuantity = localStorage.getItem(`quantity_${product.id}`);
          if (storedQuantity) {
            storedQuantities[product.id] = JSON.parse(storedQuantity);
          }
        });
        setQuantityStored(storedQuantities);
    }, [productsthatAddedToCart])

  return (
    <>
        <div className='max-container padding-x padding-y lg:flex-row align-center lg:gap-8 xl:gap-4 py-10'>
            <form className='checkout-form text-textPlaceholder w-full' onSubmit={handleSubmit}>
                <div className='w-full lg:flex lg:gap-10 mb-4'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-lg lg:text-3xl text-textDark'>Billing Details</h2>
                        <div className='flex w-full justify-between gap-6'>
                            <div className='w-1/2'>
                                <label htmlFor='first-name'>First name <span className='required-symbol text-required text-lg font-bold'>*</span></label>
                                <input type='text' id='first-name' name='firstName' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.firstName} onChange={handleChange} required />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor='last-name'>Last name <span className='required-symbol text-required text-lg font-bold'>*</span></label>
                                <input type='text' id='last-name' name='lastName' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.lastName} onChange={handleChange} required />
                            </div>       
                        </div>
                        <label htmlFor='company-name'>Company</label>
                        <input type='text' id='company-name' name='company' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.company} onChange={handleChange} />         
                        <label htmlFor='country'>Country</label>
                        {/* <input list='country' /> */}
                        <select id='country' name='country' className='border border-borderColor outline-textPlaceholder text-textMidDark' value={userData.country} onChange={handleChange}>
                            <option value="egypt">Egypt</option>
                            <option value="america">America</option>
                            <option value="italy">Italy</option>
                        </select>
                        <label htmlFor='address'>Street address <span className='required-symbol text-required text-lg font-bold'>*</span></label>
                        <input type='text' id='address' name='street' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.street} onChange={handleChange} placeholder='House number and street id' required />
                        <input type='text' id='address' name='apartment' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.apartment} onChange={handleChange} placeholder='Apartment, suits, unit etc. (optional)' required />
                        <label htmlFor='town'>Town / City <span className='required-symbol text-required text-lg font-bold'>*</span></label>
                        <input type='text' id='town' name='city' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.city} onChange={handleChange} required />
                        <label htmlFor='zip'>Postcode / ZIP <span className='required-symbol text-required text-lg font-bold'>*</span></label>
                        <input type='text' id='zip' name='postCode' pattern='^\d{5}$' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.postCode} onChange={handleChange} required />
                        {isNotValid && <span className='error-msg text-required text-xs'>it should be 5 digits</span>}
                        <div className='flex w-full justify-between gap-6'>
                            <div className='w-1/2'>
                                <label htmlFor='phone'>Phone <span className='required-symbol text-required text-lg font-bold'>*</span></label>
                                <input type='text' id='phone' name='phone' pattern='^\d{11}$' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.phone} onChange={handleChange} required />
                                {isNotValid &&  <span className='error-msg text-required text-xs'>phone number should be 11 digits </span>}
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor='email'>Email Address <span className='required-symbol text-required text-lg font-bold'>*</span></label>
                                <input type='text' id='email' name='email' className='border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.email} onChange={handleChange} required />
                                {isNotValid && <span className='error-msg text-required text-xs'>invalid emial styntax</span>}
                            </div>          
                        </div>
                        <div className='flex'>
                            <input type='checkbox' id='create-account' onClick={handleCheck} />
                            <label htmlFor='create-account' className=' w-fit'>Create an account?</label>
                        </div>                        
                        {isChecked && 
                        <div>
                            <label htmlFor='create-account-password' className='text-red-500'>Create account password <span className='required-symbol text-required text-lg font-bold'>*</span></label>
                            <input type='password' id='create-account-password' name='password' pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}' className=' border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder' value={userData.password} onChange={handleChange} placeholder='password' required={isChecked? true: false} />
                            {isNotValid && <span className='error-msg text-required text-xs'>passward should contain more than 8 digits, special character at least, capital letter, and small letter </span>}
                        </div>
                        }
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-lg lg:text-3xl text-textDark mt-8 lg:mt-0'>Additional information</h2>
                        <label htmlFor='notes'>Order Notes</label>
                        <textarea id='notes' name='notes' value={userData.notes} onChange={handleChange} placeholder='Notes about you order, e.g. specialnotes for delivery' className='w-full border border-borderColor outline-textPlaceholder placeholder:text-textPlaceholder'></textarea>
                    </div>
                </div>
                <h2 className='text-lg lg:text-3xl text-textDark mt-8'>Your Order</h2>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <td className='border'>Product</td>
                            <td className='border'>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                                
                    {productsthatAddedToCart.map((product)=>(
                        <tr key={product.id} >
                            <ProductInCheckout product={product} quantityStored={quantityStored[product.id]} />
                        </tr>
                    ))}
                        {/* <tr>
                            <td>light shoose<b><span className='mx-2 text-sm'>x</span>2</b></td>
                            <td>$18</td>
                        </tr>
                        <tr>
                            <td>glasses<b><span className='mx-2 text-sm'>x</span>1</b></td>
                            <td>$12</td>
                        </tr> */}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='border'>Subtotal</td>
                            <td className='border'><b>${totalAmountStored}</b></td>
                        </tr>
                        <tr>
                            <td className='border'>Total</td>
                            <td className='border'><b>${totalAmountStored}</b></td>
                        </tr>
                    </tfoot>
                </table>
                {/* <button type='submit' className="w-full md:w-fit text-center inline-block h-fit tracking-widest uppercase bg-yellow-700 bg-opacity-40 text-white rounded-sm px-3 py-2 text-xs cursor-pointer transition duration-200 hover:bg-black mt-8">Order</button> */}
                <div className='mt-[15px]'>
                    <Button type={'submit'} label={"order now"} />
                </div>
            </form>
        </div>
        {showReceipt && <Receipt setShowReceipt={setShowReceipt} paymentData={userData} />}
    </>
  )
}

const ProductInCheckout = ({product, quantityStored}) => {
    const quantity = quantityStored || product.quantityInCart;
    return(
        <>
            <td className='border'>{product.name}<b><span className='mx-2 text-sm'>x</span>{quantity}</b></td>
            <td className='border'>${product.price}</td>
        </>
    )
}