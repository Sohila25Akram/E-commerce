import React from 'react';
import { NavLink } from 'react-router-dom';

const ShopNavigate = () =>{
    return(
        <div className='bg-backgroundGray'>
            <div className='max-container padding-x py-10'>
                <div className="md:flex justify-between flex-wrap">
                    <h1 className="text-2xl mb-3 md:mb-0">Shop</h1>
                    <div className="shop-tap text-textMidDark w-full md:w-fit">
                        <NavLink to='/home' className='hover:text-hoverYellow'>Home</NavLink>
                        <span className='mx-2'>/</span>
                        <NavLink to='/' className='hover:text-hoverYellow'>Shop</NavLink>
                        <span className='mx-2'>/</span>
                        <NavLink to='/cart' className='hover:text-hoverYellow'>Cart</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopNavigate