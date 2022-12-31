import "@styles/globals.css";
import PropTypes from "prop-types";
import dynamic from 'next/dynamic'
import { Router } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useState } from "react";
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  },);



  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={30}
        innerScale={1}
        outerScale={1.6}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: '1px solid var(--cursor-color)',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
          mixBlendMode: 'exclusion'
        }} />

      {loading ?
        <div className="fixed inset-0 w-screen h-screen bg-primary flex flex-col items-center justify-center">
          <h1 className="text-[2.5vw] text-white">Loading...</h1>
        </div> :
        <main>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </main>
      }


    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
