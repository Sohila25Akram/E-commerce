import React from 'react';
import {GrFormNext} from 'react-icons/gr';
import {FaLocationDot} from 'react-icons/fa6';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {BiWorld, BiLogoFacebook, BiLogoLinkedin} from 'react-icons/bi';
import {AiOutlineGoogle, AiOutlineTwitter} from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import data from '../data.json';
import Rating from './Rating';
import { TopProduct } from './TopProduct';

const getTopRatedProducts = data.products.filter(product => Number(product.rate) === 5).slice(0, 3);
// bg-black text-gray-500
// flex flex-col lg:flex-row flex-wrap lg:justify-between  py-8 md:px-6
const Footer = ()=> {
    return(
        <div className='bg-black text-footTextColor'>
            <div className='max-container padding-x padding-y lg:flex justify-between flex-wrap'>
            <div className='md:flex md:gap-8 lg:w-1/2'>
                <div className='md:w-1/2'>
                    <h3 className="text-white text-lg mt-8 mb-5">About us</h3>
                    <p className="leading-7 mb-4">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
                    <p className="leading-7">We are the champions! We are the most amazing theme of all time, yeah.</p>
                </div>
                <div className='md:w-1/2'>
                    <h3 className="text-white text-lg mt-8 mb-5">Opening Hours</h3>
                    <ul className='text-footTextColor list-none '>
                        <li className='my-4'><MdOutlineKeyboardArrowRight className='text-footTextColor inline' /> Monday 10AM – 9PM</li>
                        <li className='my-4'><MdOutlineKeyboardArrowRight className='text-footTextColor inline' /> Tuesday 10AM – 9PM</li>
                        <li className='my-4'><MdOutlineKeyboardArrowRight className='text-footTextColor inline' /> Wednesday 10AM – 9PM</li>
                        <li className='my-4'><MdOutlineKeyboardArrowRight className='text-footTextColor inline' /> Thursday 10AM – 10PM</li>
                        <li className='my-4'><MdOutlineKeyboardArrowRight className='text-footTextColor inline' /> Friday 10AM – 10PM</li>
                        <li className='my-4'><MdOutlineKeyboardArrowRight className='text-footTextColor inline' /> Weekends 10AM – 11PM</li>
                    </ul>
                </div>
            </div>
            <div className='md:flex md:gap-8 lg:w-1/2'>
                <div className='md:w-1/2'>
                    <h3 className="text-white text-lg mt-8 mb-5">Top Rated Products</h3>
                    {getTopRatedProducts.map((product, index) => (
                        <React.Fragment key={product.id}>
                            <TopProduct product={product} />
                            <hr 
                                className='h-1 w-full'
                                style={{ backgroundColor: index === getTopRatedProducts.length - 1 ? 'transparent' : 'initial' }}
                            />
                        </React.Fragment>
                    ))}
                </div>
                <div className='md:w-1/2'>
                    <h3 className="text-white text-lg mt-8 mb-5">Contact Details</h3>
                    <ul className='text-footTextColor list-none '>
                        <li className='my-5 text-sm'><FaLocationDot className='inline me-2' /> Manchester Road 123-78B, Silictown 7854MD, Great Country</li>
                        <li className='my-5'><BsFillTelephoneFill className='inline me-2' /> <a href="#" className='text-gray-400 transition hover:text-white'>+46 123 456 789</a></li>
                        <li className='my-5'><MdEmail className='inline me-2' /> <a href="#" className='text-gray-400 transition hover:text-white'>hello@sitename.com</a></li>
                        <li className='my-5'><BiWorld className='inline me-2' /> <a href="#" className='text-gray-400 transition hover:text-white'>http://www.sitename.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-full mt-24 text-center'>
                <span className='text-sm'>Copyright &copy;Sohila Akram - 2023</span>
                <div className='mt-5'>
                    <a href="#" className='px-2.5 pt-1 pb-2 rounded-3xl transition hover:text-white hover:bg-blue-500 inline-block mx-1'><BiLogoFacebook className='inline text-lg'/></a>
                    <a href="#" className='px-2.5 pt-1 pb-2 rounded-3xl transition hover:text-white hover:bg-red-500 inline-block mx-1'><AiOutlineGoogle className='inline text-lg'/></a>
                    <a href="#" className='px-2.5 pt-1 pb-2 rounded-3xl transition hover:text-white hover:bg-sky-600 inline-block mx-1'><BiLogoLinkedin className='inline text-lg' /></a>
                    <a href="#" className='px-2.5 pt-1 pb-2 rounded-3xl transition hover:text-white hover:bg-sky-400 inline-block mx-1'><AiOutlineTwitter className='inline text-lg' /></a>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Footer;