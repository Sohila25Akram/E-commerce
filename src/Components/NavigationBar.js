import React, {useState, useContext} from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {BsCart} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';

import { CountContext } from '../index'
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    
    const {isSmall, setIsSmall} = useState(window.innerWidth < 720);
    const {count, changeCount} = useContext(CountContext);
    // const {count} = useContext(CountContext);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsSmall(window.innerWidth < 720);
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    
    return(
        <div className='relative lg:shadow-navShadow'>
            <div className='max-container padding-x w-full h-20 flex justify-between items-center'>
                <a href='#'
                    className="text-3xl font-medium uppercase">
                    engage
                </a>
                <nav className='w-3/5 capitalize flex justify-end'>
                    {/* <ul className='w-3/5 flex justify-between'>
                        <li>home</li>
                        <li>about</li>
                        <li>blog</li>
                        <li>contact</li>  
                    </ul> */}
                    
                    <div className='w-1/4 flex justify-around'>
                        <Link to='/cart' className='relative'><BsCart size={24} onTouchMoveCapture={()=>{}} className=''/>{(count <= 0)?'':(<span className='absolute -top-1 -end-3 px-1.5 leading-4 rounded-xl text-xs bg-hoverYellow text-white'>{count}</span>)}</Link>
                        <AiOutlineSearch size={24} />
                    </div>
                    
                </nav>
                {isSmall?(
                    <button><AiOutlineMenu size={30} /></button>
                ):(
                    <button className='hidden'><AiOutlineMenu size={30} /></button>
                )}
            </div>
        </div>
    )
}

export default NavigationBar