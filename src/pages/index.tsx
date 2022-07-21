import Layout from 'components/layout/layout';
import styles from 'components/home/home.module.css';

export default function Home() {
  return (
    <Layout title="Home">
      <main className="lockup">
        <div className={styles.container}>
          <h1>Lorem Ipsum is simply dummy</h1>
          <h3>Between paragraphs you should set a margin</h3>
          <p>
            Another use case for calc() is to help ensure that form fields fit
            in the available space, without extruding past the edge of their
            container, while maintaining an appropriate margin.
          </p>
          <p>
            Here, the form itself is established to use 1/6 of the available
            window width. Then, to ensure that input fields retain an
            appropriate size, we use calc() again to establish that they should
            be the width of their container minus 1em. Then, the following HTML
            makes use of this CSS:
          </p>
        </div>
      </main>
    </Layout>
  );
}
