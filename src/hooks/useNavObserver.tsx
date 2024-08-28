import { useEffect } from "react";
import { headerID } from "../components/Sections/Header";

export const useNavObserver = (
  selectors: string,
  handler: (section: string | null) => void, // Assouplir le type ici
) => {
  useEffect(() => {
    const headings = document.querySelectorAll(selectors);
    const headingsArray = Array.from(headings);
    const headerWrapper = document.getElementById(headerID);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentY = entry.boundingClientRect.y;
          const id = entry.target.getAttribute("id");
          if (headerWrapper) {
            const decision = {
              id,
              currentIndex: headingsArray.findIndex(
                (heading) => heading.getAttribute("id") === id,
              ),
              isIntersecting: entry.isIntersecting,
              currentRatio: entry.intersectionRatio,
              aboveToc: currentY < headerWrapper.getBoundingClientRect().y,
              belowToc: !(currentY < headerWrapper.getBoundingClientRect().y),
            };
            if (decision.isIntersecting) {
              handler(decision.id); // Utilisation directe de l'ID
            } else if (
              !decision.isIntersecting &&
              decision.currentRatio < 1 &&
              decision.currentRatio > 0 &&
              decision.belowToc
            ) {
              const currentVisible =
                headingsArray[decision.currentIndex - 1]?.getAttribute("id");
              handler(currentVisible || null); // Gérer le fallback null
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -70% 0px",
      },
    );
    headings.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [selectors, handler]);
};
