"use client"
import ProductCard from "components/ProductCard";
import { dummyProducts } from "dummydata";
import Hero from "app/Hero";
import { Product } from "interfaces";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
interface Props {
  product: Product;
}

const HomePage = (props: Props) => {
  const [results, setResults] = useState(5);
  const [displayedProducts, setDisplayedProducts] = useState(dummyProducts.slice(0, results));

  useEffect(() => {
    setDisplayedProducts(dummyProducts.slice(0, results));
    console.log(results)
  }, [results]);

  const handleViewMore = () => {
    setResults(results + 5);
  };
  return (
    <>
      <Hero product={props.product}/>
      <div className="p-4 flex flex-wrap w-[1800px] mx-auto flex-row">
        {displayedProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard product={product} /></Link>
        ))}
        <button className="transition duration-700 hover:scale-110 hover:text-white hover:bg-black hover:border-2 border-white w-[225px] h-[75px] bg-white text-black font-semibold text-[22px] rounded-full mx-auto mt-6" onClick={handleViewMore}>
          View more
        </button>
      </div>
    </>
  );
};

export default HomePage;
