"use client"
import Image from "next/image"
import { Product } from "interfaces";
import { dummyProducts } from "dummydata";
import { useState, useEffect } from "react";
interface Props {
    product: Product;
}
const Hero = (props: Props) => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            index == 3 ? setIndex(index - 3) : setIndex(index + 1)
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);
    return (
        <section className=" w-[1120px] h-[975px] ml-[357px] flex mt-20">
            <div className="w-full h-[975px] mt-[150px] flex">
                <div className="h-[520px] w-[320px] flex mr-[75px] flex-col">
                    <div className="text-[#453F3F] font-semibold text-[16px]">TRENDING</div>
                    <div className="font-semibold text-[70px] text-white leading-[70px] mb-[60px]">Wireless collection</div>
                    <button className="bg-[color:var(--accent-color)] w-[225px] h-[75px] rounded-[50px] mb-[125px]"><span className="font-semibold text-xl text-white">SHOP NOW</span></button>
                    <div className="flex">
                        <button style={{ background: index == 0 ? "var(--accent-color)" : "#453F3F" }} className="h-1 w-[50px] mr-[15px]" onClick={() => setIndex(0)}></button>
                        <button style={{ background: index == 1 ? "var(--accent-color)" : "#453F3F" }} className="h-1 w-[50px] mr-[15px]" onClick={() => setIndex(1)}></button>
                        <button style={{ background: index == 2 ? "var(--accent-color)" : "#453F3F" }} className="h-1 w-[50px] mr-[15px] " onClick={() => setIndex(2)}></button>
                        <button style={{ background: index == 3 ? "var(--accent-color)" : "#453F3F" }} className="h-1 w-[50px]" onClick={() => setIndex(3)}></button>
                    </div>
                </div>
                <button className="hover:bg-purple-600 hover:scale-105 transition duration-500 ease-in-out translate-x-[775%] translate-y-[477%] absolute w-12 h-12 rounded-full bg-[color:var(--accent-color)]" onClick={() => index == 0 ? setIndex(index + 3) : setIndex(index - 1)}>
                    <svg className=" rotate-180 h-6 w-6 mx-auto text-white" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <div className="h-[520px] w-[1240px] bg-[#101010] rounded-[260px]">
                    <div className="h-[520px] w-[500px] flex  mx-auto ">
                        <Image
                            src={dummyProducts[index].imagePath}
                            alt={dummyProducts[index].name}
                            width={500}
                            height={500}
                            className="mx-auto rounded-[15px] my-auto mt-2"
                        />
                    </div>
                </div>
                <button className="hover:bg-purple-600 hover:scale-105 transition duration-500 ease-in-out translate-x-[2270%] translate-y-[477%] absolute w-12 h-12 rounded-full bg-[color:var(--accent-color)]" onClick={() => index == 3 ? setIndex(index - 3) : setIndex(index + 1)}>
                    <svg className="h-6 w-6 mx-auto text-white" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </div>
        </section>
    )
}

export default Hero;