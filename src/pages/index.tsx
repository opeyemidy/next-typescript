import styles from '@/pages/index.module.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from '@/components/Link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="Create Next App" />
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Link>

          <Link href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Link>

          <Link href="https://github.com/vercel/next.js/tree/canary/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Link>

          <Link href="https://vercel.com/new">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
