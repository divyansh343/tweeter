import React, { useEffect, useState } from "react";

// axios
import axios from "axios";

// icons
import { FiGithub } from "react-icons/fi";
import { Button } from "@material-ui/core";

const Badges = () => {
  const [starCount, setStarCount] = useState(1);

  const fetchStarCount = () => {
    axios
      .get("https://api.github.com/repos/saviomartin/loficlub", {
        headers: {},
      })
      .then((response) => {
        setStarCount(response.data.stargazers_count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch on load once
  useEffect(() => {
    fetchStarCount();
  }, []);

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
      <Button
        className="button !p-0 !ml-1"
        href="https://github.com/saviomartin/tweeter"
        target="_blank"
        rel="noreferrer"
      >
        <div className="px-4 py-2 flex items-center capitalize text-md bg-white border border-[#936BF3] hover:border-[#EF5FAD] rounded-md ">
          {starCount} Stars <FiGithub className="ml-2 text-[#EF5FAD]" />
        </div>
      </Button>
    </div>
  );
};

export default Badges;
