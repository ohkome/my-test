import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../Works/Works.module.css'
// コンポーネント
import SectionTitle from '../compornents/SectionTitle/SectionTitle'
import BackgroundSlider from '../compornents/BackgroundSlider/BackgroundSlider'

const page = () => {


  const worksDesign = [
    {
      src: '/tours.jpg',
      alt: 'LP-登山ツアー(架空)',
      href: ''
    },
    {
      src: '/businesscard.jpg',
      alt: '名刺',
      href: '#'
    },
    {
      src: '/english.jpg',
      alt: 'オンライン英会話のバナー',
      href: ''
    },
    {
      src: '/pop.jpg',
      alt: '店内ポップ',
      href: ''
    },
    {
      src: '/shopcard.jpg',
      alt: 'ショップカード',
      href: ''
    },
    {
      src: '/mothersday.jpg',
      alt: '母の日ポストカード',
      href: ''
    },
    {
      src: '/himawari.jpg',
      alt: 'LP-高齢者住宅紹介(架空)',
      href: ''
    },
    {
      src: '/kujira.jpg',
      alt: 'Webサイト-カフェ(架空)-',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: 'LP-職業訓練校の一例',
      href: ''
    },
  ]

  const worksWeb = [
    {
      src: '/himawari.jpg',
      alt: 'LP-高齢者住宅紹介(架空)',
      href: ''
    },
    {
      src: '/kujira.jpg',
      alt: 'Webサイト-カフェ(架空)-',
      href: ''
    },
    {
      src: '/tours.jpg',
      alt: 'LP-登山ツアー(架空)',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: 'Webサイト-ポートフォリオサイト-',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: 'LP-職業訓練校の一例',
      href: ''
    },
  ]
  return (
    <section className={styles.topWorks}>
      <SectionTitle 
      enText="Works" 
      jaText="作品"
      enMainColor="#000"
      jaColor="#ccc"
      boxColor="#ccc"
      className={styles.title}
    />

    <ul className={styles.layout_grid}>
      {worksDesign.map((item,index) => {
        return(
          <li key={index} className={styles.works_item}>
            <Link href={item.href}>
              <Image 
              src={item.src} 
              alt={item.alt} 
              fill
              className={styles.works_img}
              />
            </Link>
          </li>
        )
      })}
    </ul>
    </section>
  );

}

export default page