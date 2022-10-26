import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import Navbar from '../components/Navbar';
import Logo from '@components/Logo';
import Anchor from '@components/Anchor';

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
            This is the home of <span id='name'>Dan Mann</span> and his web portfolio
          </p>
          <p>Check out the Navbar to get started or click on my links in the footer below</p>
        </Layout>
        <Logo />
      </div>
      <Anchor
        text="Page Source"
        href="https://github.com/ZnMind/Personal-Brand"
        className="anchor-link"
      />
      <Footer />
    </>
  )
}
