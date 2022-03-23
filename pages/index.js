import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import vector from '../public/Vector.svg'
import arrow from '../public/arrow.svg'
import Link from 'next/link'
import File from '../components/file'
import {dataTree} from '../data/dataTree';



export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
      <File {...dataTree} />
      </div>
      {/* <div>
      <Image src={arrow} width={12} height={20} />
      <Image src={vector} width={24} height={24} />
      <span>Folder Name</span>
      </div> */}
    </div>
  )
}