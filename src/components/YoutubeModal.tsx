import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const YouTubeModal: React.FC = () => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isPlayerActive, setIsPlayerActive] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false); // Nouvel état pour détecter le mobile
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vérifier si l'utilisateur est sur un mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Définir la taille du mobile (768px)
    };

    // Initialiser l'état mobile au chargement
    checkIsMobile();

    // Mettre à jour isMobile lors du redimensionnement de la fenêtre
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const fetchLatestVideo = async () => {
    try {
      const apiKey = "AIzaSyDs_moLvYMFnCaskcIOwUqJUfg6vePKIHI";
      const channelId = "UCnAShvmJ9v4GltbvQdiXPTQ";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=1&type=video&key=${apiKey}`,
      );
      const data = await response.json();
      setVideoId(data.items[0]?.id?.videoId || null);
    } catch (error) {
      console.error("Error fetching the latest YouTube video:", error);
    }
  };

  const toggleExpansion = () => {
    if (!isExpanded && !videoId) {
      fetchLatestVideo();
    }
    setIsExpanded(!isExpanded);
  };

  // Gérer les clics en dehors du conteneur pour rétracter le menu (uniquement sur mobile)
  useEffect(() => {
    if (!isMobile) return; // Sortir si l'utilisateur n'est pas sur mobile

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, isMobile]);

  const activatePlayer = () => {
    setIsPlayerActive(true);
  };

  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  return (
    <>
      {/* Affichage pour les écrans de taille moyenne et plus (PC) */}
      <div
        className={`fixed bottom-5 right-5 bg-inherit shadow-lg rounded-lg z-50 duration-300 hidden md:block pointer-events-auto ${
          isExpanded ? "w-80 h-auto" : "w-48 h-12"
        }`}
      >
        <div
          className="flex items-center justify-between w-full h-12 cursor-pointer bg-gray-800 text-white"
          onClick={toggleExpansion}
        >
          <span className="text-sm font-medium flex-grow flex items-center justify-start pl-2 leading-none">
            {t("homepage.modales.youtube")}
          </span>
          <span
            className={`transform transition-transform flex items-center pr-2 leading-none ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>
        {isExpanded && (
          <div className="w-full p-2" onClick={(e) => e.stopPropagation()}>
            {!isPlayerActive ? (
              <div
                className="relative w-full pb-[56.25%] cursor-pointer"
                onClick={activatePlayer}
              >
                {videoId ? (
                  <>
                    <img
                      src={thumbnailUrl}
                      alt="YouTube Video Thumbnail"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <span className="text-white text-4xl">▶</span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">Loading...</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&disablekb=1&cc_load_policy=1&iv_load_policy=3`}
                  allowFullScreen
                  title={t("homepage.modales.youtube")}
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Affichage pour les écrans de petite taille (mobile) */}
      <div
        ref={containerRef}
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white shadow-lg rounded-l-lg overflow-hidden z-50 transition-all duration-300 block md:hidden ${
          isExpanded ? "h-auto w-60 p-2" : "h-36 w-10"
        }`}
      >
        <div
          className="flex items-center justify-center h-full cursor-pointer"
          onClick={toggleExpansion}
        >
          {!isExpanded && (
            <span className="text-white text-xs font-mono font-medium leading-none">
              ▶<br /><br />
              y<br />
              o<br />
              u<br />
              t<br />
              u<br />
              b<br />
              e<br /><br />
              ▶
            </span>
          )}
        </div>
        {isExpanded && videoId && (
          <div className="mt-2 w-full">
            {!isPlayerActive ? (
              <div
                className="relative w-full cursor-pointer"
                onClick={activatePlayer}
              >
                <img
                  src={thumbnailUrl}
                  alt="YouTube Video Thumbnail"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-white text-4xl">▶</span>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&disablekb=1&cc_load_policy=1&iv_load_policy=3&playsinline=1`}
                  allowFullScreen
                  title={t("homepage.modales.youtube")}
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default YouTubeModal;
