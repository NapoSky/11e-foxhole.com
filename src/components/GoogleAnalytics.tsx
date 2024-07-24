import { useEffect } from 'react';
import Script from 'next/script';

// At the top of your file, add a global declaration to extend the Window interface
declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
  }

const GA_TRACKING_ID = 'G-0P4RSJ2Z61'; // Replace 'YOUR_TRACKING_ID' with your GA tracking ID.

const GoogleAnalytics = () => {
  useEffect(() => {
    // Define gtag function
    function gtag(...args: any[]) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
  }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;