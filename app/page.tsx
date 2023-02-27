"use client"
import ProductCard from "components/ProductCard";
import { dummyProducts } from "dummydata";
import Hero from "components/Hero";
import { Product } from "interfaces";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
interface Props {
  product: Product;
}

const HomePage = (props: Props) => {
  return (
    <>
      <Hero product={props.product} />
      <div className="p-4 flex flex-wrap w-[1800px] mx-auto flex-row">
        {dummyProducts.slice(0, 5).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
        <button className="transition duration-700 hover:scale-110 hover:text-white hover:bg-black hover:border-2 border-white w-[225px] h-[75px] bg-white text-black font-semibold text-[22px] rounded-full mx-auto mt-6">
          View more
        </button>
      </div>
    </>
  );
};

export default HomePage;
