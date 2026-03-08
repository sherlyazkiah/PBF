import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <h1>Halaman About</h1>
        <p>Nama: Sherly Lutfi Azkiah Sulistyawati</p>
        <p>NIM: 2341720241</p>
        <p>Program Studi: D4 Teknik Informatika</p>
    </div>
  )
}
