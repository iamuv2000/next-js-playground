import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				

				<div className={styles.grid}>
					
					<Link href="/yuvraj">
					<a
						className={styles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
					</Link>
				</div>
			</main>
		</div>
	)
}
