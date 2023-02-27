import { CartItem } from "interfaces";
import Image from "next/image";
import React from "react";
import {
  decrement,
  increment, remove
} from "store/features/cartSlice";
import { useAppDispatch } from "store/store";
import QtyBtn from "./QtyBtn";

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>    
    <div className="w-[1200px] h-[190px] bg-[#1B1B1B] flex rounded-[20px] mb-[50px]">
      <div className="my-auto ml-5  rounded-[20px]"><Image src={cartItem.product.imagePath} width={200} height={140} alt={cartItem.product.name} className="rounded-[13px] my-auto"/></div>
      <div className="flex flex-col my-auto ml-10">
        <div className="text-[33px] text-white font-semibold"> {cartItem.product.name} - {cartItem.product.price}.00€</div>
        <div className="text-[20px] leading-[30px] font-medium text-white"><span className="text-[#8C8C8C]">Color: </span>{cartItem.product.color}</div>
        <div className="text-[20px] leading-[30px] font-medium text-white"><span className="text-[#8C8C8C]">Brand: </span>{cartItem.product.brand}</div>
      </div>
      <div className="ml-auto mr-[50px] my-auto">
        <h1 className="text-[31px] leading-[50px] text-white font-semibold mb-[25px]">{cartItem.qty * cartItem.product.price}.00 €</h1>
        <QtyBtn
        qty={cartItem.qty}
        onDecrease={() =>
          dispatch(decrement(cartItem.product))}
        onIncrease={() =>
          dispatch(increment(cartItem.product))}
        onRemove={() =>
          dispatch(remove(cartItem.product))}
          />
      </div>
    </div>
    </>
  );
};
export default CartItemCard;