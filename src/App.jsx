import React, { createContext } from 'react';
import { useState } from 'react';

import Taskoutput from "./TaskOutput"
export const mycontext =createContext('')
const App = () => {
  const products= [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://media.istockphoto.com/id/1207580132/photo/black-iphone-x-logo-back-panel-with-logo.jpg?s=612x612&w=0&k=20&c=-U8AVLjfBTozXtnsRFQeb2yNnHy88mCRYytRT_y5WaM=",
                "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "data:image/jpeg;base64,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"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "data:image/jpeg;base64,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"
                
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "data:image/jpeg;base64,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"
                
            ]
        }
    ]

  const[data,setdata]=useState(products)
  return (
    <div>
     
      
      <mycontext.Provider value={[data,setdata]}>
      <Taskoutput/>
      </mycontext.Provider>
    </div>
  );
};

export default App;