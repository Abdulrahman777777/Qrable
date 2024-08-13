import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [imagUrl, setImageUrl] = useState("");
  return (
    <main className="w-screen h-screen">
      <div className="text w-screen h-1/2 flex justify-center items-end ">
        <div className="text-container flex flex-col justify-center items-center">
          <h1 className="font-main text-5xl flex justify-center items-center">
            <p className="text-7xl">QR</p>able
          </h1>
          <h4 className="font-other text-1xl">A Qr code generator </h4>
        </div>
      </div>
      <div
        className=" h-1/2
        w-screen
        flex justify-center items-start  flex-wrap"
      >
        <div className="url-enter w-1/2 flex justify-around m-0">
          <h4 className="font-main text-3xl">
            Enter Url or Text: &nbsp;&nbsp;{" "}
          </h4>
          <input
            type="text"
            className="text-black bg-white border-black border-2 rounded-md dark:text-white dark:bg-black dark:border-white"
          />
        </div>
        <div className="button w-full  flex justify-center items-start m-0">
          <button className="bg-slate-200 hover:bg-slate-400 text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-slate-500 dark:hover:bg-slate-900">
            Get Qr Code
          </button>
        </div>
      </div>
    </main>
  );
}
