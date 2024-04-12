import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div>
          Phone Number: 956 742 455 678 | Email:info@ddsgnr.com
          </div>
          <div>

          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>

            </a>
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>

            </a>
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
</svg>


            </a>
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>



            </a>
            <div className="flex">
            <svg className="w-6 h-6 text-gray-800 dark:text-white mr-[2.44px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

              <span className="font-[Roboto] font-[400px] text-[21px] leading-[21px] mx-[8px]">EngLish</span> 
              <svg className="w-6 h-6 text-gray-800 dark:text-white mx-[2.44px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
</svg>

            </div>
            <Link to={`/signin`}
             
              className="text-sm hover:underline flex"
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>


             <span className="ml-[10px] font-[Roboto] font-[400px] text-[21px] leading-[21px] mx-[8px]">Sign In</span>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700 flex justify-between">
        
        <div className="max-w-screen-xl px-4 p-[14px] mx-auto">
          <div className="flex items-center">
            
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm text-center items-center ">
            <div className="flex mr-[378px]">
              <img className="w-[60px] h-[30px] left-[6.81px] object-cover"
                src="https://media.licdn.com/dms/image/C4D0BAQE3vX_5woBzQg/company-logo_200_200/0/1630454928252/ddsgnr_logo?e=2147483647&v=beta&t=jdZL-UYqOHcBGCIPrUcL_OyAimjsTZjhH0XNjUSXXZ8"
                alt=""
              />
              <h2 className="font-[Inter] font-[700px] text-[25.07px] leading-[30.34px]">Ddsgnr</h2>
            </div>
              <li className="mx-[32px]">
                <Link to={'/'}
                
                  className="text-gray-900 dark:text-white hover:underline font-[Roboto] text-[16px] leading-[24px] font-normal"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="mx-[32px]">
                <Link to={`/products`}
                  
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Products
                </Link>
              </li>
              <li className="mx-[32px]">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About Us
                </a>
              </li>
              <li className="mx-[32px]">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </a>
              </li>

              <Search/>

              <li className="mx-[32px]">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white ml-[10px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  <span className="font-[Roboto] text-[12px] leading-[18px] font-normal ">
                    wishList
                  </span>
                </a>
              </li>
              <li className="mx-[32px]">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  <span className="font-[Roboto] text-[12px] leading-[18px] font-normal">
                    Cart
                  </span>
                </a>
              </li>
              <li className="mx-[32px]">
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white ml-[20px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z"
                    />
                  </svg>
                  <span className="font-[Roboto] text-[12px] leading-[18px] font-normal">
                    Notifications
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
