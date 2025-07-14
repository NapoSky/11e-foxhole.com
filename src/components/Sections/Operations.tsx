import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
  FC,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "../../config";
import { OperationItem } from "../../data/dataDef";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import Section from "../Layout/Section";
import ResponsiveImage from "../ResponsiveImage";

type OperationsProps = {
  operations: OperationItem[];
  sectionId: string;
};

const Operations: FC<OperationsProps> = memo(({ operations, sectionId }) => {
  const { t } = useTranslation();

  return (
    <Section className="bg-black" sectionId={sectionId}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">
          {t("homepage.operations.title")}
        </h2>
        <div className="w-full columns-2">
          {operations.map((item, index) => {
            const { title, image, srcSet } = item;

            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div className="relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
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

Operations.displayName = "Operations";
export default Operations;

const ItemOverlay: FC<{ item: OperationItem }> = memo(
  ({ item: { url, title, description } }) => {
    const [mobile, setMobile] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      if (isMobile) {
        setMobile(true);
      }
    }, []);

    useDetectOutsideClick(linkRef, () => setShowOverlay(false));

    const handleItemClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        if (mobile) {
          event.preventDefault();
          setShowOverlay(!showOverlay);
        }
      },
      [mobile, showOverlay],
    );

    const handleOverlayClick = useCallback(() => {
      setShowOverlay(false);
    }, []);

    if (mobile) {
      return (
        <>
          <div
            className={`absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 ${
              showOverlay ? "opacity-80" : "opacity-0"
            }`}
            onClick={handleItemClick}
          >
            <div className="relative h-full w-full p-4">
              <h4 className="text-center font-bold text-white opacity-100">
                {title}
              </h4>
            </div>
          </div>
          {showOverlay && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              onClick={handleOverlayClick}
            >
              <div
                className="relative max-h-[80vh] w-[90vw] overflow-y-auto rounded-lg bg-gray-900 p-4 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-center text-lg font-bold text-white">
                  {title}
                </h2>
                <p className="mt-4 text-sm text-white">{description}</p>
              </div>
            </div>
          )}
        </>
      );
    }

    return (
      <div className="absolute inset-0 h-full w-full bg-gray-900 opacity-0 hover:opacity-80 transition-opacity duration-300">
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">
              {title}
            </h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">
              {description}
            </p>
          </div>
          {url && (
            <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
          )}
        </div>
      </div>
    );
  },
);

ItemOverlay.displayName = "ItemOverlay";
