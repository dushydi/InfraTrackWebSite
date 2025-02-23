import ServiceCard from "../componets/ServiceCard";
import { services } from "../constants";
import React from "react";

const Services = () => {
  return (
    <section
      id="features"
      className="max-container flex justify-center flex-wrap gap-9 py-16 pt-48"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
