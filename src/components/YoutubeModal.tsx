import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const YouTubeModal: React.FC = () => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isExpandedDesktop, setIsExpandedDesktop] = useState<boolean>(false);
  const [isExpandedMobile, setIsExpandedMobile] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const fetchLatestVideo = async () => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const channelId = "UCnAShvmJ9v4GltbvQdiXPTQ";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=1&type=video&key=${apiKey}`
      );
      const data = await response.json();
      setVideoId(data.items[0]?.id?.videoId || null);
    } catch (error) {
      console.error("Error fetching the latest YouTube video:", error);
    }
  };

  const toggleExpansionDesktop = () => {
    if (!isExpandedDesktop && !videoId) {
      fetchLatestVideo();
    }
    setIsExpandedDesktop(!isExpandedDesktop);
  };

  const toggleExpansionMobile = () => {
    if (!isExpandedMobile && !videoId) {
      fetchLatestVideo();
    }
    setIsExpandedMobile(!isExpandedMobile);
  };

  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsExpandedMobile(false);
      }
    };

    if (isExpandedMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpandedMobile, isMobile]);

  return (
    <>
      {/* Affichage pour les écrans de taille moyenne et plus (PC) */}
      <div
        className={`fixed bottom-5 right-5 bg-inherit shadow-lg rounded-lg z-50 duration-300 hidden md:block pointer-events-auto ${
          isExpandedDesktop ? "w-80 h-auto" : "w-48 h-12"
        }`}
      >
        <div
          className="flex items-center justify-between w-full rounded h-12 pr-2 cursor-pointer bg-gray-800 text-white"
          onClick={toggleExpansionDesktop}
        >
          <span className="text-sm font-medium flex-grow flex items-center justify-start pl-2 leading-none">
            {t("homepage.modales.youtube")}
          </span>
          <span
            className={`transform transition-transform flex items-center ml-1 leading-none ${
              isExpandedDesktop ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>
        {isExpandedDesktop && videoId && (
          <div className="w-full p-2">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&disablekb=1&cc_load_policy=1&iv_load_policy=3&playsinline=1`}
                allowFullScreen
                title={t("homepage.modales.youtube")}
              ></iframe>
            </div>
          </div>
        )}
      </div>

      {/* Affichage pour les écrans de petite taille (mobile) */}
      <div
        ref={containerRef}
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 bg-red-950 bg-opacity-60 text-white shadow-lg rounded-l-lg overflow-hidden z-50 transition-all duration-300 block md:hidden ${
          isExpandedMobile ? "h-auto w-60 p-2" : "h-36 w-5"
        }`}
      >
        <div
          className="flex items-center justify-center h-full cursor-pointer"
          onClick={toggleExpansionMobile}
        >
          {!isExpandedMobile && (
            <span className="text-white text-xs font-mono font-medium leading-none">
              ▶<br />
              <br />
              y<br />
              o<br />
              u<br />
              t<br />
              u<br />
              b<br />
              e<br />
              <br />
              ▶
            </span>
          )}
        </div>
        {isExpandedMobile && videoId && (
          <div className="mt-2 w-full">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&disablekb=1&cc_load_policy=1&iv_load_policy=3&playsinline=1`}
                allowFullScreen
                title={t("homepage.modales.youtube")}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default YouTubeModal;
