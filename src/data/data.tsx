
import descriptionImage from '../images/Reflexion_brule.jpg';
import operationImage1 from '../images/portfolio/Artillerie.jpg';
import operationImage2 from '../images/portfolio/formation.png';
import operationImage3 from '../images/portfolio/Luv_Havoc.png';
import operationImage4 from '../images/portfolio/sub.jpg';
import operationImage5 from '../images/portfolio/Infanterie.png';
import operationImage6 from '../images/portfolio/blinde.jpg';
import officerBackgroundImage from '../images/officer_background.webp';
import DiscordIcon from '../components/Icon/DiscordIcon';
import YoutubeIcon from '../components/Icon/YoutubeIcon';
import {
  Description,
  HomepageMeta,
  OperationItem,
  OfficerSection,
  Footer,
  ActivityElement,
  Social
} from './dataDef';



/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: '11e Foxhole - A Foxhole Brigade Community',
  description: "11e Foxhole is a Foxhole brigade community. We are a group of players who enjoy playing Foxhole together.",
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
  logoSrc: logoImage,
  name: `11ème Régiment de Callahan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong>Bonjour à toi soldat !</strong> Tu hésites à nous rejoindre ? Laisse-nous te convaincre…
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Fort de nos 7 ans d'histoire dans Foxhole, le <strong>11ème Régiment de Callahan</strong> est reconnu pour son expertise et son engagement au sein de la faction warden.
        Nous offrons un gameplay varié : Logistique, Infanterie, Artillerie, Blindés, Naval, Fortifications et Complexes industriels...
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Tournée vers la communauté, le 11e dispose d’une branche Anglophone et d’une branche sinophone permettant de jouer sur plusieurs fuseaux horaires.
        Nous comptons une solide base de joueurs québécois, créant ainsi un environnement accueillant pour tous.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Nous offrons une expérience de jeu plaisante et enrichissante, le régiment accueille les nouveaux joueurs comme les anciens, sans conditions de skill ou de temps de jeu. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        N’hésite plus, rejoins le 11ème Régiment de Callahan et contribue à notre légende !
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
 */operationImage2
export const operationItems: OperationItem[] = [
  {
    title: 'Formation',
    description: 'Formation des troupes quand à l\'utilisation de l\'ensemble du matériel militaire de la faction Warden',
    url: 'https://reactresume.com',
    image: operationImage2,
  },
  {
    title: 'Artillerie',
    description: 'Opération d\'artillerie de bombardement de la capitale régionale Silk Farms pendant plusieurs heures',
    url: 'https://reactresume.com',
    image: operationImage1,
  },
  {
    title: 'Infiltration',
    description: 'Infiltration des lignes enemies avec des véhicules amphibies afin de faire exploser des charges hautement explosives dans les complexes stratégiques adverses',
    url: 'https://reactresume.com',
    image: operationImage3,
  },
  {
    title: 'Chasse sous marine',
    description: 'Utilisation de sous marins afin de semer le chaos dans les lignes logistiques navales coloniale',
    url: 'https://reactresume.com',
    image: operationImage4,
  },
  {
    title: 'Infanterie',
    description: 'Une escouade d\'infanterie organisée permettant de tenir le front pendant que l\'artillerie est en train de faire tomber l\'objectif',
    url: 'https://reactresume.com',
    image: operationImage5,
  },
  {
    title: 'Colonne de blindés',
    description: 'Une colonne de chars de bataille escortant un super char afin de renverser une partie de la carte en annihilant tout véhicule ennemi se trouvant sur son chemin',
    url: 'https://reactresume.com',
    image: operationImage6,
  }
];

/**
 * Activities section -- TODO: Standardize resume contact format or offer MDX
 */
export const activites: ActivityElement[] =
[
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

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Discord', Icon: DiscordIcon, href: 'https://discord.gg/11e'},
  {label: 'Youtube', Icon: YoutubeIcon, href: 'https://www.youtube.com/@11emeregimentdecallahan16'},
];