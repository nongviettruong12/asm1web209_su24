import { useEffect,useState } from "react";
import Light from '../assets/unsplash_pxoZSTdAzeU.png'
import { Link } from "react-router-dom";
const ProductList = () => {

  const [products,setProduct] = useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:3000/products`)
    .then((res)=>res.json()).then((data)=>{
      setProduct(data)
    })
  },[])

  return (
    <>
    <div className="mb-[112px]">
        <span className="font-[Roboto] font-bold text-[48px] leading-[57.6px] ml-[64px]">Featured Products</span>
        <div className="flex">
        <h5 className="ml-[64px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-[832px]">View All</button>
        </div>
    </div> 
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-lg ml-[64px] mr-[64px]">
{products.map((product:any)=>{
  return(
    <div className=" border-[red] ">
        <img className="h-[304px] w-[304px] rounded-lg border border-gray-200" src={product.image} alt=""/>
        <div className="my-[16px]">
        <div className="flex justify-between">
        <Link to={'/detail/'+product.id}>
        <b className="font-[Roboto] font-[600px] text-[18px] leading-[27px]">{product.name}</b>
        </Link>
          <b className="font-[Roboto] font-[600px] text-[18px] leading-[27px]">${product.price}</b>
          <br />
        </div>
          <h5 className="font-[Roboto] font-[400px] text-[14px] leading-[21px]">{product.brand}</h5>
          </div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-[304px]">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-[304px]">
Add to cart
</span>
</button>

    </div>
  )
})} 
</div>
    <div className="">
    <div className="mt-[112px] py-[112px] px-[64px] bg-black font-[Roboto]">
      <div className="text-[white]">
      <h3 >Tag line</h3>
      <h1 className="my-[16px] font-[700px] text-[48px] leading-[57.6px]">Sale Up To 50%</h1>
      <div className="flex">
        
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-[400px] text-[16px] leading-[24px]">
Shop Now
</span>
</button>
        <h3 className="flex items-center ml-[24px] font-[400px] text-[16px] leading-[24px]">Button
        <svg className="w-6 h-6 text-[white] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
</svg>
        </h3>
        </div>
      </div>
    </div>
      </div>
      <div className="mb-[80px] mt-[112px]">
        <span className="font-[Roboto] font-bold text-[48px] leading-[57.6px] ml-[64px]">Popular Products</span>
        <div className="flex">
        <h5 className="ml-[64px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-[832px]">View All</button>
        </div>
    </div> 
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-lg ml-[64px] mr-[64px] mb-[112px]">
{products.map((product:any)=>{
  return(
    
    <div>
        <img className="h-[304px] w-[304px] rounded-lg border border-gray-200" src={product.image} alt=""/>
        <div className="my-[16px]">
        <div className="flex justify-between">
        <b className="font-[Roboto] font-[600px] text-[18px] leading-[27px]">{product.name}</b>
          <b className="font-[Roboto] font-[600px] text-[18px] leading-[27px]">${product.price}</b>
          <br />
        </div>
          <h5 className="font-[Roboto] font-[400px] text-[14px] leading-[21px]">{product.brand}</h5>
          </div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-[304px]">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-[304px]">
Add to cart
</span>
</button>
    </div>
  )
})} 
</div>
    </>
  );
};

export default ProductList;
