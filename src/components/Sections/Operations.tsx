import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import ResponsiveImage from "../ResponsiveImage";
import {
  FC,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { isMobile } from "../../config";
import { operationItems, SectionId } from "../../data/data";
import { OperationItem } from "../../data/dataDef";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import Section from "../Layout/Section";

const Operations: FC = memo(() => {
  return (
    <Section className="bg-neutral-1000" sectionId={SectionId.Operations}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">
          Les Opérations majeures
        </h2>
        <div className=" w-full columns-2">
          {operationItems.map((item, index) => {
            const { title, image, srcSet } = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    "relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl",
                  )}
                >
                  <ResponsiveImage
                    alt={title}
                    placeholder="blur"
                    src={image}
                    srcSet={srcSet}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1920px) 33vw, (max-width: 3840px) 25vw, 25vw"
                    quality={75}
                  />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Operations.displayName = "Portfolio";
export default Operations;

const ItemOverlay: FC<{ item: OperationItem }> = memo(
  ({ item: { url, title, description } }) => {
    const [mobile, setMobile] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      // Avoid hydration styling errors by setting mobile in useEffect
      if (isMobile) {
        setMobile(true);
      }
    }, []);
    useDetectOutsideClick(linkRef, () => setShowOverlay(false));

    const handleItemClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        if (mobile && !showOverlay) {
          event.preventDefault();
          setShowOverlay(!showOverlay);
        }
      },
      [mobile, showOverlay],
    );

    // if no url, don't render the link
    if(!url)
      return (
        <div
          className={classNames(
            "absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300",
            { "opacity-0 hover:opacity-80": !mobile },
            showOverlay ? "opacity-80" : "opacity-0",
          )}
          onClick={handleItemClick}
        >
          <div className="relative h-full w-full p-4">
            <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
              <h2 className="text-center font-bold text-white opacity-100">
                {title}
              </h2>
              <p className="text-xs text-white opacity-100 sm:text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      );
    
    // if url, render the link
    return (
      <a
        className={classNames(
          "absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300",
          { "opacity-0 hover:opacity-80": !mobile },
          showOverlay ? "opacity-80" : "opacity-0",
        )}
        href={url}
        onClick={handleItemClick}
        ref={linkRef}
        target="_blank"
      >
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">
              {title}
            </h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">
              {description}
            </p>
          </div>
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        </div>
      </a>
    );
  },
);
