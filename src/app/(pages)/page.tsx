"use client";

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { RootState } from "@/redux/store";
import {
  decrement,
  increment,
  incrementAsync,
  reset,
} from "@/redux/slices/counterSlice";
import { Example } from "@/components/table/customTable";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="my-4 text-center">
        <h1 className="text-5xl font-bold mb-8">Counter: {count}</h1>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={() => dispatch(incrementAsync(10) as any)} // Typecast the dispatch function to 'any'
        >
          Increment Async by 10
        </button>
      </div>
      <Example />
    </main>
  );
}
