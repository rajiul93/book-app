import React from "react";

export default function Book(props) {
  const book = props.data;
  return (
    <div className="grid  lg:grid-cols-3 gap-4  basis-3/5">
      {book.map((b) => {
        return (
          <div className="border bg-slate-200 rounded-lg p-2" key={b.id} >
            <div>
              <img src={b.image} className="w-full h-auto  rounded-lg max-h-64" alt="" />
              <h1 className="text-xl font-bold h-32">{b.title}</h1>
              <p>Price: {b.price} Taka</p>
            </div>
            <div className="flex gap-2 py-3">
                <button onClick={()=>props.bookName(b)} className="bg-orange-500 rounded-lg text-white py-2 px-4 hover:bg-orange-600">Add to cart</button>
                <button disabled={true} className="bg-orange-500 rounded-lg text-white py-2 px-4">Buy Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
