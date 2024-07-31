import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import ResponsiveImage from "../ResponsiveImage";
import { FC, memo } from "react";

import { descriptionData, SectionId } from "../../data/data";
import Section from "../Layout/Section";

const Description: FC = memo(() => {
  const { imageSrc, srcSet, name, description, actions } = descriptionData;

  return (
    <Section noPadding sectionId={SectionId.Description}>
      <div className="relative flex min-h-screen w-full items-center justify-center px-2 sm:px-4">
        <ResponsiveImage
          alt={`${name}-image`}
          className="absolute h-full w-full object-cover"
          placeholder="blur"
          priority="true"
          fill={true}
          src={imageSrc}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1920px) 75vw, 100vw"
        />
        <div className="z-10 w-full px-4 lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm lg:px-0 mx-auto flex flex-col justify-center h-full mt-8 md:mt-16 sm:mt-8 mb-8 sm:mb-8 pb-16 md:pb-16">
          <div className="flex flex-col items-center gap-y-1 rounded-xl bg-gray-800/40 p-4 lg:p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {name}
            </h1>
            <div className="text-base sm:text-lg md:text-xl text-stone-200 prose prose-stone max-w-4xl space-y-2 mt-4">
              {description}
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 px-2 sm:gap-x-4 sm:px-0 mt-4 mb-1 md:mb-2">
              {actions.map(({ href, text, primary, Icon }) => (
                <a
                  className={classNames(
                    "flex gap-x-2 items-center rounded-full border-2 px-3 py-1 text-xs font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:px-4 sm:py-2 sm:text-sm",
                    primary
                      ? "border-orange-500 ring-orange-500"
                      : "border-white ring-white",
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-3 md:bottom-12 sm:bottom-8 flex justify-center">
          <a
            aria-label="Aller au pied de page"
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.Footer}`}
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Description.displayName = "Description";
export default Description;
