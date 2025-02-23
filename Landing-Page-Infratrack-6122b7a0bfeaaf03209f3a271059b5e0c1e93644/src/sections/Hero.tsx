import { arrowRight } from "../assets/icons";
import Button from "../componets/Button";
import { statistics } from "../constants";
import { Home_processed } from "../assets/images";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container py-16 pt-48"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-slate-gray">
          Making a Difference Starts Here
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap relativ pr-10">
            Fix Our Roads
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Report</span>
          &nbsp;Easily
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Quickly and easily report potholes, damaged signs, and other road
          hazards.
        </p>
        <Button label="Download the App" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stats, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>{" "}
              <p className="leading-7 font-montserrat text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 shadow-3xl bg-primary bg-hero bg-cover bg-center">
        <img
          src={Home_processed}
          alt="App-screens"
          width={610}
          height={500}
          className="object-contain relative "
        />
      </div>
    </section>
  );
};

export default Hero;
