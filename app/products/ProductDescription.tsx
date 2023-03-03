"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { dummyProducts } from '@/dummydata';
import { Product } from '@/interfaces';
import { useSearchParams } from 'next/navigation';
interface Props {
  product: Product;
}

const ProductDescription = () => {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState();

  const productID = searchParams.get("id");
  console.log(JSON.stringify(productID))
  const [index, setIndex] = useState(0)
  // laat nu alles zien van index 0 dyanmisch maken met router.query
  return (
    <Tabs className="w-full">
      <TabList className="mx-auto w-[675px] flex">
        <Tab onClick={() => setIndex(0)} style={{ background: index == 0 ? "#191919" : "#313131" }} className="focus:outline-none  text-center text-xl p-8 text-white cursor-pointer rounded-t-md"><span className="my-auto">Description</span></Tab>
        <Tab onClick={() => setIndex(1)} style={{ background: index == 1 ? "#191919" : "#313131" }} className="focus:outline-none  text-center text-xl p-8 mx-6 bg-[#191919] text-white cursor-pointer rounded-t-md"><span className="my-auto justify-center items-center align-middle">Reviews</span></Tab>
        <Tab onClick={() => setIndex(2)} style={{ background: index == 2 ? "#191919" : "#313131" }} className="focus:outline-none text-center text-xl p-8  bg-[#191919] text-white cursor-pointer rounded-t-md"><span className="my-auto">Shipping Information</span></Tab>
      </TabList>
      <TabPanel style={{ display: index == 0 ? "inline" : "none" }} className="w-full text-white">
        <div className="bg-[#191919] h-96 rounded-md text-xl font-medium p-10">
          <>
          <div>{dummyProducts[0].description}</div>
          <div className="mt-8">
          {dummyProducts[0].details.map((detail) => {
            return (
                <div className="w-full">• {detail.detail}</div>
            )
          })
          }
          </div>
          </>
        </div>
      </TabPanel>
      <TabPanel style={{ display: index == 1 ? "inline" : "none" }} className="w-full text-white">
        <div className="bg-[#191919] h-96 rounded-md text-xl font-medium p-10 flex">
          {dummyProducts[0].reviews.map((review) => {
            return (
              <div className="w-1/4 mx-6 rounded-md flex flex-col bg-[#252525]">
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
                  <div className="flex mt-4 text-[#a1a1a1]">
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
        <div className="bg-[#191919] h-96 rounded-md flex">
          <div className="flex w-11/12 m-auto flex-col">
            <div className="flex">
              <div className="w-1/3 bg-[#252525] h-32 rounded-md flex">
                <svg className=" text-slate-300 my-auto ml-10"stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg"><path d="M16 9l-2-4h-3v-2c0-0.55-0.45-1-1-1h-9c-0.55 0-1 0.45-1 1v8l1 1h1.268c-0.17 0.294-0.268 0.636-0.268 1 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.364-0.098-0.706-0.268-1h5.536c-0.17 0.294-0.268 0.636-0.268 1 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.364-0.098-0.706-0.268-1h1.268v-3zM11 9v-3h2.073l1.5 3h-3.573z"></path></svg>
                <div className="flex flex-col my-auto ml-6 text-slate-300">
                  <span className="text-2xl font-bold">UK delivery</span>
                  <span className="text-sm font-medium"><span className="text-white font-semibold">€3.00</span> Standard UK delivery within 5 working days</span>
                  <span className="text-sm font-medium">More information on UK delivery</span>
                </div>
              </div>
              <div className="w-1/3 mx-8 bg-[#252525] h-32 rounded-md flex">
              <svg className=" text-slate-300 my-auto ml-10" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg"><path d="M464 448V267.85a104.76 104.76 0 01-33.56 6.58c-1.18 0-2.3.05-3.4.05a108 108 0 01-56.86-16 108 108 0 01-56.85 16 106.16 106.16 0 01-56.51-16.2 107.84 107.84 0 01-57.2 16.2 106.14 106.14 0 01-56.85-16.42 106.14 106.14 0 01-56.85 16.42c-1.09 0-2.19 0-3.37-.05h-.06A104.66 104.66 0 0148 267.49V448H16v32h480v-32zm-240-64h-96v-76a4 4 0 014-4h88a4 4 0 014 4zm160 64h-80V308a4 4 0 014-4h72a4 4 0 014 4zm108.57-277.72L445.89 64C432 32 432 32 400 32H112c-32 0-32 0-45.94 32L19.38 170.28c-9 19.41 2.89 39.34 2.9 39.35l.41.66c.42.66 1.13 1.75 1.62 2.37.1.13.19.27.28.4l5.24 6.39 5.31 5.14.42.36a69.65 69.65 0 009.44 6.78v.05a74 74 0 0036 10.67h2.47a76.08 76.08 0 0051.89-20.31 72.38 72.38 0 005.77-6 74.18 74.18 0 005.78 6 76.08 76.08 0 0051.89 20.31c23.28 0 44.07-10 57.63-25.56a.11.11 0 01.15 0l5.66 5.26a76.09 76.09 0 0051.9 20.31c23.29 0 44.11-10 57.66-25.61 13.56 15.61 34.37 25.61 57.67 25.61h2.49a71.35 71.35 0 0035-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 00488 212.17l2-3c.9-2.04 11.21-20.3 2.57-38.89z"></path></svg>
              <div className="flex flex-col my-auto ml-6 text-slate-300">
                  <span className="text-2xl font-bold">Click & Collect</span>
                  <span className="text-sm font-medium"><span className="text-white font-semibold">Free</span> Click & Collect from LISTEN shops for collection tomorrow at 2pm</span>
                  <span className="text-sm font-medium">Find out more</span>
                </div>
                </div>
                <div className="w-1/3 bg-[#252525] h-32 rounded-md flex">
                <svg className=" text-slate-300 my-auto ml-10" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
              <div className="flex flex-col my-auto ml-6 text-slate-300">
                  <span className="text-2xl font-bold">Collect+</span>
                  <span className="text-sm font-medium"><span className="text-white font-semibold ">€3.00</span> Collect+ from a local shop from Wednesday</span>
                  <span className="text-sm font-medium">Find out more</span>
                </div>
                </div>
            </div>
            <div className="flex mt-6">
            <div className="w-1/3 bg-[#252525] h-32 rounded-md flex">
            <svg className=" text-slate-300 my-auto ml-10" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14-.17-.08-.2-.73-.02-1.09.19-.41.81-1.45.2-1.8-.61-.35-.44-.5-.81-.91-.37-.41-.22-.47-.25-.58-.08-.34.36-.89.39-.94.02-.06.02-.27 0-.33 0-.08-.27-.22-.34-.23-.06 0-.11.11-.2.13-.09.02-.5-.25-.59-.33-.09-.08-.14-.23-.27-.34-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66-.02-.2-.3-.47-.42-.67-.14-.2-.16-.47-.2-.41-.04.06.25.78.2.81-.05.02-.16-.2-.3-.38-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13-.19-.3 0-.89-.14-1.11-.13-.22-.88.25-.88.25.02-.22.69-.58 1.16-.92.47-.34.78-.06 1.16.05.39.13.41.09.28-.05-.13-.13.06-.17.36-.13.28.05.38.41.83.36.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06.33.22.27.02.5.08.23.06.91.64.91.64-.83.44-.31.48-.17.59.14.11-.28.3-.28.3-.17-.17-.19.02-.3.08-.11.06-.02.22-.02.22-.56.09-.44.69-.42.83 0 .14-.38.36-.47.58-.09.2.25.64.06.66-.19.03-.34-.66-1.31-.41-.3.08-.94.41-.59 1.08.36.69.92-.19 1.11-.09.19.1-.06.53-.02.55.04.02.53.02.56.61.03.59.77.53.92.55.17 0 .7-.44.77-.45.06-.03.38-.28 1.03.09.66.36.98.31 1.2.47.22.16.08.47.28.58.2.11 1.06-.03 1.28.31.22.34-.88 2.09-1.22 2.28-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8 3.14-.7 5.48-3.5 5.48-6.84 0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08-.48-.3-.81-.23-.86-.28 0 0-.05-.11.17-.14.44-.05.98.41 1.11.41.13 0 .19-.13.41-.05.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14.03-.03.02-.11.05-.14.11-.11.61-.25.52.03-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14.3-.28-.09-.38-.34-.38-.25-.02-.34-.16-.22-.19.12-.03.61.02.7.08.08.06.52.25.55.38.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52-.56-.48-.89-.31-1-.41-.11-.1-.08-.19.11-.34.19-.15.69.06 1 .09.3.03.66.27.66.55.02.25.33.5.19.63h-.01z"></path></svg>
                <div className="flex flex-col my-auto ml-6 text-slate-300">
                  <span className="text-2xl font-bold">International Delivery</span>
                  <span className="text-sm font-semibold text-white">From €7.50</span>
                  <span className="text-sm font-medium">More information on international delivery</span>
                </div>
              </div>
              <div className="w-1/3 mx-8 bg-[#252525] h-32 rounded-md flex">
              <svg className=" text-slate-300 my-auto ml-10" stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path></svg>
              <div className="flex flex-col my-auto ml-6 text-slate-300">
                  <span className="text-2xl font-bold">Returns are free</span>
                  <span className="text-sm font-medium">See more details about returning this product</span>
                </div>
                </div>
                <div className="w-1/3 bg-[#252525] h-32 rounded-md flex">
                <svg className=" text-slate-300 my-auto ml-10" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="45px" width="45px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"></path></svg>
              <div className="flex flex-col my-auto ml-6 text-slate-300">
                  <span className="text-2xl font-bold">Safe & Secure</span>
                  <span className="text-sm font-medium">Our product shipping is held to the highest safety standards</span>
                  <span className="text-sm font-medium">Find out more</span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default ProductDescription