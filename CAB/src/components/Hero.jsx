import { useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch } from "react-icons/fa";
import { FaLocationPin, FaPerson } from "react-icons/fa6";

export default function Hero() {
  const [active, setActive] = useState("Reserve");

  return (
    <div className="container mx-auto px-6 pt-12">
      <div className=" relative rounded-2xl lg:pb-32 lg:h-[70vh]">
        <div className="overflow-hidden relative h-full w-full">
          <img
            src="/Kamakhya.jpg"
            alt=""
            className="lg:absolute top-0 w-full lg:h-[70vh] h-[30rem] object-cover rounded-2xl"
          />
        </div>
        <div className="lg:w-4/5 mx-auto lg:h-[70vh] h-full">
          <div className="bg-white px-8 py-8 rounded-[10px] lg:absolute bottom-16 lg:w-4/5 shadow-lg">
            <div className="lg:flex gap-4 gap-x-2">
              <div className="flex flex-wrap gap-x-16 w-full">
                <button
                  onClick={() => setActive("Reserve")}
                  className={` rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
                    active === "Reserve"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-light"
                  }`}
                >
                  Cabs
                </button>
                <button
                  onClick={() => setActive("Cabs")}
                  className={` rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
                    active === "Cabs"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-light"
                  }`}
                >
                  Self-Drive
                </button>
                <button
                  onClick={() => setActive("Self-Drive")}
                  className={` rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
                    active === "Self-Drive"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-light"
                  }`}
                >
                  Trips
                </button>
                <button
                  onClick={() => setActive("Trips")}
                  className={` rounded-sm flex gap-x-2 items-center focus:outline-none h-14 text-base cursor-pointer bg-transparent whitespace-pre ${
                    active === "Trips"
                      ? "text-black border-b-2 border-solid border-black"
                      : "text-light"
                  }`}
                >
                  Reserve
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-end gap-4 justify-between border-t border-solid py-4 w-full">
              <div>
                
                <div className="relative h-10 w-40 flex items-center">
                  <FaLocationPin
                    size={12}
                    className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                  />
                  <input
                    type="text"
                    placeholder="Enter Pickup City"
                    className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                  />
                </div>
              </div>
              <div className="relative h-10 w-40 flex items-center">
                <FaCalendar
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="date"
                  defaultValue="2022-02-12"
                  className="bg-light1  rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                />
              </div>
              <div className="relative h-10 w-40 flex items-center">
                  <FaLocationPin
                    size={12}
                    className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                  />
                  <input
                    type="text"
                    placeholder="Enter Destination"
                    className="bg-light1 rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                  />
                </div>
                <div className="relative h-10 w-40 flex items-center">
                <FaCalendar
                  size={12}
                  className="text-primary absolute top-0 bottom-0 left-2 z-10 h-full"
                />
                <input
                  type="date"
                  defaultValue="2022-02-12"
                  className="bg-light1  rounded-md px-2 py-1 text-sm absolute h-full w-full pl-6 outline-none"
                />
              </div>
              <div className="text-white h-10 w-40 flex items-center justify-center ">
                <button className="rounded-lg bg-primary placeholder:text-white px-2 outline-none h-full w-full flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-bg shadow">
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
