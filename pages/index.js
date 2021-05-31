import { Button } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";

// functions
import { convertSpaces, convertLineBreaks, convertHash } from "../functions";
// icons
import { FiCopy, FiSmile, FiTwitter } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import Tweet from "../components/Tweet";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

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

  // use ref for emoji
  const ref = useRef(null);

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
  const addEmoji = (e) => {
    const cursor = ref.current.selectionStart;
    const message = text.slice(0, cursor) + e.native + text.slice(cursor);
    setText(message);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Toaster position="bottom-right" reverseOrder={true} />
      <div className="w-7/12 p-7 py-10 h-full flex items-center justify-center relative">
        <div className="bg-[#ECF2F5] h-full p-10 rounded-md w-10/12 ">
          <h1 className="text-5xl font-bold">Tweeter</h1>
          <p className="text-sm m-1 text-[#555]">
            Add your text to share in the text area below, Also see live preview
            on the left, When you're ready Copy your intent code 👀
          </p>
          <div className="relative h-72 w-auto mt-3 mb-2">
            <textarea
              className="h-full w-full resize-none rounded-md border border-[#ddd] p-2 focus:border-[#936BF3]"
              value={text}
              ref={ref}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div
              className="bg-white absolute bottom-4 right-4 border border-[#ddd] p-2 cursor-pointer rounded-md"
              onClick={() => setShowEmoji(!showEmoji)}
            >
              <FiSmile className="text-xl" />
            </div>
          </div>
          {showEmoji && (
            <div className="absolute top-0 right-0">
              <Picker set="twitter" onSelect={(e) => addEmoji(e)} />
            </div>
          )}
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
      <div className="w-5/12 p-7 py-10 h-full flex items-center justify-end">
        <Tweet text={text} />
      </div>
    </div>
  );
};

export default Home;
