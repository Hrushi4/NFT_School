import Head from "next/head"
import "../styles/globals.css"

function MyApp({Component, pageProps}) {
 return (
  <>
   <Head>
    <title>NFT School</title>
    <meta name="title" content="NFT School" />
    <meta name="description" content="Buy & sale nft online" />
    <meta name="keywords" content="nft, marketplace" />
    <meta name="robots" content="index, follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={process.env.NEXT_PUBLIC_MAIN_URL} />
    <meta property="og:title" content="NFT School" />
    <meta property="og:description" content="Buy & sale nft online" />

    <meta property="og:locale" content="id" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={process.env.NEXT_PUBLIC_MAIN_URL} />
    <meta property="twitter:title" content="NFT School" />
    <meta property="twitter:description" content="Buy & sale nft online" />
   </Head>
   <Component {...pageProps} />
  </>
 )
}

export default MyApp
