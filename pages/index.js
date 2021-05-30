import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

// functions
import { convertSpaces, convertLineBreaks, convertHash } from "./functions";
// icons
import { FiCopy, FiTwitter } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  // default intent
  const [twitterIntent, setTwitterIntent] = useState(
    "https://twitter.com/intent/tweet?text=Hello%20there%20%F0%9F%91%8B%0A%0ACheck%20out%20tweeter.now.sh%20by%20@SavioMartin7,%20sharing%20to%20twitter%20made%20easy%20%F0%9F%91%80%0A%0A%23producthunt%20%23DEVCommunity"
  );

  // default text
  const [text, setText] = useState(
    "Hello there 👋\n\nCheck out tweeter.now.sh by @SavioMartin7, sharing to twitter made easy 👀\n\n#producthunt #DEVCommunity"
  );

  // fetch on every text change
  useEffect(() => {
    generateIntendUrl();
  }, [text]);

  const generateIntendUrl = () => {
    let optimisedText = convertLineBreaks(text);

    if (/\s/g.test(optimisedText)) {
      optimisedText = convertSpaces(optimisedText);
    }
    if (/[#_]/g.test(optimisedText)) {
      optimisedText = convertHash(optimisedText);
    }

    const shareLink = `https://twitter.com/intent/tweet?text=${optimisedText}`;
    setTwitterIntent(shareLink);
  };

  const copyToClipboard = () => {
    // copy to clipboard
    navigator.clipboard.writeText(twitterIntent);

    // toast
    toast.success("Copied to clipboard!", {
      style: {
        background: "#1F0E27",
        border: "1px solid #EF5FAD",
        color: "#fff",
      },
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Toaster position="bottom-right" reverseOrder={true} />
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
            <Button className="button !p-0" onClick={copyToClipboard}>
              <div className="px-4 py-2 flex items-center capitalize text-md bg-white border border-[#936BF3] hover:border-[#EF5FAD] rounded-md">
                Copy Code <FiCopy className="ml-2 text-[#EF5FAD]" />
              </div>
            </Button>
            <Button
              className="button !p-0 !ml-1"
              href={twitterIntent}
              target="_blank"
              rel="noreferrer"
            >
              <div className="px-4 py-2 flex items-center capitalize text-md bg-white border border-[#936BF3] hover:border-[#EF5FAD] rounded-md">
                Try Demo <FiTwitter className="ml-2 text-[#EF5FAD]" />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-5/12 p-7 py-10 h-full flex items-center justify-center">
        <div className="bg-[#ECF2F5] h-full w-6/12 p-3 rounded-md">
          <h1 className="text-sm wrap text-green-400">{twitterIntent}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
