import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/main'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Today I Learned</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Today I Learned!
        </h1>

        <p className={styles.description}>
          Web関連の情報の学び集{' '}
        </p>

        <Main />
      </main>

      <footer className={styles.footer}>
        Written in&nbsp;<a href="https://github.com/ArmHiro/til">GitHub</a>&nbsp;by Hirofumi Arimoto
      </footer>
    </div>
  )
}
