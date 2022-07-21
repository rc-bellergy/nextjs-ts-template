import Head from 'next/head';

interface PageHeadProps {
  title: string;
}

export default function PageHead(props: PageHeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="No description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
