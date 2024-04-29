/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiFilter, HiLocationMarker } from "react-icons/hi";

export default function Explore() {
  const [active, setActive] = useState("Popular destination");
  const Card = ({ image, text, location, price }) => {
    return (
      <div>
        <div className="overflow-hidden relative my-0 mx-auto rounded-t-2xl">
          <img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] box-border hoverImg"
          />
          <p className="bg-white rounded-lg p-1 text-sm absolute top-4 right-4 flex items-center gap-1">
            <FaStar className="text-[#ffc103]" /> 4.9
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <h5 className="text-xl pt-2 font-semibold">{text}</h5>
            <div className="flex items-center gap-2 py-3">
              <HiLocationMarker size={20} className="text-primary" />
              <p className="text-gray text-light">{location}</p>
            </div>
          </span>
          <p className="font-semibold">
          ₹{price}/<span className="font-light">PerTrip</span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section className="lg:p-16">
        <div className="container mx-auto px-3">
          <div className="lg:flex justify-between">
            <span className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold">Explore more</h2>
              <p className="py-4 text-left">Let&apos;s go on an adventure</p>
            </span>
            <p className="text-light lg:w-2/5 lg:text-right lg:text-lg">
              All inclusive vacations and flights to the Guwahati, Shillong
              and more than 1300 destinations Norteast India. Let&apos;s explore now.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between py-8">
            <span className="flex items-center flex-wrap gap-4">
              <button
                onClick={() => setActive("Popular destination")}
                className={`rounded-lg px-4 lg:text-lg py-2 text-sm hover:bg-black hover:text-white ₹{
                  active === "Popular destination"
                    ? "bg-black text-white"
                    : "bg-light1"
                }`}
              >
                Popular destination
              </button>
              <button
                onClick={() => setActive("Islands")}
                className={`rounded-lg lg:text-lg px-4 py-2 text-sm hover:bg-black hover:text-white ₹{
                  active === "Islands" ? "bg-black text-white" : "bg-light1"
                }`}
              >
                Islands
              </button>
              <button
                onClick={() => setActive("Surfing")}
                className={`rounded-lg px-4 lg:text-lg py-2 text-sm hover:bg-black hover:text-white ₹{
                  active === "Surfing" ? "bg-black text-white" : "bg-light1"
                }`}
              >
                Surfing
              </button>
              <button
                onClick={() => setActive("Nation parks")}
                className={`rounded-lg px-4 py-2 lg:text-lg text-sm hover:bg-black hover:text-white ₹{
                  active === "Nation parks"
                    ? "bg-black text-white"
                    : "bg-light1"
                }`}
              >
                Nation parks
              </button>
              <button
                onClick={() => setActive("Lake")}
                className={`rounded-lg px-4 py-2 lg:text-lg text-sm hover:bg-black hover:text-white ₹{
                  active === "Lake" ? "bg-black text-white" : "bg-light1"
                }`}
              >
                Lake
              </button>
              <button
                onClick={() => setActive("Beach")}
                className={`rounded-lg px-4 py-2 lg:text-lg text-sm hover:bg-black hover:text-white ₹{
                  active === "Beach" ? "bg-black text-white" : "bg-light1"
                }`}
              >
                Beach
              </button>
              <button
                onClick={() => setActive("Camp")}
                className={`rounded-lg px-4 py-2 lg:text-lg text-sm hover:bg-black hover:text-white ₹{
                  active === "Camp" ? "bg-black text-white" : "bg-light1"
                }`}
              >
                Camp
              </button>
            </span>
            <button className="bg-light1 rounded-lg lg:text-lg my-4 px-4 py-2 text-sm flex items-center gap-2 hover:bg-black hover:text-white">
              Filters <HiFilter />
            </button>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-16">
            <Card
              image="/dawki.jpg"
              text="Juwai"
              location="Meghalaya"
              price="12000"
            />
            <Card
              image="/jowai.jpg"
              text="Dawki"
              location="Meghalaya"
              price="10000"
            />
            <Card
              image="/kaziranga1.webp"
              text="Kaziranga Nation Park"
              location="Assam"
              price="7000"
            />
            <Card
              image="/Kamakhya.jpg"
              text="Kamakhya Temple"
              location="Guwahati"
              price="2000"
            />
            <Card
              image="/pabitora.webp"
              text="Pabitora Wilde Life Sanctury"
              location="Morigaon"
              price="8000"
            />
            <Card
              image="/tawang.jpg"
              text="Tawang"
              location="Arunachal Padesh"
              price="28000"
            />
          </div>
          <div className="flex justify-center">
            <button className="shadow-md transition-bg bg-white hover:bg-primary hover:text-white outline-none px-4 py-2 rounded-[10px]">
              Show more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
