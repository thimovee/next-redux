"use client"
import ProductCard from "components/ProductCard";
import { dummyProducts } from "dummydata";
import Hero from "components/Hero";
import { Product } from "interfaces";
import Link from "next/link";
interface Props {
  product: Product;
}

const HomePage = (props: Props) => {
  return (
    <>
      <Hero product={props.product} />
      {// Popular categories
      }
      {
        // Featured products
      }
      <div className="p-4 flex flex-wrap w-[1800px] mx-auto flex-row">
        {dummyProducts.slice(0, 5).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
        <Link className="mx-auto" href="/products/">
        <button className="transition duration-700 hover:scale-110 hover:text-white hover:bg-black hover:border-2 border-white w-[225px] h-[75px] bg-white text-black font-semibold text-[22px] rounded-full  mt-6">
          View more
        </button>
        </Link>
      </div>
      {
        // Recommended products
      }
      {
        // Reviews
      }
    </>
  );
};

export default HomePage;
