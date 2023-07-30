import React from "react";

export default function Cart(props) {
    const cart = props.cart;
    const totalPrice = props.totalPrice;
  return (
    <div className=" bg-red-200 rounded-lg basis-2/5  ">
      <table className="table-fixed mx-auto my-6">
        <thead className="my-5">
          <tr >
            <th className="w-4">SL</th>
            <th>Product Name</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
         {cart?.map((item,index)=>{
            return <tr key={index}>
            <td className="w-4" >{index+1}</td>
            <td className="w-56">{item.title}</td>
            <td>{item.price}</td>
            <td onClick={()=>props.remove(index)} className="cursor-pointer hover:text-red-500">Delete</td>
            
          </tr>
         } )}
          
          <tr className="">
            <td className="font-medium w-4">Total:</td>
            <td className="font-medium w-56"></td>
            <td className="font-medium ">{totalPrice}TK</td>
            <td className="font-medium "></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
