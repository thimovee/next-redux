import React from "react";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <button
        className="w-12 h-10 bg-transparent"
        onClick={props.onDecrease}
      >
        {props.qty > 0 &&
           <svg className="mx-auto"  xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="none"><g clipPath="url(#clip0_21_199)"><path d="M18.765 0H1.706C0.763802 0 0 0.763802 0 1.706C0 2.6482 0.763802 3.412 1.706 3.412H18.765C19.7072 3.412 20.471 2.6482 20.471 1.706C20.471 0.763802 19.7072 0 18.765 0Z" fill="#727273"/></g><defs><clipPath id="clip0_21_199"><rect width="20.471" height="3.412" fill="white"/></clipPath></defs></svg>
         }

      </button>
      <p className="font-semibold text-white text-[29px] leading-[29px]">{props.qty}</p>
      <button
        className="w-10 h-10 bg-transparent border-none"
        onClick={props.onIncrease}
      >
        <svg xmlns="http://www.w3.org/2000/svg"  className="mx-auto" width="21" height="21" viewBox="0 0 21 21" fill="none"><g clipPath="url(#clip0_21_201)"><path d="M18.765 8.53H1.706C0.763802 8.53 0 9.2938 0 10.236C0 11.1782 0.763802 11.942 1.706 11.942H18.765C19.7072 11.942 20.471 11.1782 20.471 10.236C20.471 9.2938 19.7072 8.53 18.765 8.53Z" fill="#727273"/><path d="M11.9409 18.765L11.9409 1.706C11.9409 0.763802 11.1771 0 10.2349 0C9.29272 0 8.52892 0.763802 8.52892 1.706L8.52892 18.765C8.52892 19.7072 9.29272 20.471 10.2349 20.471C11.1771 20.471 11.9409 19.7072 11.9409 18.765Z" fill="#727273"/></g><defs><clipPath id="clip0_21_201"><rect width="20.471" height="20.471" fill="white"/></clipPath></defs></svg>
      </button>
    </div>
  );
};

export default QtyBtn;
