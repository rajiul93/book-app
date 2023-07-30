import React, { useState } from "react";
import data from "../../dumyData.json";
import Book from "./book";
import Cart from "./cart";

export default function BookPage() {
   const [cart, setCart] = useState([]);

  const bookName = (book) => {
    let newCart =[...cart, book];
    setCart(newCart)
};
const remove =(items)=>{
    const newCart = cart.filter((event, index)=>index !== items);
    setCart(newCart)

}
const totalPrice = cart.reduce((sum, cartLength)=>sum+cartLength.price,0)

  return (
    <div className="md:flex flex-row lg:max-w-7xl mx-auto items-start gap-2">
      <Book data={data} bookName={bookName} />
      <Cart cart={cart} totalPrice={totalPrice} remove={remove} />
    </div>
  );
}
