import React from "react";
import MemberCard from "../componets/MemberCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section id="team" className="max-container py-16 pt-48">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Meet our <span className="text-coral-red">team</span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Meet the dedicated individuals behind our exceptional service
      </p>
      <div className="mt-24 grid grid-cols-3 gap-14 max-lg:grid-cols-1">
        {reviews.map((review) => (
          <MemberCard
            key={review.customerName}
            imgURL={review.imgURL}
            memberName={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
