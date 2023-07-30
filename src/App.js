import BookPage from "./Component/bookStore/bookPage";

function App() {
  return (
    <div className="">
      <div className="w-32 h-32  bg-orange-500 mx-auto align-middle items-center  flex justify-center border rounded-full">
      <h1 className=" text-3xl hover:text-4xl cursor-pointer font-semibold text-white ">Rajiul</h1>
      </div>
   <BookPage />

    </div>
  );
}

export default App;
