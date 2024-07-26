import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import { FC, memo } from "react";

import { descriptionData, SectionId } from "../../data/data";
import Section from "../Layout/Section";

const Description: FC = memo(() => {
  const { imageSrc, name, description, actions } = descriptionData;

  return (
    <Section noPadding sectionId={SectionId.Description}>
      <div className="relative flex min-h-screen w-full items-center justify-center px-2 sm:px-4">
        <Image
          alt={`${name}-image`}
          className="absolute h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive images
          loading="eager" // Eager load the image for better LCP
        />
        {/* Adjusted container for better responsiveness */}
        <div className="z-10 w-full px-4 lg:max-w-screen-lg lg:px-0 mx-auto flex flex-col justify-center h-full">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-4 lg:p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {name}
            </h1>
            {description}
            {/* Adjusted action buttons container for better responsiveness */}
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 px-2 sm:gap-x-4 sm:px-0">
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
        <div className="absolute inset-x-0 bottom-3 flex justify-center">
          <a
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
