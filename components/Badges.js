import React from "react";
import { FiGithub } from "react-icons/fi";

const Badges = () => {
  return (
    <div className="flex mt-2 animate__animated animate__fadeInRight">
      <a
        href="https://www.producthunt.com/posts/gradient-king?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gradient-king"
        target="_blank"
        rel="noreferrer"
        className="mr-1"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=297842&theme=light"
          alt="Gradient King - Curated collection of 125+ fresh gradients | Product Hunt"
          width="200"
        />
      </a>
      <a
        href="https://github.com/saviomartin/tweeter"
        className="px-3 h-[42px] bg-[#FFFFFF] rounded-md font-semibold text-[#1B143C] flex items-center justify-center"
        target="_blank"
        rel="noreferrer"
      >
        486 Stars
        <FiGithub className="ml-1" />
      </a>
    </div>
  );
};

export default Badges;
