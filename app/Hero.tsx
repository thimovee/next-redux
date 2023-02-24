"use client"
import Image from "next/image"
import {Product} from "interfaces";
import { dummyProducts } from "dummydata";
import {useState, useEffect} from "react";
interface Props {
    product: Product;
}
const Hero = (props: Props) => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            index == 3 ? setIndex(index-3) : setIndex(index+1)
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
                        <button style={{background: index == 0 ? "var(--accent-color)" : "#453F3F"}} className="h-1 w-[50px] bg-purple-700 mr-[15px]" onClick={()=> setIndex(0)}></button>
                        <button style={{background: index == 1 ? "var(--accent-color)" : "#453F3F"}} className="h-1 w-[50px] bg-[#453F3F] mr-[15px]" onClick={()=> setIndex(1)}></button>
                        <button style={{background: index == 2 ? "var(--accent-color)" : "#453F3F"}} className="h-1 w-[50px]  mr-[15px] " onClick={()=> setIndex(2)}></button>
                        <button style={{background: index == 3 ? "var(--accent-color)" : "#453F3F"}} className="h-1 w-[50px] bg-[#453F3F]" onClick={()=> setIndex(3)}></button>
                    </div>
                </div>
                <div className="h-[520px] w-[500px] flex mr-[180px]">
                <Image
                    src={dummyProducts[index].imagePath}
                    alt={dummyProducts[index].name}
                    width={500}
                    height={500}
                    className="mx-auto rounded-[15px] my-auto mt-2"
                />
                    </div>
                <div className="h-[520px] w-[50px] flex">
                <button className=" w-12 h-12 bg-transparent mt-auto mb-32 mx-auto" onClick={()=> index == 3 ? setIndex(index-3) : setIndex(index+1)}><svg className="mx-auto mt-auto mb-32" xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 30 50" fill="none">
                    <path d="M2.4142 2.12132C3.58577 0.949748 5.48527 0.949748 6.65684 2.12132L25.0416 20.5061C27.3848 22.8492 27.3848 26.6482 25.0416 28.9914L2.4142 6.36396C1.24263 5.19239 1.24263 3.29289 2.4142 2.12132Z" fill="var(--accent-color)"/>
                    <path d="M2.12132 47.87C0.949748 46.6985 0.949748 44.799 2.12132 43.6274L24.7487 21C27.0919 23.3431 27.0919 27.1421 24.7487 29.4853L6.36396 47.87C5.19239 49.0416 3.29289 49.0416 2.12132 47.87Z" fill="var(--accent-color)"/>
            </svg>
            </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;