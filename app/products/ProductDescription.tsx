"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from 'react'
import { useState } from 'react'
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
        <Tab onClick={() => setIndex(0)} style={{ background: index == 0 ? "#191919" : "#313131" }} className="focus:outline-none  text-center text-xl p-8 text-white cursor-pointer rounded-t-md"><span className="my-auto">Description</span></Tab>
        <Tab onClick={() => setIndex(1)} style={{ background: index == 1 ? "#191919" : "#313131" }} className="focus:outline-none  text-center text-xl p-8 mx-6 bg-[#191919] text-white cursor-pointer rounded-t-md"><span className="my-auto justify-center items-center align-middle">Reviews</span></Tab>
        <Tab onClick={() => setIndex(2)} style={{ background: index == 2 ? "#191919" : "#313131" }} className="focus:outline-none text-center text-xl p-8  bg-[#191919] text-white cursor-pointer rounded-t-md"><span className="my-auto">Shipping Information</span></Tab>
      </TabList>
      <TabPanel style={{ display: index == 0 ? "inline" : "none" }} className="w-full text-white">
        <div className="bg-[#191919] h-96 rounded-md text-xl font-medium p-10">
          {dummyProducts[0].description}<br></br><br></br>
          {dummyProducts[0].details}
        </div>
      </TabPanel>
      <TabPanel style={{ display: index == 1 ? "inline" : "none" }} className="w-full text-white">
        <div className="bg-[#191919] h-96 rounded-md text-xl font-medium p-10 flex">
          {dummyProducts[product].reviews.map((review) => {
            return (
              <div className="w-1/4 mx-6 rounded-md flex flex-col bg-[#292929]">
                <div className="p-4">
                  <div className="flex">
                    <h1 className="flex"> <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                      <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                      <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                      <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path></svg>
                      <svg className="my-auto  text-orange-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path></svg></h1>
                    <h1 className="font-bold ml-auto">{review.title}</h1>
                  </div>
                  <div className="flex text-[#a1a1a1]">
                    <div>{review.name}</div>
                    <div className="ml-auto">{review.date}</div>
                  </div>
                  <div className="w-full h-[1px] bg-purple-900 my-4"></div>
                  <div className="flex mt-4">
                    <h1>{review.description}</h1>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </TabPanel>
      <TabPanel style={{ display: index == 2 ? "inline" : "none" }} className="w-full text-white">
        <div className="bg-[#191919] h-96 rounded-md">
          <h1>Shipping Informationnnnn</h1>
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default ProductDescription