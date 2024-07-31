import React, { useEffect, useState } from 'react';
import data from '../data.json';
import '../App.css';

import ProductCard from '../Components/ProductCard';
import {GrFormNext} from 'react-icons/gr'
// import RangeSlider from 'react-range-slider-input';
import ReactSlider from 'react-slider';
import Rating from '../Components/Rating';
import { TopProduct } from '../Components/TopProduct';
import Button from '../Components/Button';

const productLength = data.products.length;
const getTopRatedProducts = data.products.filter(product => Number(product.rate) === 5);

const Shop = () => {
  const [numShow, setNumShow] = useState(productLength);
  const [chosenSort, setChosenSort] = useState('default');
  const [sortedData, setSortedData] = useState([]);
  const [filterPrice, setFilterPrice] = useState(
    {
      min: 0,
      max: 100
    }
  )
  const [filteredDataByPrice, setFilteredDataByPrice] = useState(data.products)
  
  const handleNumberShown = (event) => {
    const selectedNumber = parseInt(event.target.value);
    setNumShow(selectedNumber);

  };
  //check if this way true or not - search
  const handleSortBy = (event) => {
    const selectedSort = event.target.value;
    setChosenSort(selectedSort);

    if(selectedSort === "name"){
      const sortedData = [...data.products].sort((a, b) => a.name.localeCompare(b.name));
      setSortedData(sortedData);
    }else if(selectedSort === "price"){
      const sortedData = [...data.products].sort((a, b) => a.price - b.price);
      setSortedData(sortedData);
    }

  };

  const handleByPriceClick = () => {
    const filteredDataByPriceList = data.products.filter(item => item.price >= filterPrice.min && item.price <= filterPrice.max);
    setFilteredDataByPrice(filteredDataByPriceList)
  }

  // related to sort filter only
  const productsToShow = (chosenSort === "name") || (chosenSort === "price") ? sortedData : filteredDataByPrice.slice(0, numShow);

  // useEffect(() => {
  //   handleByPriceClick(); // To apply initial price filter
  // }, [filterPrice]);

  return (
    

    <div className='max-container padding-x padding-y lg:flex justify-between lg:gap-14'>
      <div className='lg:w-3/4'> 
        <div className="pb-12 text-start md:flex items-center">
          <div className="h-fit border-2 w-fit px-2 mr-3">
            <label htmlFor="sort"></label>
            <select name="sort" onClick={handleSortBy} className="w-60 h-12 text-gray-500 outline-none">
            <option value="default" className="text-gray-400">
                Sort by Default
              </option>
              <option value="price" className="text-gray-400">
                Sort by Price
              </option>
              <option value="name" className="text-gray-400">
                Sort by Name
              </option>
            </select>
          </div>
          <div className="h-fit border-2 w-fit px-2">
            <label htmlFor="number"></label>
            <select
              name="number"
              className="w-60 h-12 text-gray-500 outline-none"
              onChange={handleNumberShown}
            >
              <option value="4" className="text-gray-400">
                Show 4 products
              </option>
              <option value="8" className="text-gray-400">
                Show 8 products
              </option>
              <option value={productLength} className="text-gray-400">
                Show All products
              </option>
            </select>
          </div>
          <div className='pt-12 text-right text-gray-500 md:pt-0 grow'>Showing 1 – {numShow} of {productLength} results</div>
        </div>
        {/* <div className="px-20 flex flex-wrap gap-6">{renderProductCards()}</div> */}
      
        <div className="flex flex-wrap gap-4 xl:gap-7 justify-between">
          <ProductCard num = {numShow} dataD = {productsToShow}/>
          {/* <ProductCard num = {numShow} /> */}
        </div>
      </div>
      <div className='text-left w-full lg:w-1/4'>
        <div className='w-full pb-5 border-b-2'>
          <label for="filter" className='text-xl'>Filter by price</label><br></br>
          {/* <input type='range'id='filter' min={12} max={35} className="w-1/2 py-4" /> */}
          {/* <input type='range'id='filter' min={12} max={35} className="w-1/2 py-4" /> */}
          {/* <RangeSlider min={0} max={100} step={5} value={[30, 60]} /> */}
          <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              defaultValue={[0, 100]}
              ariaLabel={['Lower thumb', 'Upper thumb']}
              ariaValuetext={state => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              pearling
              minDistance={10}
              max={100}
              min={0}
              onChange={(value) => setFilterPrice({ min: value[0], max: value[1] })}
          />
          <div className='flex justify-between pb-2'>
            {/* <span className="h-fit tracking-widest uppercase bg-yellow-700 bg-opacity-40 text-white rounded-sm px-3 py-2 text-xs cursor-pointer hover:bg-black" onClick={handleByPriceClick}>filter</span> */}
            <Button label={'filter'} isFitWidth={true} handleClick={handleByPriceClick} />
            <span className=''><span className='text-gray-500'>Price:</span> $<span>{filterPrice.min}</span> — $<span>{filterPrice.max}</span></span>
          </div>
          
        </div>
        <h3 className='my-5 text-xl'>Top related products</h3>
        {getTopRatedProducts.map((product)=>(
            
          <TopProduct product={product} key={product.id} />
              
        ))}
        <div className='my-6 border-t-2'>
        <h3 className='my-5 text-xl'>Product categories</h3>
        <ul className='text-gray-500'>
          <li className='pb-4 cursor-pointer w-fit hover:text-yellow-700 hover:text-opacity-50'><GrFormNext className='inline'/> Backpacks</li>
          <li className='pb-4 cursor-pointer w-fit hover:text-yellow-700 hover:text-opacity-50'><GrFormNext className='inline' /> Bags</li>
          <li className='pb-4 cursor-pointer w-fit hover:text-yellow-700 hover:text-opacity-50'><GrFormNext className='inline' /> Clothing</li>
          <li>
            <ul className='ps-5'>
              <li className='pb-4 cursor-pointer w-fit hover:text-yellow-700 hover:text-opacity-50'><GrFormNext className='inline' /> Hat</li>
              <li className='pb-4 cursor-pointer w-fit hover:text-yellow-700 hover:text-opacity-50'><GrFormNext className='inline' /> T-shirts</li>
            </ul>
          </li>
          <li className='pb-4 cursor-pointer w-fit hover:text-yellow-700 hover:text-opacity-50'><GrFormNext className='inline' /> Shirts</li>
          <li className='pb-4 cursor-pointer w-fit hover:text-yellow-700 hover:text-opacity-50'><GrFormNext className='inline' /> Shoes</li>
          <li className='pb-4 cursor-pointer w-fit hover:text-yellow-700 hover:text-opacity-50'><GrFormNext className='inline' /> Sunglasses</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;