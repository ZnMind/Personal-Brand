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
          

          <p>
            This is the home of <span id='name'>Dan Mann</span> and his web portfolio.
          </p>
          <p>I am a full stack web developer with a thirst for learning. I am always looking for ways to challenge myself and grow, so if you have an opportunity let me know!</p>
          

          <Logo />
          
            <p><b>Languages</b>: JavaScript, HTML5, CSS, Python</p>
            <p><b>Technologies</b>: React, Redux, Node.js, Express, Next.js</p>
            <p><b>Database</b>: MongoDB, MySQL</p>

        </Layout>
        {/* <p>Powered by <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>Next.js</a> / <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React</a></p> */}
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
