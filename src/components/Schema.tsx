import { FC } from "react";
import Head from "next/head";

interface SchemaProps {
  schema: object;
}

const Schema: FC<SchemaProps> = ({ schema }) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default Schema;
