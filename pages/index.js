import React, { useEffect, useState } from "react";

// functions
import { convertSpaces, convertLineBreaks, convertHash } from "../functions";

// toaster
import toast, { Toaster } from "react-hot-toast";

// components
import Tweet from "../components/Tweet";
import Editor from "../components/Editor";
import Badges from "../components/Badges";
import MetaTags from "../components/MetaTags";
import ModalPopup from "../components/Modal";

// github corner react
import GithubCorner from "react-github-corner";

// animate.css
import "animate.css";

const Home = () => {
  // modal
  const [open, setOpen] = useState(false);

  // show emoji
  const [showEmoji, setShowEmoji] = useState(false);

  // default intent
  const [twitterIntent, setTwitterIntent] = useState(
    "https://twitter.com/intent/tweet?text=Hello%20there%20%F0%9F%91%8B%0A%0ACheck%20out%20https://tweeter.now.sh%20by%20@SavioMartin7,%20sharing%20to%20twitter%20made%20easy%20%F0%9F%91%80%0A%0A%23producthunt%20%23DEVCommunity"
  );

  // default text
  const [text, setText] = useState(
    "RabbitCoin is Future😳"
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
        background: "#203040",
        border: "1px solid #EF5FAD",
        color: "#ECF2F5",
      },
    });

    // toggling modal
    setOpen(true);
  };

  return (
    <div className="min-h-screen w-full items-center justify-center block lg:flex md:flex xl:flex">
      <MetaTags />
      <ModalPopup open={open} setOpen={setOpen} twitterIntent={twitterIntent} />
      {/* <GithubCorner
        href="https://github.com/saviomartin/tweeter"
        bannerColor="#ECF2F5"
        octoColor="#1B143C"
        size={80}
        className="fixed top-0 right-0 z-10"
        direction="right"
      /> */}
      <Toaster position="bottom-center" reverseOrder={true} />
      <div className="w-full lg:w-7/12 md:w-7/12 xl:w-7/12 p-7 py-10 h-6/12 lg:h-full xl:h-full flex items-center justify-center relative">
        <Editor
          text={text}
          setText={setText}
          showEmoji={showEmoji}
          copyToClipboard={copyToClipboard}
          setShowEmoji={setShowEmoji}
          twitterIntent={twitterIntent}
        />
      </div>
      <div className="w-full lg:w-5/12 md:w-5/12 xl:w-5/12 p-7 py-10 h-6/12 lg:h-full xl:h-full flex items-center lg:items-end xl:items-end justify-center flex-col">
        <Tweet text={text} />
        <Badges />
      </div>
    </div>
  );
};

export default Home;
