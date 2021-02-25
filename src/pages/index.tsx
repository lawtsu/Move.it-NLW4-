import { CompletedChallanges } from "../components/CompletedChallanges";
import Head from 'next/head';


import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
    
    <section>
      <div>
          <Profile />
          <CompletedChallanges />
          <CountDown />
      </div>
      <div>
        <ChallengeBox/>
      </div>
    </section>
    
    </div>

  )
}
