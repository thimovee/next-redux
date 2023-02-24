'use client'
import Link from "next/link";
import React from "react";
import {totalCartItemsSelector}from "store/features/cartSlice";
import { useAppSelector } from "store/store";
import { useState } from "react";
interface Props {
  className?: string;
}
const Header = () => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 100){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>    
            <nav className=" translate-y-5 top-0 w-[1730px] fixed h-10 left-[95px] py-8 flex justify-between text-white  ">
                <Link href="/"><div className="font-semibold text-[33px] my-auto leading-[17px]">LISTEN</div></Link>
                <div className="flex justify-center">
                <div className={colorChange ? "bg-white text-black  w-full h-10 p-4 pb-12 rounded-full -translate-y-[20px] duration-1000" : " duration-1000 text-white fill-white w-full h-10 p-4 pb-12 rounded-full -translate-y-[30px]"}>
                <button aria-label="search" className="mr-8"><svg xmlns="http://www.w3.org/2000/svg" className="w-[32.5px] h-[32.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                <Link href="/cart"><button aria-label="bag" className="text-white">
                  <svg className="w-[32.5px] h-[32.5px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.905 20.07"><path id="Path_385" data-name="Path 385" d="M1437.92,260.14c-.013-.543-.048-1.09-.083-1.62-.013-.2-.026-.4-.038-.6q-.063-1.077-.129-2.153c-.089-1.482-.182-3.015-.263-4.523a2.039,2.039,0,0,0-2.221-2.147h-.787a5.643,5.643,0,0,0-1.338-3.508,4.637,4.637,0,0,0-6.931-.281,5.441,5.441,0,0,0-1.61,3.789h-.762a2.053,2.053,0,0,0-2.23,2.137c-.043.87-.1,1.756-.151,2.613-.029.462-.057.923-.084,1.385-.028.477-.058.953-.088,1.429-.072,1.143-.147,2.324-.187,3.49a3.637,3.637,0,0,0,1.01,2.679,3.7,3.7,0,0,0,2.69,1.122c1.5,0,3.044,0,4.645,0,1.55,0,3.157,0,4.841,0a3.659,3.659,0,0,0,3.716-3.813Zm-14.2-9.516h1.167l.838.015h7.484l.832.008c.16,0,.319,0,.474-.007a9.229,9.229,0,0,1,1.024.017c.21.019.318.24.331.451.063,1.029.123,2.075.182,3.088.028.477.055.953.083,1.43q.033.571.066,1.141c.056.98.113,1.994.182,2.992a2.48,2.48,0,0,1-.349,1.717,2.07,2.07,0,0,1-1.76.949c-3.067.009-6.21.01-9.609,0a2.122,2.122,0,0,1-1.535-.649,2.091,2.091,0,0,1-.589-1.532c.031-.97.093-1.958.153-2.914.024-.376.047-.752.069-1.129q.055-.942.112-1.883c.06-1,.122-2.035.179-3.052C1423.083,250.762,1423.225,250.624,1423.72,250.624Zm2.352-1.537c0-.02,0-.04.007-.059a7.067,7.067,0,0,1,.146-.9,3.594,3.594,0,0,1,1.549-2.2,3.015,3.015,0,0,1,3.5.081,3.847,3.847,0,0,1,1.581,3.076Z" transform="translate(-1421.016 -243.885)"></path></svg>
                  {!!totalItems && (
                  <span key={totalItems} className="bg-red-500 flex justify-center items-center rounded-full w-6 absolute  translate-x-[75%] -translate-y-[165%] text-white animate-pingOnce">
                  {totalItems}
                  </span>)}
                  </button></Link>
                <button className="mx-8  -translate-y-2 text-[20px] leading-[24px] font-medium"><Link href="/login">Login</Link></button>
                <button aria-label="burger"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="32.5px" width="32.5px" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M16 3v2h-15v-2h15zM1 10h15v-2h-15v2zM1 15h15v-2h-15v2z"></path></svg></button>
           </div>
            </div>
        </nav>
    </>

  );
};

export default Header;