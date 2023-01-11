import React, { useState } from "react";

export default function Modal({ book, setShowModal }) {
  const [traders, setTraders] = useState();

  //   TODO: QUERY DATABASE FOR USERS WITH BOOK IN AVAILABLE TO TRADE

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black/[.6] ">
      <div className=" w-1/2 h-1/2 mx-auto mt-20 rounded-lg bg-slate-300 pointer-events-none">
        <header className="flex justify-between p-2 text-indigo-900">
          <div className="font-semibold  text-2xl text-center py-4">
            {book.title}
          </div>
          <div onClick={() => {setShowModal(false)}} className=" m-0 p-0 text-4xl bg-slate-300 text-indigo-900 hover:bg-black cursor-pointer">&times;</div>
        </header>
        <hr className="border-indigo-900"></hr>
        <div class="table-auto text-indigo-900 m-2">
          {traders ? traders.map((trade) => <div>{trade}</div>) : ""}
        </div>
        <div></div>
      </div>
    </div>
  );
}
