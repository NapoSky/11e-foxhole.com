import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

// Tableau de correspondance pour les codes de langue
const langMapping: { [key: string]: string } = {
  fr: "fr",
  en: "en",
  cn: "zh-Hans",
};

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & { locale: string }> {
    const initialProps = await Document.getInitialProps(ctx);

    // Récupère la locale depuis le contexte de la requête, assurez-vous que c'est une chaîne
    const locale = Array.isArray(ctx?.query?.locale)
      ? ctx.query.locale[0]
      : ctx.query.locale || "fr";

    return {
      ...initialProps,
      locale,
    };
  }

  render() {
    const { locale } = this.props;

    // Utilise le tableau de correspondance pour obtenir le code de langue complet
    const htmlLang = langMapping[locale as string] || "fr"; // Valeur par défaut 'fr' si locale n'est pas trouvée

    return (
      <Html lang={htmlLang}>
        {" "}
        {/* Assurez-vous que locale est une chaîne */}
        <Head>
          <meta content="notranslate" name="google" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* Ajoutez ici d'autres balises meta ou des liens comme les polices */}
        </Head>
        <body className="bg-black">
          <Main /> {/* Rend la structure de votre page */}
          <NextScript /> {/* Inclut les scripts générés par Next.js */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
