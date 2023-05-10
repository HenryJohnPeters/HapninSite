import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>HAPNIN</title>
      <meta
        name="description"
        content="Join our community today and start exploring all the amazing events and activities that your area has to offer. Whether you're looking to meet new people, discover new experiences, support local causes, or create your own events, HAPNIN is the app for you."
        key="desc"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="HAPNIN: The app that helps you find out what is HAPNIN in your area!"
      />
      <meta
        property="og:description"
        content="Join our community today and start exploring all the amazing events and activities that your area has to offer."
      />
      <meta property="og:url" content="https://www.hanpninuk.com/"></meta>
      <meta property="al:android:app_name" content="HAPNIN"></meta>
      <meta property="al:ios:app_name" content="HAPNIN"></meta>
      <meta property="al:ios:app_store_id" content=""></meta>
      <meta
        name="twitter:title"
        content="HAPNIN: The app that helps you find out what is HAPNIN in your area!"
      ></meta>
      <meta
        name="twitter:description"
        content="Whether you're looking to meet new people, discover new experiences, support local causes, or create your own events, HAPNIN is the app for you."
      ></meta>
      <link rel="shortcut icon" href="/logo.svg" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
