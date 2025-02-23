import React from "react";
import { star } from "../assets/icons"; // Correct path to your star icon

interface ReviewCardProps {
  imgURL: string;
  memberName: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ imgURL, memberName }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={`member: ${memberName}`} // Improved alt text
        className="rounded-full w-[200px] h-[200px] shadow-3xl"
      />
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {memberName}
      </h3>
    </div>
  );
};

export default ReviewCard;
