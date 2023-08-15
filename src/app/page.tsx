import Image from 'next/image'
import styles from './page.module.css'
import HeaderClient from '@/compoments/client/header'
import IntroduceHomePage from '@/compoments/client/introduce'

export default function Home() {
  return (
    <main className={styles.wrp}>
      <HeaderClient/>
      <IntroduceHomePage/>
    </main>
  )
}
