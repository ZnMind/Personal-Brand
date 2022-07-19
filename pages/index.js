import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Layout from '@components/Layout'
import Navbar from '../components/Navbar'
import Projects from './projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Head>
          <title>Dan Mann</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout title="Home">
          <Header title="Welcome to my app!" />
          <p className="description">
            This is the home of <code>Dan Mann</code> and his web portfolio
          </p>
        </Layout>
      </div>
      <Footer />
    </>
  )
}
