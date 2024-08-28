import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import ResponsiveImage from "../ResponsiveImage";
import { FC, memo } from "react";
import Section from "../Layout/Section";
import { useRouter } from "next/router";
import { Description as DescriptionType } from "../../data/dataDef";
import { useTranslation } from "react-i18next";
import { getSectionId } from "../../data/data"; // Assurez-vous que la fonction getSectionId est correctement importée

interface DescriptionProps {
  descriptionData: DescriptionType;
}

const Description: FC<DescriptionProps> = memo(({ descriptionData }) => {
  const router = useRouter();
  const { t } = useTranslation();

  // Obtenez les IDs des sections traduits
  const sectionIds = getSectionId(t);

  // Utilisez l'ID pour le footer
  const godownhref = `${router.asPath.split("#")[0]}#${sectionIds.Footer}`;

  const { imageSrc, srcSet, name, description, actions } = descriptionData;

  return (
    <Section noPadding sectionId={sectionIds.Description}>
      <div
        id={sectionIds.Description}
        className="relative flex min-h-screen w-full items-center justify-center px-2 sm:px-4"
      >
        <ResponsiveImage
          alt={`${name}-image`}
          className="absolute h-full w-full object-cover"
          placeholder="blur"
          fill={true}
          src={imageSrc}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1440px) 75vw, (max-width: 1920px) 75vw, (max-width: 3840px) 100vw, 100vw"
        />
        <div className="z-10 w-full px-4 lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm lg:px-0 mx-auto flex flex-col justify-center h-full mt-8 lg:mt-20 md:mt-16 sm:mt-8 mb-8 sm:mb-8 pb-16 md:pb-16">
          <div className="flex flex-col items-center gap-y-1 rounded-xl bg-gray-800/40 p-4 lg:p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {name}
            </h1>
            <div
              className="prose-sm text-stone-200 sm:prose-base lg:prose-lg space-y-2 max-w-4xl mx-auto mt-4"
              dangerouslySetInnerHTML={{
                __html: `
                ${description.greeting}
                ${description.hesitate}
                ${description.history}
                ${description.historyContent}
                ${description.community}
                ${description.communityContent}
                ${description.join}
                ${description.joinContent}
                ${description.recruiting}
              `,
              }}
            />
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
                  target="_blank"
                  rel="noopener noreferrer"
                  key={text}
                >
                  {text}
                  {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-3 md:bottom-12 sm:bottom-8 flex justify-center z-10">
          <a
            aria-label="Aller au pied de page"
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={godownhref}
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
