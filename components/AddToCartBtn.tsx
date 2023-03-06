"use client";
import { Product } from "interfaces";
import React from "react";
import { increment, productQtyInCartSelector } from "store/features/cartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "store/store";

interface Props {
  product: Product;
}
const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center relative -translate-x-[135px] translate-y-[255px] duration-700 transition ease-in">
      <button
        onClick={() => dispatch(increment(props.product))}
        className="hover:bg-purple-800 hover:scale-110 duration-700 ease-in-out hidden-child text-white w-[142.5px] h-[45px] bg-[color:var(--accent-color)] rounded-full text-lg font-semibold absolute -translate-y-[155%]"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
