import React, { useContext, useState } from "react";
import whiteblouse from '../images/whiteblouse.png'
import data from '../data.json'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../App.css';
import ProductCard from "../Components/ProductCard";
import { CountContext, QuantityWhenAddContext } from "../index";
import Button from "../Components/Button";
import Rating from "../Components/Rating";

const ProductDetails = () =>{
    const {productId} = useParams();
    const product = data.products.find((product)=> product.id === parseInt(productId));
    // var review = false;
    const [review, setReview] = useState(false);

    const {count, changeCount} = useContext(CountContext);
    const {quantityWhenAdd, setQuantityWhenAdd} = useContext(QuantityWhenAddContext);

    const handleAddToCart = (product) =>{
        changeCount(product.id);
        product.addToCart = "add";
    }

    return(
        <div className='max-container padding-x padding-y' key={product.id}>
            <section className="md:flex gap-8 lg:gap-14 lg:mb-10">
                <img src={product.src} className="w-full md:w-1/2 self-start"></img>
                <div className="w-full md:w-1/2 py-2">
                    <div className="flex justify-between items-end">
                        <h2 className="text-4xl capitalize text-left">{product.name}</h2>
                        {product.sale?(
                            <span className="h-fit uppercase bg-yellow-800 bg-opacity-40 text-white rounded-sm font-bold px-3 py-1.5 text-xs">Sale!</span>
                        ):''}
                        
                    </div>
                    <div className="flex text-gray-400 my-6 items-center">
                        <Rating valueSelected={Number(product.rate)} color1={'#e1e1e1'} color2={'#ddc0a1'} size={28} />
                        <div className="ml-2">(<span>1</span> customer review)</div>
                    </div>
                    <div className="flex my-6 items-end ">
                        {product.oldPrice?(
                            <span className="text-gray-400 line-through text-2xl mr-4">${product.oldPrice}</span>
                        ):''}
                        <span className="text-4xl">${product.price}</span>
                    </div>
                    <p className="text-left text-gray-500 leading-7">{product.description}</p>
                    <div className="text-green-500 text-left mt-7 mb-8">5 in stock</div>
                    <hr className="text-gray-400 mb-8"></hr>
                    <div className="h-11 flex gap-3">
                        <input type="number" placeholder='1' min='1' className="h-full border-2 outline-none rounded-sm py-2 px-3 w-14 text-gray-500 text-center" onChange={e => setQuantityWhenAdd(e.target.value)}/>
                        {/* <button className="w-36 bg-opacity-40 text-white text-sm bg-yellow-700 rounded-sm uppercase transition duration-200 hover:bg-black " onClick={()=>{handleAddToCart(product)}}>add to cart</button> */}
                        <Button label={'add to cart'} handleClick={()=>{handleAddToCart(product)}} />
                    </div>
                    <div className="capitalize my-8 text-left">
                        <span className="text-gray-500 mr-1">category:</span>
                        <span>{product.category}</span>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex gap-2 mt-2">
                    {(review === false)?(
                        <><button className="w-fit px-6 h-12 bg-opacity-40 text-white text-sm bg-yellow-700 font-bold rounded-sm uppercase transition duration-200" onClick={() => { setReview(false); } }>description</button><button className="w-fit px-6 h-12 bg-opacity-40 text-gray-400 text-sm bg-gray-300 font-bold rounded-sm uppercase transition duration-200 hover:bg-gray-200 hover:text-gray-300" onClick={() => { setReview(true); } }>Reviews (<span>1</span>)</button></>
                    ):(
                        <><button className="w-fit px-6 h-12 bg-opacity-40 text-gray-400 text-sm bg-gray-300 font-bold rounded-sm uppercase transition duration-200 hover:bg-gray-200 hover:text-gray-300" onClick={() => { setReview(false); } }>description</button><button className="w-fit px-6 h-12 bg-opacity-40 text-white text-sm bg-yellow-700 font-bold rounded-sm uppercase transition duration-200" onClick={() => { setReview(true); } }>Reviews (<span>1</span>)</button></>
                    )}
                    
                </div>
                { !review? (
                    <div className="my-9">
                        <h3 className="capitalize text-2xl mb-6 text-left">description</h3>
                        <p className="text-gray-500 text-left leading-7">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                ):(
                    <div className="my-9 flex justify-between gap-8 lg:gap-14">
                    <div className="w-1/2">
                        <h3 className="capitalize text-2xl mb-6 text-left">Reviews</h3>
                        <p className="text-gray-500 text-left leading-7">There are no reviews yet.</p>
                    </div>
                    <div className="w-1/2">
                        <h3 className="capitalize text-gray-500 text-2xl text-left">be the first to review "{product.name}"</h3>
                        <p className="text-gray-500 text-left leading-7">Your email address will not be published. Required fields are marked *</p>
                        <span>Your rating</span>
                        <Rating allowEdit={true} color1={'#e1e1e1'} color2={'#ddc0a1'} size={28} />
                        <form className="flex flex-col">
                            <label>Your reviews *</label>
                            <textarea className="border p-3 my-3"></textarea>
                            <label>Name *</label>
                            <input type="text" className="border p-3 my-3" />
                            <label>Email *</label>
                            <input type="text" className="border p-3 my-3" />
                            <button className="w-28 py-3 text-white text-xs font-bold bg-black rounded-sm uppercase transition duration-200 hover:bg-yellow-700 hover:bg-opacity-40">submit</button>
                        </form>
                    </div>
                    </div>
                )}

                
                
                
            </section>
            <section>
                <h3 className="capitalize text-2xl text-left">Related products</h3>
                {/* {data.map((pro)=> {
                    if(pro.category === product.category){
                        return(
                            <ProductCard />
                        )
                    }
                    return null;
                })} */}

            </section>
        </div>
    )
}

export default ProductDetails