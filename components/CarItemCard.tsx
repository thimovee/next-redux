import { CartItem } from "interfaces";
import Image from "next/image";
import React from "react";
import {
  decrement,
  increment,
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
          dispatch(increment(cartItem.product))}/>
      </div>
      <button className="bg-[#303233] w-14 h-14 text-white rounded-full absolute translate-x-[2075%] -translate-y-[35%]"><svg className="text-2xl mx-auto" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></button>
    </div>
    
    

{/*        
{cartItem.product.name}
{cartItem.product.price}
{cartItem.qty}
cartItem.product
*/}
    </>

  );
};
export default CartItemCard;