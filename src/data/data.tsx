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

export const sizes = [320, 640, 1280, 1920, 2560];

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
  title: "11e Brigade Foxhole - A Warden Clan Community (FR/EN/CN)",
  description:
    "Rejoignez le 11e régiment Warden de Foxhole ! Notre clan francophone recrute pour des opérations stratégiques. Participez à des batailles épiques.",
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
    <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg space-y-2 max-w-4xl mx-auto">
      <h2 className="text-stone-50 text-lg">Bonjour à toi soldat !</h2>
      <p>Tu hésites à nous rejoindre ? Laisse-nous te convaincre…</p>
      <h3 className="text-stone-50 text-base">Notre Histoire et Expertise</h3>
      <p>
        Fort de nos 7 ans d'histoire dans <strong className="text-stone-100">Foxhole</strong>, le 
        <strong className="text-stone-100"> 11ème Régiment de Callahan</strong> [11eRC] est reconnu pour son
        expertise et son engagement au sein de la faction warden. Nous offrons
        un gameplay varié : Logistique, Infanterie, Artillerie, Blindés, Naval,
        Fortifications et Complexes industriels...
      </p>
      <h3 className="text-stone-50 text-base">Une Communauté Multilingue</h3>
      <p>
        Tournée vers la communauté, le <strong className="text-stone-100">11e</strong> dispose d’une branche Anglophone [11eFL], 
        d’une branche sinophone [11eCN] et d’une branche francophone [11eRC] permettant de jouer sur plusieurs fuseaux horaires. Nous comptons une solide base de joueurs québécois et français, créant
        ainsi un environnement accueillant pour tous.
      </p>
      <h3 className="text-stone-50 text-base">Rejoignez Notre Clan</h3>
      <p>
        Nous offrons une expérience de jeu plaisante et enrichissante, le
        régiment accueille les nouveaux joueurs comme les anciens, sans
        conditions de skill ou de temps de jeu. Rejoins notre <strong className="text-stone-100">clan</strong> et fais partie d'une communauté soudée et passionnée.
      </p>
      <p>
        N’hésite plus, rejoins le <strong className="text-stone-100">11ème Régiment de Callahan</strong> et contribue à
        notre légende ! Nous <strong className="text-stone-100">recrutons</strong> en permanence de nouveaux membres pour renforcer notre clan.
      </p>
    </div>

  ),
  actions: [
    {
      href: "https://discord.com/invite/11e",
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
      href: "https://discord.com/invite/11e",
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
      "Formation des troupes quant à l'utilisation de l'ensemble du matériel militaire de la faction Warden, en passant par la différence entre les différents fusils jusqu'à l'utilisation de super armes comme les canons sur rails ou les missiles ballistiques. Rejoignez notre régiment Foxhole pour profiter de ces formations spécialisées.",
    image: formationImage,
    srcSet: getSrcSetFromImage(formationImage),
  },
  {
    title: "Artillerie",
    description:
      "La puissance industrielle du 11eRC permet d'utiliser, dès qu'il y en a l'occasion, les canons de plus gros calibres pour faire tomber les forteresses ennemies les plus fortifiées. Nous nous spécialisons dans l'artillerie lourde pour des frappes décisives et stratégiques.",
    image: rscImage,
    srcSet: getSrcSetFromImage(rscImage),
  },
  {
    title: "Infiltration",
    description:
      "Infiltration des lignes ennemies avec des véhicules amphibies pour faire exploser des charges hautement explosives dans les complexes stratégiques adverses. Ces missions critiques permettent souvent de débloquer des impasses. Nous excellons dans ces opérations de haute précision.",
    image: luvHavocImage,
    srcSet: getSrcSetFromImage(luvHavocImage),
  },
  {
    title: "Lancement de missiles ballistiques",
    description:
      "Quand les canons de 300 mm ne suffisent plus, il ne reste que la destruction par l'atome pour renverser le cours de la guerre. Notre maîtrise du lancement de missiles ballistiques permet des frappes stratégiques de grande envergure.",
    image: nukeImage,
    srcSet: getSrcSetFromImage(nukeImage),
  },
  {
    title: "Colonne de blindés",
    description:
      "Des véhicules de reconnaissance aux chars lourds, le 11eRC s'illustre souvent sur le front par le déploiement de forces blindées. Devenu une référence pour l'emploi des chars super lourds, notre régiment propose des formations et des opérations conjointes pour percer les lignes ennemies. Participez à ces missions emblématiques en nous rejoignant.",
    image: umbralImage,
    srcSet: getSrcSetFromImage(umbralImage),
  },
  {
    title: "Batailles navales",
    description:
      "Sur la mer ou sous la surface, le 11eRC mène des opérations navales pour protéger les eaux de l'empire, chasser les flottes coloniales ou escorter les vaisseaux logistiques. Nous nous distinguons par notre expertise navale et nos opérations maritimes efficaces.",
    image: battleshipImage,
    srcSet: getSrcSetFromImage(battleshipImage),
  },
  {
    title: "Infanterie",
    description:
      "Une escouade d'infanterie organisée permet de tenir le front pendant que l'artillerie fait tomber l'objectif. Notre régiment forme des unités d'infanterie robustes pour des actions décisives sur le terrain. Devenez un soldat d'élite dans Foxhole en rejoignant notre régiment.",
    image: infanterieImage,
    srcSet: getSrcSetFromImage(infanterieImage),
  }
];

/**
 * Activities section 
 */
export const activites: ActivityElement[] = [
  {
    title: "Combat",
    content: (
      <div>
        <p>
          Le régiment combat sur terre, dans les profondeurs ou sur les océans : 
          batailles de chars, duels de cuirassés, combats à la baïonnette, charges héroïques à la grenade, infiltrations en sous-marins, pilonnage d’artillerie et opérations discrètes de commandos. 
          Ces actions sont essentielles pour la victoire dans <strong>Foxhole</strong>. Rejoignez notre régiment pour vivre des expériences de combat intenses.
        </p>
      </div>
    ),
  },
  {
    title: "Logistique",
    content: (
      <div>
        <p>
          Par train, par camion ou par bateau, le régiment livre quotidiennement des dizaines de milliers de ressources récoltées et produites, envoyées sur le front pour la victoire des wardens. 
          La logistique est le pilier de notre régiment, assurant un soutien ininterrompu à nos forces ainsi qu'a nos alliés sur le terrain.
        </p>
      </div>
    ),
  },
  {
    title: "Construction",
    content: (
      <div>
        <p>
          Bouclier des wardens, la qualité des forteresses construites par le régiment est unanimement reconnue. Chaque guerre, nos sapeurs bâtissent sur le front, et nos architectes créent des points d’arrêt à la déferlante coloniale. 
          Rejoignez notre clan pour participer à la construction de défenses impénétrables et stratégiques.
        </p>
      </div>
    ),
  },
  {
    title: "Industrie",
    content: (
      <div>
        <p>
          Réputé pour ses infrastructures, le régiment organise pour chaque guerre un tissu industriel et ferroviaire pour produire tout le nécessaire aux combats : pétrole, béton, super-chars, canons lourds ferroviaires, sous-marins, cuirassés, etc. 
          Notre régiment se distingue par son efficacité industrielle et sa capacité à soutenir l'effort de guerre.
        </p>
      </div>
    ),
  },
  {
    title: "Communauté",
    content: (
      <div>
        <p>
          Principalement tourné vers Foxhole, le <strong>11eRC</strong> dispose d’un QG secret pour des rencontres autour d’une bière et d’un discord multi-gaming pour se détendre entre deux campagnes militaires. 
          Notre régiment est une communauté accueillante et soudée, où chaque membre trouve sa place et son rôle.
        </p>
      </div>
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
  { label: "Discord", Icon: DiscordIcon, href: "https://discord.com/invite/11e" },
  {
    label: "Youtube",
    Icon: YoutubeIcon,
    href: "https://www.youtube.com/@11emeregimentdecallahan",
  },
];
