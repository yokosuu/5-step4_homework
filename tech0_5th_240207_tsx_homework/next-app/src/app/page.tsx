'use client'
import { useState,useEffect } from 'react';
import TitleBar from './components/TitleBar';
import InputAria from './components/InputAria';
import OutputAria from './components/OutputAria';
import { IDtype } from './components/type';

// 型定義
// type Producttype = {
//   PRD_ID: string;
// };

export default function Home() {
  const [productid, setProductid] = useState("");
  const message:string = "welcome"

  const handleProductChange = (newProductId) => {
    const newProduct:IDtype = {
      PRD_ID: newProductId
    };
    setProductid(newProduct);
  };
  

  return (
    <>
    <TitleBar/>
    <div className="flex justify-center items-center my-10">
      <h1 className="text-4xl font-bold">{message}</h1>
    </div>
    <InputAria onProductChange={handleProductChange}/>
    <OutputAria productid={productid}/>
    </>
  );
}