import headerImage from "../images/header-background.webp";
import rscImage from "../images/portfolio/RSC.webp";
import formationImage from "../images/portfolio/formation.webp";
import luvHavocImage from "../images/portfolio/Luv_Havoc.webp";
import battleshipImage from "../images/portfolio/battleship.webp";
import infanterieImage from "../images/portfolio/Infanterie.webp";
import umbralImage from "../images/portfolio/umbral.webp";
import nukeImage from "../images/portfolio/nuke_108.webp";
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

/**
 * Code required to factorize srcSet
 */
export const getBaseNameFromImport = (imagePath: string): string => {
  if (!imagePath || typeof imagePath !== 'string') {
    return '';
  }
  const filename = imagePath.split('/').pop();
  return filename ? filename.replace(/-\d+\.webp$/, '') : '';
};

export const sizes = [320, 640, 1280, 1920];

const generateSrcSet = (baseName: string, sizes: number[]): string => {
  return sizes.map(size => `/images/${baseName}-${size}.webp ${size}w`).join(", ");
};

const getSrcSetFromImage = (image: string): string => {
  const baseName = getBaseNameFromImport(image);
  return generateSrcSet(baseName, sizes);
};

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "11e Foxhole - A Warden Foxhole Brigade Community (FR/EN/CN)",
  description:
    "11e Foxhole: Warden Foxhole brigade. Join our multilingual gaming community (French, English, Chinese) and enjoy playing Foxhole together.",
};

/**
 * Section definition
 */
export const SectionId = {
  Description: "Le Régiment",
  Operations: "Les Opérations",
  Activities: "Les Activités",
  Skills: "skills",
  Stats: "stats",
  Officers: "Les Officiers",
  Footer: "Footer",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Description section
 */
export const descriptionData: Description = {
  imageSrc: headerImage,
  srcSet: getSrcSetFromImage(headerImage),
  name: `11ème Régiment de Callahan`,
  description: (
    <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
<p>
  <strong>Bonjour à toi soldat !</strong> Tu hésites à nous rejoindre ?
  Laisse-nous te convaincre…
</p>
<p>
  Fort de nos 7 ans d'histoire dans Foxhole, le 
  <strong> 11ème Régiment de Callahan</strong> [11eRC] est reconnu pour son
  expertise et son engagement au sein de la faction warden. Nous offrons
  un gameplay varié : Logistique, Infanterie, Artillerie, Blindés, Naval,
  Fortifications et Complexes industriels...
</p>
<p>
  Tournée vers la communauté, le 11e dispose d’une branche Anglophone [11eFL], 
  d’une branche sinophone [11eCN] et d’une branche francophone [11eRC] permettant de jouer sur plusieurs fuseaux horaires. Nous comptons une solide base de joueurs québécois et français, créant
  ainsi un environnement accueillant pour tous.
</p>
<p>
  Nous offrons une expérience de jeu plaisante et enrichissante, le
  régiment accueille les nouveaux joueurs comme les anciens, sans
  conditions de skill ou de temps de jeu. Rejoins notre clan et fais partie d'une communauté soudée et passionnée.
</p>
<p>
  N’hésite plus, rejoins le 11ème Régiment de Callahan et contribue à
  notre légende !
</p>

    </div>
  ),
  actions: [
    {
      href: "https://discord.gg/11e",
      text: "Rejoindre le discord",
      primary: true,
    },
    {
      href: "https://www.youtube.com/@11emeregimentdecallahan",
      text: "Chaîne Youtube",
      primary: true,
    },
  ],
};

/**
 * Footer section
 */

export const footerData: Footer = {
  actions: [
    {
      href: "https://www.youtube.com/@11emeregimentdecallahan",
      text: "Chaîne Youtube",
      primary: true,
    },
    {
      href: "https://discord.gg/11e",
      text: "Rejoindre le discord",
      primary: true,
    },
  ],
};

/**
 * Operations section
 */ 
export const operationItems: OperationItem[] = [
  {
    title: "Formation",
    description:
      "Formation des troupes quand à l'utilisation de l'ensemble du matériel militaire de la faction Warden, en allant de la différence entre les différents fusils, jusqu'à l'utilisation de super armes comme les canons sur rails ou des missiles ballistique",
    image: formationImage,
    srcSet: getSrcSetFromImage(formationImage),
  },
  {
    title: "Artillerie",
    description:
      "La puissance industrielle du 11eRC permet d'utiliser dès qu'il y en a l'occasion les canons de plus gros calibres afin de faire tomber les forteresses ennemis les plus fortifiées.",
    image: rscImage,
    srcSet: getSrcSetFromImage(rscImage),
  },
  {
    title: "Infiltration",
    description:
      "Infiltration des lignes enemies avec des véhicules amphibies afin de faire exploser des charges hautement explosives dans les complexes stratégiques adverses, ces missions permettent souvent de débloquer des impasses",
    image: luvHavocImage,
    srcSet: getSrcSetFromImage(luvHavocImage),
  },
  {
    title: "Lancement de missiles ballistiques",
    description:
      "Quand les canons de 300mm ne suffisent plus, il ne reste plus que la destruction par l'atome afin de renverser le cours de la guerre.",
    image: nukeImage,
    srcSet: getSrcSetFromImage(nukeImage),
  },
  {
    title: "Colonne de blindés",
    description:
      "Des véhicules de reconnaissance aux chars lourds, le 11eRC s'illustre souvent sur le front par le déploiement de forces blindées. Le régiment est devenu une référence auprès des autres unités concernant l'emploi des chars super lourds, proposant des formations et des opérations conjointes pour percer les lignes ennemies.",
    image: umbralImage,
    srcSet: getSrcSetFromImage(umbralImage),
  },
    {
    title: "Batailles navales",
    description:
      "Sur la mer ou sous la surface, le 11eRC mène des opérations navales afin de protéger les eaux de l'empire, chasser les flottes coloniales, ou escorter les vaisseaux logistiques.",
    image: battleshipImage,
    srcSet: getSrcSetFromImage(battleshipImage),
  },
  {
    title: "Infanterie",
    description:
      "Une escouade d'infanterie organisée permettant de tenir le front pendant que l'artillerie est en train de faire tomber l'objectif",
    image: infanterieImage,
    srcSet: getSrcSetFromImage(infanterieImage),
  }
];

/**
 * Activities section -- TODO: Standardize resume contact format or offer MDX
 */
export const activites: ActivityElement[] = [
  {
    title: "Combat",
    content: (
      <p>
        Le régiment combat sur terre, dans les profondeurs, ou sur les océans :
        Bataille de chars, duels de cuirassés, corps à corps à la baïonnette,
        charge héroïque à la grenade, infiltrations en sous-marins, pilonnage
        d’artillerie ou opérations discrète de commandos sont les actions
        nécessaire à la victoire
      </p>
    ),
  },
  {
    title: "Logistique",
    content: (
      <p>
        Que ce soit par train, par camion ou par bateau, le régiment livre tous
        les jours les dizaines de milliers de ressources récoltées et produites
        envoyées sur le front pour la victoire des wardens.
      </p>
    ),
  },
  {
    title: "Construction",
    content: (
      <p>
        Bouclier des wardens, la qualité des forteresses construite par le
        Régiment est unanimement reconnue. Chaque guerre, nos sapeurs bâtissent
        sur le front, et nos architectes créent les points d’arrêt à la
        déferlante coloniale.
      </p>
    ),
  },
  {
    title: "Industrie",
    content: (
      <p>
        Réputé pour ses infrastructures, le régiment organise chaque guerre un
        tissu industriel et ferroviaire afin de produire tout le nécessaire aux
        combats : pétrole, béton, super-chars, canons lourds ferroviaires,
        sous-marins, cuirassés, etc…
      </p>
    ),
  },
  {
    title: "Communauté ",
    content: (
      <p>
        Principalement tourné vers Foxhole, le 11eRC dispose dans un lieu tenu
        secret d’un QG pour des rencontres autour d’une bière et d’un discord
        multi-gaming pour se détendre entre deux campagnes militaires.
      </p>
    ),
  },
];

/**
 * Officer section
 */
export const officer: OfficerSection = {
  imageSrc: officerBackground,
  officers: [
    {
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Discord", Icon: DiscordIcon, href: "https://discord.gg/11e" },
  {
    label: "Youtube",
    Icon: YoutubeIcon,
    href: "https://www.youtube.com/@11emeregimentdecallahan",
  },
];
