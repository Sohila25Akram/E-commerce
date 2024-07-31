import React, { useContext, useState } from "react";
import {Link} from "react-router-dom"
import whiteblouse from '../images/whiteblouse.png'
import {BsCart} from 'react-icons/bs';
// import { FaStar } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import data from '../data.json'
import ProductDetails from "../Pages/ProductDetails";
import '../App.css';
import { CountContext } from "../index";
import Rating from "./Rating";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({num, dataD}) =>{
  
  const [additToCart, setAdditToCart] = useState();
  // const [count, setCount] = useState(2);
//   const [count, setCount] = useContext(CountContext);
  
  // const handleAddToCart = (product) => {
   
  //   product.addToCart = "add";

  // };
//   console.log(count);


    const {count, changeCount} = useContext(CountContext);

    const handleAddToCart = (product) =>{
        toast(
          <div className="flex px-2">
            <div className="p-1 rounded-xl w-fit mr-4 text-xs h-fit bg-greenNotify text-white"><FaCheck /></div> product "{product.name}" has been added to cart
          </div>
        )
        
        changeCount(product.id);
        product.addToCart = "add";
    }

    
    return(
        <>
        {/* {Array.isArray(data) && data.map((product) => */}
        {dataD.map((product) => {
          if(product.id <= num){
            return(
            <div key={product.id} className="productCard border-2 transition duration-500 group ">
                <div className=" relative overflow-hidden">
                    <div className="flex justify-between p-2 absolute z-10" style={{width:"100%"}}>
                        {/* <div className="rate"> */}
                          <Rating valueSelected={Number(product.rate)} color1={'#e1e1e1'} color2={'#555'} />
                        {/* </div> */}
                        {product.sale?(<span className="h-fit uppercase bg-yellow-800 bg-opacity-40 text-white rounded-sm font-bold px-3 py-1.5 text-xs">Sale!</span>):''}
                    </div>
                   
                      <img src={product.src} alt="" className="block"></img>
                    
                    <Link to={`/details/${product.id}`} className="show-details -z-1 w-full h-11 border-t-2 absolute -bottom-11 left-0 bg-white text-center pt-2 bg-opacity-60 transition duration-300 hover:text-white hover:bg-hoverYellow group-hover:bottom-0 group-hover:transition-all group-hover:duration-500">Show Details</Link>
                    {/* <Link to={{pathname: `/productdetails/${product.id}`, state: {productData: product}}} className="-z-1 w-full h-11 border-y-2 absolute -bottom-11 left-0 bg-white bg-opacity-60 hover:bg-yellow-700 transition duration-300 hover:bg-opacity-40 hover:text-white group-hover:bottom-0 group-hover:transition-all group-hover:duration-500">Show Details</Link> */}
                </div>
                <div className="bg-white relative text-start px-5 py-5 z-1 border-t-2 border-slate-100 xl:h-fit">
                    <h3 className="bg-white z-10 text-lg mb-2 capitalize">{product.name}</h3>
                    <div className="bg-white flex relative items-end">
                        {product.oldPrice?(<span className="text-sm line-through text-gray-400 mr-2">${product.oldPrice}</span>):''}
                        <span className="text-gray-500">${product.price}</span>
                        <button onClick={()=>{handleAddToCart(product)}} className="absolute right-0 -top-8 -z-1 duration-0 text-white bg-white group-hover:text-gray-500 group-hover:transition-all group-hover:top-0 group-hover:duration-500 hover:bg-gray-100 outline-none"><BsCart size={24} style={{display:'inline'}} /><span>Add to cart</span></button>
                    </div>
                </div>
            </div>)
          }
         
          })}
        </>
    )
}

export default ProductCard