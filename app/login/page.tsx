import React from 'react'
import Image from 'next/image'
import afbeelding from '@/public/headphones.jpg'

const LoginPage = () => {
  return (
    <div className="flex min-h-screen min-w-screen -mb-[980px]">
        <div className="w-1/2 -z-20">
            <Image
            src={afbeelding}
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full "
            />
        </div>
        <div className="w-1/2 -z-20">
            <div className="flex mt-[165px] w-[700px] mx-auto z-30 flex-col">
                <div className="text-[75px] font-semibold text-white">Login</div>
                <div className="text-[#B7BBBF] text-[16px] font-medium">Don't have an account? <span className="text-lg ml-1 font-semibold text-purple-700">Register</span></div>
                <div className="mt-16"><input className="pb-4 w-[475px] bg-transparent border-b border-[#333333] text-[#3A3B3D] font-semibold" placeholder="Username"/></div>
                <div className="mt-8"><input className="pb-4 w-[475px] bg-transparent border-b border-[#333333] text-[#3A3B3D] font-semibold" placeholder="Password"/></div>
                <div className="mt-16 mb-8"><button className="bg-purple-700 text-white font-semibold text-[23px] w-[475px] rounded-full h-[70px]">Login</button></div>
                <div className="font-semibold text-[#a1a1a1]">Forgot your password?</div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage