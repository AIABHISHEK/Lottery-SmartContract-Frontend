'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/Components/Header'

import { MoralisProvider } from 'react-moralis'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <MoralisProvider initializeOnMount={false}>
      <main className={styles.main}>
      <Header></Header>
      <div className={styles.description}>
        <p>
          Lottery Smart contract&nbsp;
          {/* <code className={styles.code}>app/page.js</code> */}
        </p>
      </div>
        <div className={styles.grid}>
          <p>hello</p>
      </div>
    </main>
  </MoralisProvider>
  )
}
