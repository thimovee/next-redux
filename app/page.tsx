"use client"
import ProductCard from "components/ProductCard";
import { dummyProducts } from "dummydata";
import Hero from "components/Hero";
import { Product } from "interfaces";
import Link from "next/link";
import Image from "next/image";
import ReviewSlider from "@/components/ReviewSlider";
interface Props {
  product: Product;
}

const HomePage = (props: Props) => {
  return (
    <>
      <Hero product={props.product} />
      <div className="flex w-11/12 mx-auto mb-32 mt-20 flex-col">
        <h1 className="text-white font-semibold text-3xl mb-10 text-center">Trending Categories</h1>
        <div className="flex gap-4">
          <div className="w-1/6 rounded-md flex flex-col border border-[#101010]">
            <Image className="mx-auto" src={dummyProducts[0].imagePath} alt={dummyProducts[0].name} width={200} height={300} />
            <div className="text-white font-medium text-lg py-4 bg-[#101010] w-full text-center rounded-b-md flex"><span className="ml-6">On-ear</span><svg className="my-auto ml-auto mr-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></div>
          </div>
          <div className="w-1/6  rounded-md border border-[#101010]">
            <Image className="mx-auto" src={dummyProducts[1].imagePath} alt={dummyProducts[1].name} width={200} height={300} />
            <div className="text-white font-medium text-lg py-4 bg-[#101010] w-full text-center rounded-b-md flex"><span className="ml-6">On-ear</span><svg className="my-auto ml-auto mr-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></div>
          </div>
          <div className="w-1/6 rounded-md border border-[#101010]">
            <Image className="mx-auto" src={dummyProducts[2].imagePath} alt={dummyProducts[2].name} width={200} height={300} />
            <div className="text-white font-medium text-lg py-4 bg-[#101010] w-full text-center rounded-b-md flex"><span className="ml-6">On-ear</span><svg className="my-auto ml-auto mr-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></div>
          </div>
          <div className="w-1/6 rounded-md border border-[#101010]">
            <Image className="mx-auto" src={dummyProducts[3].imagePath} alt={dummyProducts[3].name} width={200} height={300} />
            <div className="text-white font-medium text-lg py-4 bg-[#101010] w-full text-center rounded-b-md flex"><span className="ml-6">On-ear</span><svg className="my-auto ml-auto mr-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></div>
          </div>
          <div className="w-1/6 rounded-md border border-[#101010]">
            <Image className="mx-auto" src={dummyProducts[4].imagePath} alt={dummyProducts[4].name} width={200} height={300} />
            <div className="text-white font-medium text-lg py-4 bg-[#101010] w-full text-center rounded-b-md flex"><span className="ml-6">On-ear</span><svg className="my-auto ml-auto mr-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></div>
          </div>
          <div className="w-1/6 rounded-md border border-[#101010]">
            <Image className="mx-auto" src={dummyProducts[5].imagePath} alt={dummyProducts[5].name} width={200} height={300} />
            <div className="text-white font-medium text-lg py-4 bg-[#101010] w-full text-center rounded-b-md flex"><span className="ml-6">On-ear</span><svg className="my-auto ml-auto mr-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-[11/12] mx-auto justify-center flex-col text-center">
        <h1 className="text-white font-semibold text-3xl mb-10">Recommended for you</h1>
        <div className="flex w-11/12 justify-center mx-auto">
          {dummyProducts.slice(0, 7).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap w-[11/12] mx-auto justify-center flex-col text-center mt-20 mb-40">
        <h1 className="text-white font-semibold text-3xl mb-10">Featured products</h1>
        <div className="flex w-11/12 justify-center mx-auto">
          {dummyProducts.slice(0, 7).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <Link className="mx-auto" href="/products/">
          <button className="transition duration-700 hover:scale-110 hover:text-white hover:bg-black hover:border-2 border-white w-[180px] h-[60px] bg-white text-black font-semibold text-[22px] rounded-full  mt-6">
            View more
          </button>
        </Link>
      </div>
      <ReviewSlider />
    </>
  );
};

export default HomePage;
