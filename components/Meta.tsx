import React from "react";
import Head from "next/head";

interface MetaProps {
  description: string;
  title: string;
}

const Meta = ({ description, title }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Meta;
