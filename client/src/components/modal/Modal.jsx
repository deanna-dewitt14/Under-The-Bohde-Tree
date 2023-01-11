import React, { useState } from "react";
import { GET_TRADE } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function Modal({ book, showModal, setShowModal }) {
  const { loading, data } = useQuery(GET_TRADE, {
    variables: { bookId: book.bookId },
  });

  const trades = data?.getUserTrade || [];
  console.log(">>>", trades)
  return showModal ? (
    <div className="z-[9999999] fixed top-0 right-0 w-full h-full bg-black/[.6] ">
      <div className=" w-1/2 h-1/2 mx-auto mt-20 rounded-lg bg-slate-300">
        <header className="flex justify-between p-2 text-indigo-900">
          <div className="font-semibold text-4xl align-center py-4">
            {book.title}
          </div>
          <div
            onClick={() => {
              setShowModal(false);
            }}
            className=" flex justify-center rounded p-4 items-center h-6 w-6 m-0 text-4xl bg-slate-300 text-indigo-900 hover:bg-slate-200 hover:text-black cursor-pointer"
          >
            &times;
          </div>
        </header>
        <hr className="border-indigo-900"></hr>
        <div className="table-auto text-indigo-900 m-2">
          {trades ? trades.map((trade) =>  <div className="flex justify-evenly"><div>USER: {trade.username}</div> <div>Email:{trade.email}</div></div>): ""}
        </div>
        <div></div>
      </div>
    </div>
  ) : null;
}
