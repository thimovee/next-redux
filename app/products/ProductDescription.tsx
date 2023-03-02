"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from 'react'
import {useState} from 'react'
import { dummyProducts } from '@/dummydata';
import { Product } from '@/interfaces';

interface Props {
    product: Product;
}
const ProductDescription = () => {
    const [index, setIndex] = useState(0)
    // nog niet afff
    const [product, setProduct] = useState(0)
  return (
    <Tabs className="w-full">
    <TabList className="mx-auto w-[675px] flex">
      <Tab onClick={()=> setIndex(0)} style={{background: index == 0 ? "#191919" : "#313131"}} className="focus:outline-none  text-center text-xl p-8 text-white cursor-pointer rounded-t-md"><span className="my-auto">Description</span></Tab>
      <Tab onClick={()=> setIndex(1)} style={{background: index == 1 ? "#191919" : "#313131"}} className="focus:outline-none  text-center text-xl p-8 mx-6 bg-[#191919] text-white cursor-pointer rounded-t-md"><span className="my-auto justify-center items-center align-middle">Reviews</span></Tab>
      <Tab onClick={()=> setIndex(2)} style={{background: index == 2 ? "#191919" : "#313131"}} className="focus:outline-none text-center text-xl p-8  bg-[#191919] text-white cursor-pointer rounded-t-md"><span className="my-auto">Shipping Information</span></Tab>
    </TabList>
    <TabPanel style={{display: index == 0 ? "inline" : "none"}} className="w-full text-white">
      <div className="bg-[#191919] h-80 rounded-md text-xl font-medium p-10">
        {dummyProducts[0].description}<br></br><br></br>
        {dummyProducts[0].details}
      </div>
    </TabPanel>
    <TabPanel style={{display: index == 1 ? "inline" : "none"}} className="w-full text-white">
    <div className="bg-[#191919] h-80 rounded-md text-xl font-medium p-10">
        {dummyProducts[product].reviews[product].title}<br></br><br></br>
        {dummyProducts[product].reviews[product].rating}<br></br><br></br>
        {dummyProducts[product].reviews[product].description}<br></br><br></br>
        {dummyProducts[product].reviews[product].date}
      </div>
    </TabPanel>
    <TabPanel style={{display: index == 2 ? "inline" : "none"}} className="w-full text-white">
    <div className="bg-[#191919] h-80 rounded-md">
        <h1>Shipping Informationnnnn</h1>
      </div>
    </TabPanel>
  </Tabs>
  )
}

export default ProductDescription