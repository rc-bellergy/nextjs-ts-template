import Layout from 'components/layout';
import styles from 'components/Home/Home.module.css';

export default function Home() {
  return (
    <Layout title="Home">
      <main className="lockup">
        <div className={styles.container}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </div>
      </main>
    </Layout>
  );
}
