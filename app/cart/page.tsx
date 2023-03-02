"use client";
import CartItemCard from "@/components/CarItemCard";
import React from "react";
import { TotalPriceSelector } from "store/features/cartSlice";
import { useAppSelector } from "store/store";

const CartPage = () => {
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );
    
  
  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <>
    {cartItems.length === 0 ? 
    <h1 className="text-[56px] leading-[56px] text-white text-center my-[150px] font-bold">Your cart is empty</h1>
    : 
    <>
       <h1 className="text-[56px] leading-[56px] text-white text-center my-[150px] font-bold">Shopping Cart</h1>
    <div className="flex w-[1750px] mx-auto mt-">
      <div className="flex flex-col">
        
      {cartItems.map((item) => (
  <CartItemCard key={item.qty} cartItem={item} />
))}
</div>
      <div className="w-[525px] h-[325px] bg-[#1B1B1B] flex text-white rounded-[20px] ml-10">
        <div className="w-[425px] h-[275px] mx-auto my-auto">
        <div className="flex justify-between w-full mb-[10px]">
          <div className="text-[32px] leading-8 font-semibold">Total</div>
          <div className="font-semibold text-[color:var(--accent-color)] text-[32px] leading-8">€{totalPrice}.00</div>
        </div>
        <div className="font-medium leading-9 text-[24px] mb-6"></div>
        <button className="w-full bg-[color:var(--accent-color)] h-[70px] rounded-full"><span className="text-[20px] font-semibold tracking-[0.4px]">Proceed to checkout</span></button>
        <div className="bg-[#303233] px-9  h-[70px] mt-[20px] rounded-full"><input placeholder="Enter discount code" className="focus:outline-none w-[355px] h-[70px] bg-[#303233] text-[#A1A1A1]"/><button className="absolute -translate-x-[75%] translate-y-[10%] bg-black w-[107px] h-[57px] rounded-full text-[#86898C]"><span className="text-[18px] tracking-[0.4px]">Apply</span></button></div>
        </div>
      </div>
    </div>
    </>
    }
    </>
  );
};

export default CartPage;
