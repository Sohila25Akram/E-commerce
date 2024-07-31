import { useState, useContext, useEffect } from 'react';
import { CountContext, QuantityWhenAddContext, TotalAmountContext } from '../index';
import {AiOutlineClose} from 'react-icons/ai';
import data from '../data.json'
import '../App.css';

export function AddedProductToCart({product}){
    var active = true;

    const [quantity, setQuantity] = useState(() => {
        const storedQuantity = localStorage.getItem(`quantity_${product.id}`);
        return storedQuantity ? JSON.parse(storedQuantity) : 1;
      });
    
    const total = product.price * quantity;

    const {count, changeCount} = useContext(CountContext);
    const { totalAmount, setTotalAmount } = useContext(TotalAmountContext);

    const handleQuantity = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
        product.quantityInCart = newQuantity;
        localStorage.setItem(`quantity_${product.id}`, JSON.stringify(newQuantity));
      };
   
    const remove = (product) => {
        
        product.addToCart = "remove"
        changeCount(product.id);
        product.addToCart = "nostate"
        // setTotalAmount(prev => prev - total);
    };

    useEffect(() => {
        const total = product.price * quantity;

        setTotalAmount(prevTotal => prevTotal + total);
        return () => {
            setTotalAmount(prevTotal => prevTotal - total);
        };

       
    }, [quantity, product, setTotalAmount]);

    useEffect(() => {
        window.localStorage.setItem('totalAmount', totalAmount);
        window.localStorage.setItem('quantity', JSON.stringify(quantity));
      }, [totalAmount]);
    
    return(
        <>
                <td className="text-center px-1 border">
                    <button onClick={() => {remove(product)}} className="w-fit bg-red-500 bg-opacity-0 rounded-full p-1 cursor-pointer mx-auto hover:bg-opacity-50 group"><AiOutlineClose className="text-red-500 group-hover:text-white"/></button>
                </td>
                <td className="px-1 border" >
                    <div className="h-16 w-16 overflow-hidden mx-auto">
                        <img src={product.src} alt="" style={{ margin:"0 auto"}}></img>
                    </div>
                
                </td>
                <td className='border'>{product.name}</td>
                <td className='border'>{product.price}</td>
                <td className='border'>
                    <form>
                        <input
                            type="number"
                            placeholder="1"
                            className="h-full border-2 outline-none rounded-sm py-2 px-3 w-14 text-gray-500 text-center"
                            min='1'
                            value={quantity}
                            onChange={handleQuantity}
                        />
                    </form>
                </td>
                <td className='border'>{total}</td>
            
        </>
    )
}