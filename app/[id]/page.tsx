import { dummyProducts } from "@/dummydata";
import { Product } from "@/interfaces";
import Image from "next/image";
async function getProduct(id: string): Promise<Product | undefined> {
  const product = dummyProducts.find((p) => p.id.toString() === id);
  return product;
}

export default async function ProductPage({ params }: any) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-80">
      <h1 className="text-white font-bold text-8xl">Product ID: {product.id}</h1>
        <h1 className="text-white font-bold text-8xl">Product name: {product.name}</h1>
        <h1 className="text-white font-bold text-8xl">Product price: {product.price}</h1>
        <Image
        src={product.imagePath}
        alt={product.name}
        width={330}
        height={252}
        className="mx-auto rounded-[15px] my-auto mt-2"
        />
    </div>
  );
}
