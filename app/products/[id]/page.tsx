import AddToCartBtn from "@/components/AddToCartBtn";
import { dummyProducts } from "@/dummydata";
import { Product } from "@/interfaces";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import ProductDescription from "../ProductDescription";
async function getProduct(id: string): Promise<Product | undefined> {
  const product = dummyProducts.find((p) => p.id.toString() === id);
  return product;
}

export default async function ProductPage({ params }: any) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="flex w-10/12 mx-auto mt-32 flex-col -mb-52">
      <div className="flex w-full ">
        <div className="flex flex-col w-[50%]">
        <Image className="mx-auto cursor-zoom-in" src={product.imagePath} alt={product.name} width={600} height={252}/>
        <div className="flex mx-auto">
        <svg className="text-[#a1a1a1] my-auto mr-4 cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path></svg>
          <Image className="bg-[#010101] rounded-[7.5px]"src={product.imagePath} alt={product.name} width={150} height={252}/>
          <Image className="bg-[#010101] mx-4 rounded-[7.5px]"src={product.imagePath} alt={product.name} width={150} height={252}/>
          <Image className="bg-[#010101] rounded-[7.5px]"src={product.imagePath} alt={product.name} width={150} height={252}/>
          <svg className="rotate-180 text-[#a1a1a1] ml-4 my-auto cursor-pointer"stroke="#010101" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path></svg>
        </div>
        </div>
        <div className="w-[50%] flex flex-col  ml-12">
          <div className=" text-5xl font-semibold text-white pb-8 pt-4">{product.name}</div>
          <div className="flex py-8">
          <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
          <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
          <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
          <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path></svg>
          <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></svg>
          <pre className="my-auto text-slate-200 font-semibold">{` (${product.reviews})`}</pre>
          </div>
          <div className="text-white font-semibold text-3xl pb-8">€ {product.price}</div>
          <div className="text-white text-2xl leading-10 flex">
            <span>QTY</span>
            <input placeholder="1" className="text-center my-auto border border-purple-900 w-[55px] rounded-md rounded-r-none bg-[#212121] text-white ml-8 h-10"/>
            <button className="my-auto border border-purple-900 w-8 rounded-md rounded-l-none bg-[#212121] text-white  h-10">
              <svg className="text-[#a1a1a1] mx-auto -mt-2 -rotate-90"stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path></svg>
            </button>
            </div>
          <div className="text-white text-2xl leading-10 flex py-8">
            <span>Color</span>
            <div className="flex my-auto ml-6">
            <button className="rounded-md w-16 h-8 bg-slate-100"></button>
            <button className="rounded-md mx-4 w-16 h-8 bg-purple-700"></button>
            <button className="rounded-md w-16 h-8 bg-[#393939]"></button>
            </div>
          </div>
          <div className="py-8">
            <div className="absolute translate-x-[275px] -translate-y-[320px]">
            <AddToCartBtn product={product}/>
            </div>
          </div>
          <div className="text-[#a1a1a1] pt-10 flex">
          <svg  className="my-auto"stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
          <span className="my-auto pl-2 text-lg">Shop secure, Free Returns</span>
          </div>
          <div className="pb-8 pt-10 text-white flex">
            <button className="w-40 text-lg border-b border-purple-800">Add to Wishlist</button>
            <button className="w-40 bg-transparent text-lg ml-6 border-b border-purple-800">Add to compare</button>
          </div>
          <div className="py-8 text-white text-xl flex align-middle">
            <span>Share</span>
            <div className="ml-6 flex">
            <svg className="mr-4"stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg>
            <svg className="mr-4"stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg>
            <svg className="mr-4"stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
            <svg className="mr-4"stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-16">
        <ProductDescription/>
      </div>
      <div className="flex w-full mt-40 flex-col">
        <div className="text-4xl text-white font-semibold mx-auto mb-20">Related Products</div>
        <div className="flex w-10/12 mx-auto">
          <div className="w-full mx-auto flex">
        {dummyProducts.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
        </div>
        </div>
      </div>
    </div>
  );
}
