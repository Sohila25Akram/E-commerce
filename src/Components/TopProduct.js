import Rating from "./Rating"

export function TopProduct({product}){
    return(
      <div className='flex justify-between items-center py-2'>
        <div>
          <h6 className='text-gray-400 capitalize'>{product.name}</h6>
          <span>
            <Rating valueSelected={Number(product.rate)}  color1={'#555'} color2={'#ddc0a1'} />
          </span>
          <h6 className='text-gray-500'>${product.price}</h6>
        </div>
        <div className='w-16 h-16 overflow-hidden border-2 border-slate-100'>
          <img src={product.src} alt="" className='w-full' />
        </div>
      </div>
    )
}