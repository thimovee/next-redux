import { Product } from "interfaces";
import Image from "next/image";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";
interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    //Dynamic route
    <Link href={`/${props.product.id}`}>
    <div className="flex h-[475px] w-[325px] flex-col mr-[25px] parent mb-10 transition duration-700 ease-in-out">
      <div className="w-full h-[400px] bg-[#101010] rounded-[15px] flex">
        <Image
          src={props.product.imagePath}
          alt={props.product.name}
          width={330}
          height={252}
          className="mx-auto rounded-[15px] my-auto mt-2"
        />
      </div>
      <AddToCartBtn product={props.product} />
      <div className="mt-4">
        <div className="text-white font-bold text-center text-2xl">{props.product.name}</div>
        <div className="text-[#a1a1a1] font-bold text-center text-lg">€{props.product.price}.00</div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
