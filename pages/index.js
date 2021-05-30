import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

// functions
import { convertSpaces, convertLineBreaks } from "./functions";
// icons
import { FiCopy } from "react-icons/fi";

const Home = () => {
  const [twitterIntend, setTwitterIntend] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    generateIntendUrl();
  }, [text]);

  const generateIntendUrl = () => {
    let optimisedText = convertLineBreaks(text);

    if (/\s/g.test(optimisedText)) {
      optimisedText = convertSpaces(optimisedText);
    }

    const shareLink = `https://twitter.com/intent/tweet?text=${optimisedText}`;
    setTwitterIntend(shareLink);
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-7/12 p-7 py-10 h-full flex items-center justify-center">
        <div className="bg-[#ECF2F5] h-full p-10 rounded-md w-10/12">
          <h1 className="text-5xl font-bold">Tweeter</h1>
          <p className="text-sm m-1 text-[#555]">
            Add your text to share in the text area below, Also see live preview
            on the left, When you're ready Copy your intent code 👀
          </p>
          <textarea
            className="h-72 mt-3 w-full resize-none rounded-md border border-[#ddd] p-2 focus:border-[#936BF3]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="flex w-full">
            <Button className="button !p-0">
              <div className="px-4 py-2 flex items-center capitalize text-md bg-white border border-[#936BF3] hover:border-[#EF5FAD] rounded-md">
                Copy Code <FiCopy className="ml-2 text-[#EF5FAD]" />
              </div>
            </Button>
            <Button className="button !p-0 !pl-1">
              <div className="px-4 py-2 flex items-center capitalize text-md bg-white border border-[#936BF3] hover:border-[#EF5FAD] rounded-md">
                Try Demo <FiCopy className="ml-2 text-[#EF5FAD]" />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-5/12 p-7 py-10 h-full flex items-center justify-center">
        <div className="bg-[#ECF2F5] h-full w-6/12 p-3 rounded-md">
          <h1 className="text-sm wrap text-green-400">{twitterIntend}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
