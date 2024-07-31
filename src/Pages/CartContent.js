import React, { useContext, useEffect, useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import { Link, useParams } from "react-router-dom";
import data from '../data.json'
import { BsDisplay } from "react-icons/bs";
import { CountContext, QuantityWhenAddContext, TotalAmountContext } from '../index'
import { AddedProductToCart } from "../Components/AddedProductToCart";
import '../App.css';
import Checkout from "./Checkout";
import Button from "../Components/Button";

const CartContent = ({productsthatAddedToCart}) => {
    const { totalAmount, setTotalAmount } = useContext(TotalAmountContext);
   
    return(
        <div className="max-container padding-x padding-y">
            {productsthatAddedToCart.length > 0? (
                <div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <td className="border"></td>
                                <td className="border"></td>
                                <td className="border">Product</td>
                                <td className="border">Price</td>
                                <td className="border">Quantity</td>
                                <td className="border">Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {productsthatAddedToCart.map((product)=>(
                                <tr  key={product.id} >
                                        <AddedProductToCart product={product}/> 
                                    </tr>
                                    
                                    // <tr className={(active == false)?'block':'none'}>
                                    //     <td className="text-center px-1">
                                    //         <button onClick={() => {remove(product)}} className="w-fit bg-red-500 bg-opacity-0 rounded-full p-1 cursor-pointer mx-auto hover:bg-opacity-50 group"><AiOutlineClose className="text-red-500 group-hover:text-white"/></button>
                                    //     </td>
                                    //     <td className="px-1" >
                                    //         <div className="h-16 w-16 overflow-hidden mx-auto">
                                    //             <img src={product.src} alt="" style={{ margin:"0 auto"}}></img>
                                    //         </div>
                                        
                                    //     </td>
                                    //     <td>{product.name}</td>
                                    //     <td>{product.price}</td>
                                    //     <td>
                                    //         <form>
                                    //             <input
                                    //                 type="number"
                                    //                 placeholder="1"
                                    //                 className="h-full border-2 outline-none rounded-sm py-2 px-3 w-14 text-gray-500 text-center"
                                    //                 min='1'
                                    //                 value={quantity}
                                    //                 onChange={(event)=>{
                                    //                     handleQuantity(product, event)
                                    //                 }}
                                    //             />
                                    //         </form>
                                    //     </td>
                                    //     <td>{(quantity===1)?(`$ ${product.price}`):(`$ ${total}.00`)}</td>
                                    // </tr>
                            
                        
                        ))}              
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={6} className="p-4 border">
                                    <div className="flex flex-col md:flex-row md:justify-between">
                                        <div className="flex" >
                                            <input className="w-1/2 md:w-60 me-2 mb-2 md:mb-0 border p-2.5" type="text" placeholder="Coupon code"/>
                                            {/* <span className="h-fit w-1/2 md:w-fit text-center tracking-widest uppercase bg-yellow-700 bg-opacity-40 text-white rounded-sm px-3 py-2 text-xs cursor-pointer transition duration-200 hover:bg-black">apply coupon</span> */}
                                            <Button label={'apply coupon'} heightFit={true} />
                                        </div>
                                        {/* <span className="w-full md:w-fit text-center inline-block h-fit tracking-widest uppercase bg-yellow-700 bg-opacity-40 text-white rounded-sm px-3 py-2 text-xs cursor-pointer transition duration-200 hover:bg-black">update cart</span> */}
                                        <Button label={'update cart'} heightFit={true} />
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="w-full">
                        <h3 className="text-2xl mt-8 mb-5">Cart totals</h3>
                        <table className="w-full border">
                            <tr>
                                <td>Subtotal</td>
                                <td>${totalAmount}</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td>Total</td>
                                <td className="font-bold">${totalAmount}</td>
                            </tr>
                        </table>
                        <Link to='/checkout' className="w-full py-3 my-5 bg-opacity-40 text-white text-md bg-yellow-700 rounded-sm uppercase transition duration-200 hover:bg-black block text-center " >
                            proceed to checkout
                        </Link>
                    {/* <Checkout productsthatAddedToCart={productsthatAddedToCart} totalAmount={totalAmount} /> */}
                    </div>
                </div>
            ):(
                <div>
                    <p className="text-textMidDark">Your cart is currently empty</p>
                    <Link to='/' className="w-fit px-3 py-2 my-5 bg-opacity-40 text-white text-md bg-yellow-700 rounded-sm uppercase transition duration-200 hover:bg-black block text-center " >
                        return to shop
                    </Link>
                </div>
            )}
        </div>
    )
}

export default CartContent