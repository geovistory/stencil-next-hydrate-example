import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverRender } from '../lib/serverRender';
import styles from '../styles/Home.module.css';

interface HomeProps {
  _ssrHtmlBody: string;
  _ssrHtmlHead: string;
  _ssrData: { [key: string]: any };
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={styles.main}
        dangerouslySetInnerHTML={{ __html: props._ssrHtmlBody }}
      ></main>
    </div>
  );
};

const ssr = () => (
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Class of entity i315800</ion-card-subtitle>
      <ion-card-title>
        <geov-entity-class-label
          sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"
          entity-id="i315800"
        ></geov-entity-class-label>
      </ion-card-title>
    </ion-card-header>
  </ion-card>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await serverRender(ssr());

  return {
    props: {
      _ssrHtmlBody: res.bodyInnerHtml,
      _ssrHtmlHead: res.headInnerHtml,
      _ssrData: res.serverFetchedData
    },
    revalidate: 10,
  };
};

export default Home;
