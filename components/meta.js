// import Head from 'next/head'
// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

// export default function Meta() {
//   return (
//     <Head>
//       <link
//         rel="apple-touch-icon"
//         sizes="180x180"
//         href="/favicons/apple-touch-icon.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="32x32"
//         href="/favicons/favicon-32x32.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="16x16"
//         href="/favicons/favicon-16x16.png"
//       />
//       <link rel="manifest" href="/favicons/site.webmanifest" />
//       <link
//         rel="mask-icon"
//         href="/favicons/safari-pinned-tab.svg"
//         color="#000000"
//       />
//       <link rel="shortcut icon" href="/favicons/favicon.ico" />
//       <meta name="msapplication-TileColor" content="#000000" />
//       <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
//       <meta name="theme-color" content="#000" />
//       <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
//       <meta
//         name="description"
//         content={`Vedant's product portfolio and blog.`}
//       />
//       <meta property="og:image" content={HOME_OG_IMAGE_URL} />
//     </Head>
//   )
// }

import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  const title = "Vedant's Product Portfolio";
  const description = "Vedant's product portfolio.";

  return (
    <Head>
      {/* Favicons (keep yours) */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      {/* Primary */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
