"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const [imagUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [alerted, setAlerted] = useState(false);
  const ref = useRef("" as any);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(63, 63, 63, 0.13)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
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
        <div className="url-enter w-screen flex justify-around m-0 flex-wrap">
          <h4 className="font-main text-3xl w-screen flex justify-center items-center text-center ">
            Enter Url/Text:
          </h4>
          <input
            ref={ref}
            type="text"
            className="text-black bg-white border-black border-2 rounded-md dark:text-white dark:bg-black dark:border-white"
          />
        </div>
        <div className="button w-full  flex justify-center items-start m-0">
          <button
            onClick={(e) => {
              setImageUrl(`${process.env.API}=${ref.current.value}`);
              setIsOpen(true);
            }}
            className="bg-slate-200 hover:bg-slate-400 text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-slate-500 dark:hover:bg-slate-900"
          >
            Get Qr Code
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
          ref.current.value = "";
        }}
        style={customStyles}
        className="rounded-lg w-1/2 h-3/4 bg-white dark:bg-black border-transparent border-none absolute flex justify-center"
      >
        <div className="stuff flex flex-col justify-around items-center ">
          <h1 className="font-other text-1xl">{"Here's you're Qr Code😁🪄"}</h1>
          <Image
            alt={`Qr-code that opens ${ref.current.value}`}
            width="180"
            height="180"
            src={imagUrl}
          />
          <button
            onClick={() => {
              if (!alerted) {
                setAlerted(true);
                alert(
                  "You can't download the Qr Code directly right now, however you can download it via right click on the image and then save as on pc,or select the Image and download it on mobile until I fix it cuz I'm tired ok!?."
                );
              }
            }}
            className="bg-slate-200 hover:bg-slate-400 text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-slate-500 dark:hover:bg-slate-900"
          >
            <a href={imagUrl} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </button>
        </div>
      </Modal>
    </main>
  );
}
