"use client"
import React, { useState, useEffect } from 'react'


const Footer = () => {
  return (
    <>
    <div className="mt-[225px]">
    <svg className="-mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111111" fillOpacity="1" d="M0,256L60,256C120,256,240,256,360,266.7C480,277,600,299,720,288C840,277,960,235,1080,218.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    <footer className="bg-[#111111] w-full h-[350px] flex justify-between text-white">
        <div className="my-auto ml-32">
            <div className="flex flex-col">
                <div className=" text-5xl font-bold ">LISTEN</div>
                <div className="mt-6 mb-9 text-[#a1a1a1]">  ©Thimo van Ewijk</div>
                <div><a href="https://dopegood.com/" className="text-[#a1a1a1]">Design</a></div>
            </div>
        </div>
        <div className="my-auto text-[#a1a1a1] text-lg">
            <div className="flex flex-col">
                <div>thimove@gmail.com</div>
                <div className="my-9">+31623456789</div>
                <div>3002 ER - Tiel </div>
            </div>
        </div>
        <div className="my-auto text-[#a1a1a1] text-lg leading-6">
            <div className="flex flex-col">
                <div>About Us</div>
                <div className="my-9">Privacy Policy</div>
                <div >Terms & Conditions </div>
            </div>
        </div>
        <div className="my-auto mr-32">
            <div className="flex flex-col">
                <div className="font-semibold text-2xl tracking-wide mb-3">Stay up to date</div>
                <div className="text-[#a1a1a1] mb-6">By subscribing to our newsletter</div>
                    <div className="w-[400px] h-14">
                        <div className="bg-[#303233] px-9  h-[56px] mt-[20px] rounded-full"><input type="email" placeholder="Enter your mail" className="focus:outline-none w-[305px] h-[56px] bg-[#303233] text-[#A1A1A1]"/><button className="absolute translate-x-[10%] -translate-y-[0%] bg-[color:var(--accent-color)] w-14 h-14 rounded-full text-white"><svg className="h-6 w-6 mx-auto" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button></div>
                    </div>
            </div>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Footer