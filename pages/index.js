import React, { useEffect, useState } from "react";

// functions
import { convertSpaces, convertLineBreaks, convertHash } from "../functions";

// toaster
import toast, { Toaster } from "react-hot-toast";

// components
import Tweet from "../components/Tweet";
import Editor from "../components/Editor";
import Badges from "../components/Badges";

// head
import Head from "next/head";

// github corner react
import GithubCorner from "react-github-corner";

// animate.css
import "animate.css";

const Home = () => {
  // show emoji
  const [showEmoji, setShowEmoji] = useState(false);

  // default intent
  const [twitterIntent, setTwitterIntent] = useState(
    "https://twitter.com/intent/tweet?text=Hello%20there%20%F0%9F%91%8B%0A%0ACheck%20out%20https://tweeter.now.sh%20by%20@SavioMartin7,%20sharing%20to%20twitter%20made%20easy%20%F0%9F%91%80%0A%0A%23producthunt%20%23DEVCommunity"
  );

  // default text
  const [text, setText] = useState(
    "Hello there 👋\n\nCheck out https://tweeter.now.sh by @SavioMartin7, sharing to twitter made easy 👀\n\n#producthunt #DEVCommunity"
  );

  // fetch on every text change
  useEffect(() => {
    generateIntendUrl();
  }, [text]);

  useEffect(() => {
    document.onclick = () => {
      if (showEmoji) {
        setShowEmoji(false);
      }
    };
  });

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
        color: "#ECF2F5",
      },
    });
  };

  return (
    <div className="min-h-screen w-full items-center justify-center block lg:flex md:flex xl:flex">
      <Head>
        <title>Tweeter - Sharing to Twitter Made Easy</title>
      </Head>
      <GithubCorner
        href="https://github.com/saviomartin/tweeter"
        bannerColor="#ECF2F5"
        octoColor="#1B143C"
        size={80}
        direction="right"
      />
      <Toaster position="bottom-right" reverseOrder={true} />
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
