
import descriptionImage from '../images/header-background.webp';
import operationImage1 from '../images/portfolio/portfolio-1.jpg';
import operationImage2 from '../images/portfolio/portfolio-2.jpg';
import operationImage3 from '../images/portfolio/portfolio-3.jpg';
import operationImage4 from '../images/portfolio/portfolio-4.jpg';
import operationImage5 from '../images/portfolio/portfolio-5.jpg';
import operationImage6 from '../images/portfolio/portfolio-6.jpg';
import operationImage7 from '../images/portfolio/portfolio-7.jpg';
import operationImage8 from '../images/portfolio/portfolio-8.jpg';
import operationImage9 from '../images/portfolio/portfolio-9.jpg';
import operationImage10 from '../images/portfolio/portfolio-10.jpg';
import operationImage11 from '../images/portfolio/portfolio-11.jpg';
import officerBackgroundImage from '../images/officer_background.webp';
import {
  Description,
  HomepageMeta,
  OperationItem,
  OfficerSection,
  Footer,
  ActivityElement,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Description: 'Le Régiment',
  Operations: 'Les Opérations',
  Activities: 'Les Activités',
  Skills: 'skills',
  Stats: 'stats',
  Officers: 'Les Officiers',
  Footer : 'Footer'
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Description section
 */
export const descriptionData: Description = {
  imageSrc: descriptionImage,
  name: `11ème Régiment de Callahan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong>Bonjour à toi soldat !</strong> Tu hésites à nous rejoindre ? Laisse-nous te convaincre…
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Fort de nos 7 ans d'histoire dans Foxhole, le <strong>11ème Régiment de Callahan</strong> est reconnu pour son expertise et son engagement au sein de la faction warden.
        Nous offrons un gameplay varié, englobant la logistique, le combat d'infanterie, l'artillerie, les blindés, des opérations navales,
        la construction de fortifications et de complexes industriels
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Tournée vers la communauté, le 11e dispose d’une branche Anglophone et d’une branche sinophone permettant de jouer sur plusieurs fuseaux horaires.
        Nous comptons une solide base de joueurs québécois, créant ainsi un environnement accueillant pour tous.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Nous offrons une expérience de jeu plaisante et enrichissante, le régiment accueille les nouveaux joueurs comme les anciens, sans conditions de skill ou de temps de jeu. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        N’hésite plus, rejoignez le 11ème Régiment de Callahan et contribue à notre légende !
      </p>
    </>
  ),
  actions: [

    {
      href: 'https://discord.gg/11e',
      text: 'Rejoindre le discord',
      primary: true
    },
    {
      href: 'https://www.youtube.com/@11emeregimentdecallahan16',
      text: 'Chaîne Youtube',
      primary: true
    }
  ],

};

/**
 * Footer section
 */

export const footerData: Footer = {
  actions: [
    {
      href: 'https://www.youtube.com/@11emeregimentdecallahan16',
      text: 'Chaîne Youtube',
      primary: true
    },
    {
      href: 'https://discord.gg/11e',
      text: 'Rejoindre le discord',
      primary: true
    }
  ],

};

/**
 * Operations section
 */
export const operationItems: OperationItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: operationImage11,
  },
];

/**
 * Activities section -- TODO: Standardize resume contact format or offer MDX
 */
export const activites : ActivityElement[] = [
  {
    title : "Combat",
    content : 
    <p>
      Le régiment combat sur terre, dans les profondeurs, ou sur les océans : Bataille de chars, duels de cuirassés, corps à corps à la baïonnette, charge héroïque à la grenade, 
      infiltrations en sous-marins, pilonnage d’artillerie ou opérations discrète de commandos sont les actions nécessaire à la victoire
    </p>
  },
  {
    title : "Logistique",
    content : 
    <p>
      Que ce soit par train, par camion ou par bateau, 
      le régiment livre tous les jours les dizaines de milliers de ressources récoltées et produites envoyées sur le front pour la victoire des wardens.
    </p>
  },
  {
    title : "Construction",
    content : 
    <p>
      Bouclier des wardens, la qualité des forteresses construite par le Régiment est unanimement reconnue. 
      Chaque guerre, nos sapeurs bâtissent sur le front, et nos architectes créent les points d’arrêt à la déferlante coloniale.
    </p>
  },
  {
    title : "Industrie",
    content : 
    <p>
      Réputé pour ses infrastructures, le régiment organise chaque guerre un tissu industriel et ferroviaire afin de produire tout le nécessaire aux combats : 
      pétrole,  béton, super-chars, canons lourds ferroviaires, sous-marins, cuirassés, etc…
    </p>
  },
  {
    title : "Communauté ",
    content : 
    <p>
      Principalement tourné vers Foxhole, le 11e dispose dans un lieu tenu secret d’un QG pour des rencontres autour d’une bière et 
      d’un discord multi-gaming pour se détendre entre deux campagnes militaires.
    </p>
  }
];

/**
 * Officer section
 */
export const officer: OfficerSection = {
  imageSrc: officerBackgroundImage,
  officers: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};