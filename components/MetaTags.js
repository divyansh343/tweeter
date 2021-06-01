// head
import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#1591b2" />

      <title>Tweeter - Sharing To Twitter Made Easy</title>
      <meta name="description" content="Never ever run out of gradients! " />
      <meta
        name="keywords"
        content="tweeter, tweets, twitter, twitter app, sharing to twitter, tweeterapp, tweeeterapp by savio, savio, savio martin, tweeter sharing, tweet, share to twitter, twitter intents, intent, twitter app, twitter intents generator, twitter intent generator, open source, tweet api, twitter api, react, next, tweeter github, tweeter saviomartin, tweeter sharing to twitter made easy"
      />
      <link rel="canonical" href="https://tweeterapp.vercel.app/" />
      <link rel="apple-touch-icon" href="/assets/logo192.png" />
      <link rel="icon" href="/assets/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta name="title" content="Tweeter - Sharing To Twitter Made Easy" />
      <meta
        name="description"
        content="Tweeter is a simple app that create high quality dynamic twitter intents for you to share on your site. Comes with live preview, hashtags, twitter emoji support, username and much more."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tweeterapp.now.sh/" />
      <meta
        property="og:title"
        content="Tweeter - Sharing To Twitter Made Easy"
      />
      <meta
        property="og:description"
        content="Tweeter is a simple app that create high quality dynamic twitter intents for you to share on your site. Comes with live preview, hashtags, twitter emoji support, username and much more."
      />
      <meta
        property="og:image"
        content="https://tweeterapp.vercel.app/assets/banner.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tweeterapp.now.sh/" />
      <meta
        property="twitter:title"
        content="Tweeter - Sharing To Twitter Made Easy"
      />
      <meta
        property="twitter:description"
        content="Tweeter is a simple app that create high quality dynamic twitter intents for you to share on your site. Comes with live preview, hashtags, twitter emoji support, username and much more."
      />
      <meta
        property="twitter:image"
        content="https://tweeterapp.vercel.app/assets/banner.png"
      />

      {/* Buy Me A Coffee */}
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="saviomartin"
        data-description="Support me on Buy me a coffee!"
        data-message="If you're enjoying my app, consider supporting me with a coffee ☕️"
        data-color="#FFDD00"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </Head>
  );
};

export default MetaTags;
