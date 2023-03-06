"use client"
import { Product } from "interfaces";
import Image from "next/image";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";
interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <>
      <Link href={`/products/${props.product.id}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <div className="flex h-[325px] w-[230px] flex-col mr-[25px] parent mb-10 transition duration-700 ease-in-out">
          <div className="w-full h-[400px]  bg-[#101010] rounded-[15px] flex">
            <Image
              src={props.product.imagePath}
              alt={props.product.name}
              width={230}
              height={252}
              className="mx-auto rounded-[15px] my-auto mt-2"
            />
          </div>
          <div className="py-2 rounded-b-[15px]">
            <div className="text-white font-bold text-center text-2xl">{props.product.name}</div>
            <div className="text-[#a1a1a1] font-bold text-center text-lg">€{props.product.price}.00</div>
          </div>
        </div>
      </Link>
      <div onMouseOver={() => setIsHovering(true)}>{isHovering && <AddToCartBtn product={props.product} />}
      </div>
    </>
  );
};

export default ProductCard;
