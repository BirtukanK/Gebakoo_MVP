import React, { useState } from 'react';
import styles from "../style";
import ProductCard from "./ProductCard";
import { feedback } from "../constants";
import { people01,  linkedin, wheat, corn, tomato, potato, red_onion, github, gmail, x  } from "../assets";
// import * as App from './app';

const Product = () => {

  const [showCart, setShowCart] = useState(false); // State to manage cart visibility

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
      <div className={`${styles.container}`}>
        
        <div className="container">
         <section id="clients" className= {`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
         <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 " />
  
           <div className=" w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Products List
        </h2>
      
      
      </div>
      
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((item, index) => <ProductCard img={item.img} 
         product_name={item.product_name}
         farmer_name={item.farmer_name}
         price={item.price}
         item={item}
         key={index}/>)}
        
      </div>
      </section>
      </div>
      
    

    </div>
    

    
  )
}

export default Product