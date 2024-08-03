import { FC } from 'react';
import Head from 'next/head';
import { homePageMeta } from '../data/data';

const descriptionContent = `
        <h2>Bonjour à toi soldat !</h2>
        <p>Tu hésites à nous rejoindre ? Laisse-nous te convaincre…</p>
        <h3>Notre Histoire et Expertise</h3>
        <p>
            Fort de nos 7 ans d'histoire dans <strong>Foxhole</strong>, le
            <strong> 11ème Régiment de Callahan</strong> [11eRC] est reconnu pour son
            expertise et son engagement au sein de la faction warden. Nous offrons
            un gameplay varié : Logistique, Infanterie, Artillerie, Blindés, Naval,
            Fortifications et Complexes industriels...
        </p>
        <h3>Une Communauté Multilingue</h3>
        <p>
            Tournée vers la communauté, le <strong>11e</strong> dispose d’une branche Anglophone [11eFL],
            d’une branche sinophone [11eCN] et d’une branche francophone [11eRC] permettant de jouer sur plusieurs fuseaux horaires. Nous comptons une solide base de joueurs québécois et français, créant
            ainsi un environnement accueillant pour tous.
        </p>
        <h3>Rejoignez Notre Clan</h3>
        <p>
            Nous offrons une expérience de jeu plaisante et enrichissante, le
            régiment accueille les nouveaux joueurs comme les anciens, sans
            conditions de skill ou de temps de jeu. Rejoins notre <strong>clan</strong> et fais partie d'une communauté soudée et passionnée.
        </p>
        <p>
            N’hésite plus, rejoins le <strong>11ème Régiment de Callahan</strong> et contribue à
            notre légende ! Nous <strong>recrutons</strong> en permanence de nouveaux membres pour renforcer notre clan.
        </p>
`;

const AmpHome: FC = () => {
    const { title, description } = homePageMeta;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="https://11e-foxhole.com/" />
            </Head>
            <header>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </header>
            <main>
                {descriptionContent}
            </main>
        </div>
    );
};

// Export the component with AMP configuration
export const config = { amp: true };

export default AmpHome;