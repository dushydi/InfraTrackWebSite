import { arrowRight } from "../assets/icons";
import { bigimg } from "../assets/images";
import Button from "../componets/Button";
import React from "react";

const MoreInfo = () => {
  return (
    <section
      id=""
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container shadow-3xl p-10 rounded-xl"
    >
      <div className="flex flex-1 flex-col sm:w-3">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="xl:whitespace-nowrap relative pr-10">
            Report Road Issues, Improve
          </span>
          <br />
          <span className="text-coral-red">your</span>&nbsp;
          <span className="">Community</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          See a road problem? Our app makes it easy to report issues and get
          them fixed
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Help make roads safer. Report potholes, damaged signs, and other
          infrastructure issues directly to your local authority.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={bigimg}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default MoreInfo;
