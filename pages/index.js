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
        
          <Header title="Welcome!" />
          <p className="description">
            This is the home of Dan Mann and his web portfolio
          </p>
          <p>Check out the Navbar to get started or click on my links in the footer below</p>
          
        </Layout>
        <div className='container-react'>

        <span class="react-logo">
            <span class="nucleo"></span>
        </span>
        </div>
      </div>
      <Footer />
    </>
  )
}
