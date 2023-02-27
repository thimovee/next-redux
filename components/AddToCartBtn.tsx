"use client";
import { Product } from "interfaces";
import React from "react";
import {increment, productQtyInCartSelector} from "store/features/cartSlice";
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
      <div className="flex justify-center">
        <button
          onClick={() => dispatch(increment(props.product))}
          className="hidden-child text-white w-[190px] h-[60px] bg-[color:var(--accent-color)] rounded-full text-xl font-semibold absolute -translate-y-[155%]"
        >
          Add To Cart
        </button>
      </div>
    );
};

export default AddToCartBtn;
