/** Import images **/
import { imageMap } from "../utils/imageData";
/** Acitivities Logo */
import officerBackground from "../images/officer_background.webp";
import DiscordIcon from "../components/Icon/DiscordIcon";
import YoutubeIcon from "../components/Icon/YoutubeIcon";
import {
  Description,
  HomepageMeta,
  OperationItem,
  OfficerSection,
  Footer,
  ActivityElement,
  Social,
} from "./dataDef";
import { TFunction } from "i18next";

/**
 * Code required to factorize srcSet
 */
export const getBaseNameFromImport = (imagePath: string): string => {
  if (!imagePath || typeof imagePath !== "string") {
    return "";
  }
  const filename = imagePath.split("/").pop();
  return filename
    ? filename.replace(/-\d+\.webp$/, "").replace(/-(fr|en|cn)$/, "")
    : "";
};

export const sizes = [320, 640, 1280, 1920, 2560];

// Fonction pour extraire la locale du nom de fichier
const extractLocaleFromImagePath = (imagePath: string): string | null => {
  const match = imagePath.match(/-(fr|en|cn)(-\d+)?\.webp$/);
  return match ? match[1] : null; // Retourne la locale si trouvée, sinon null
};

// Fonction pour générer le srcSet en fonction du nom de base et de la locale
export const generateSrcSet = (
  cleanBaseName: string,
  sizes: number[],
  locale: string | null,
): string => {
  if (locale) {
    return sizes
      .map((size) => `/images/${cleanBaseName}-${locale}-${size}.webp ${size}w`)
      .join(", ");
  }
  return sizes
    .map((size) => `/images/${cleanBaseName}-${size}.webp ${size}w`)
    .join(", ");
};

// Fonction pour obtenir le srcSet à partir d'une image
export const getSrcSetFromImage = (image: string): string => {
  const baseName = getBaseNameFromImport(image);
  const locale = extractLocaleFromImagePath(image);
  return generateSrcSet(baseName, sizes, locale);
};

// Fonction pour sélectionner l'image en fonction de la locale courante
export const getImageByLocale = (
  imageId: keyof typeof imageMap,
  locale: string,
): string => {
  const imageData = imageMap[imageId];
  if (typeof imageData === "string") {
    return imageData; // Cas où il n'y a pas de variation selon la locale
  }
  if (locale in imageData) {
    const image: any = imageData[locale as keyof typeof imageData];
    // Si l'image est un objet avec une propriété src, on l'extrait, sinon on utilise directement la valeur
    return typeof image === "object" && image.src ? image.src : image;
  }
  const defaultImage: any = imageData["fr"];
  return typeof defaultImage === "object" && defaultImage.src
    ? defaultImage.src
    : defaultImage;
};

/**
 * Page meta data
 */
export const getHomePageMeta = (t: (key: string) => string): HomepageMeta => ({
  title: t("homepage.meta.title"),
  description: t("homepage.meta.description"),
});

/**
 * Section definition
 */
export const getSectionId = (t: TFunction) => {
  return {
    Description: t("homepage.sections.Description"),
    Operations: t("homepage.sections.Operations"),
    Activities: t("homepage.sections.Activities"),
    Skills: t("homepage.sections.Skills"),
    Stats: t("homepage.sections.Stats"),
    Officers: t("homepage.sections.Officers"),
    Footer: t("homepage.sections.Footer"),
  } as const;
};

export type SectionId = ReturnType<typeof getSectionId>;

export const getDescriptionData = (
  t: (key: string) => string,
  locale: string,
): Description => {
  const selectedImage = getImageByLocale("header", locale); // Sélection de l'image en fonction de la locale

  return {
    imageSrc: selectedImage,
    srcSet: getSrcSetFromImage(selectedImage), // Génère le srcSet en fonction de l'image sélectionnée
    name: t("homepage.descriptionData.name"),
    description: {
      greeting: `<h2 class="text-stone-50 text-lg font-bold">${t("homepage.descriptionData.description.greeting")}</h2>`,
      hesitate: `<p>${t("homepage.descriptionData.description.hesitate")}</p>`,
      history: `<h3 class="text-stone-50 text-base font-semibold">${t("homepage.descriptionData.description.history")}</h3>`,
      historyContent: `<p>${t("homepage.descriptionData.description.historyContent")}</p>`,
      community: `<h3 class="text-stone-50 text-base font-semibold">${t("homepage.descriptionData.description.community")}</h3>`,
      communityContent: `<p>${t("homepage.descriptionData.description.communityContent")}</p>`,
      join: `<h3 class="text-stone-50 text-base font-semibold">${t("homepage.descriptionData.description.join")}</h3>`,
      joinContent: `<p>${t("homepage.descriptionData.description.joinContent")}</p>`,
      recruiting: `<p>${t("homepage.descriptionData.description.recruiting")}</p>`,
    },
    actions: [
      {
        href: "https://discord.com/invite/11e",
        text: t("homepage.descriptionData.actions.joinDiscord"),
        primary: true,
      },
      {
        href: "https://www.youtube.com/@11emeregimentdecallahan",
        text: t("homepage.descriptionData.actions.youtubeChannel"),
        primary: true,
      },
    ],
  };
};

/**
 * Footer section
 */
export const getFooterData = (t: (key: string) => string): Footer => ({
  actions: [
    {
      href: "https://www.youtube.com/@11emeregimentdecallahan",
      text: t("homepage.footer.actions.youtubeChannel"),
      primary: true,
    },
    {
      href: "https://discord.com/invite/11e",
      text: t("homepage.footer.actions.joinDiscord"),
      primary: true,
    },
  ],
});

/**
 * Operations section
 */
export const getOperationItems = (
  t: (key: string) => string,
  locale: string,
): OperationItem[] => [
  {
    title: t("homepage.operations.formation.title"),
    description: t("homepage.operations.formation.description"),
    image: getImageByLocale("formation", locale),
    srcSet: getSrcSetFromImage(getImageByLocale("formation", locale)),
  },
  {
    title: t("homepage.operations.artillery.title"),
    description: t("homepage.operations.artillery.description"),
    image: getImageByLocale("artillery", locale),
    srcSet: getSrcSetFromImage(getImageByLocale("artillery", locale)),
  },
  {
    title: t("homepage.operations.infiltration.title"),
    description: t("homepage.operations.infiltration.description"),
    image: getImageByLocale("infiltration", locale),
    srcSet: getSrcSetFromImage(getImageByLocale("infiltration", locale)),
  },
  {
    title: t("homepage.operations.missiles.title"),
    description: t("homepage.operations.missiles.description"),
    image: getImageByLocale("nuke", locale),
    srcSet: getSrcSetFromImage(getImageByLocale("nuke", locale)),
  },
  {
    title: t("homepage.operations.tank.title"),
    description: t("homepage.operations.tank.description"),
    image: getImageByLocale("tank", locale),
    srcSet: getSrcSetFromImage(getImageByLocale("tank", locale)),
  },
  {
    title: t("homepage.operations.naval.title"),
    description: t("homepage.operations.naval.description"),
    image: getImageByLocale("battleship", locale),
    srcSet: getSrcSetFromImage(getImageByLocale("battleship", locale)),
  },
  {
    title: t("homepage.operations.infantry.title"),
    description: t("homepage.operations.infantry.description"),
    image: getImageByLocale("infanterie", locale),
    srcSet: getSrcSetFromImage(getImageByLocale("infanterie", locale)),
  },
];

/**
 * Activities section
 */
export const getActivities = (
  t: (key: string) => string,
): ActivityElement[] => [
  {
    title: t("homepage.activities.combat.title"),
    content: t("homepage.activities.combat.content"), // Convert HTML content to a string
  },
  {
    title: t("homepage.activities.logistics.title"),
    content: t("homepage.activities.logistics.content"),
  },
  {
    title: t("homepage.activities.construction.title"),
    content: t("homepage.activities.construction.content"),
  },
  {
    title: t("homepage.activities.industry.title"),
    content: t("homepage.activities.industry.content"),
  },
  {
    title: t("homepage.activities.community.title"),
    content: t("homepage.activities.community.content"),
  },
];

/**
 * Officer section
 */
export const getOfficerSection = (
  t: (key: string) => string,
): OfficerSection => ({
  imageSrc: officerBackground,
  officers: [
    {
      name: t("homepage.officers.johndoe.name"),
      text: t("homepage.officers.johndoe.text"),
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: t("homepage.officers.janedoe.name"),
      text: t("homepage.officers.janedoe.text"),
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: t("homepage.officers.someoneelse.name"),
      text: t("homepage.officers.someoneelse.text"),
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
});

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Discord",
    Icon: DiscordIcon,
    href: "https://discord.com/invite/11e",
  },
  {
    label: "Youtube",
    Icon: YoutubeIcon,
    href: "https://www.youtube.com/@11emeregimentdecallahan",
  },
];
