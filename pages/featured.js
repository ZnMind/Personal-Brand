import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Layout from "@components/Layout";
import Anchor from '@components/Anchor';
import Footer from '@components/Footer';
import artifice from '../public/images/Artifice.jpg';

const Featured = () => {
    return (
        <>
            <Navbar />
            <Layout title="Featured">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '78vh' }}>
                <div style={{ border: '1px solid #ffffff', padding: '2em', borderRadius: '10px', boxShadow: '5px 6px 0.25em black' }}>
                    <h2><a className='anchor-link' href='https://artifice.vercel.app' target='_blank' rel='noreferrer'>Artifice</a></h2>
                    <p>This is a pet project of mine and my most in-depth project</p>
                    <p>It began as an effort to learn Redux and turned into a full-fledged game</p>
                    <p>Artifice takes inspiration from Old School Runescape, but is an incremental style game</p>
                    <p>Written entirely in React and Node with Redux for managing state</p>
                    <p>It currently draws 200+ players per day while still being in development!</p>
                    <p>{`If you would like to check it out, here is the `}
                        <a className='anchor-link' href='https://artifice.vercel.app' target='_blank' rel='noreferrer'>Link</a>!
                    </p>
                    <p>{`In addition, the source code can be found `}
                        <a className='anchor-link' href='https://github.com/ZnMind/Artifice' target='_blank' rel='noreferrer'>Here</a>!
                    </p>
                    <p>( Not yet formatted for mobile users, Sorry! )</p>
                    {/* <img src='/images/Artifice.png' style={{ height: '40vh', width: '40vw' }}></img> */}
                    {/* <iframe src='https://artifice.vercel.app' width='800px' height='600px'></iframe> */}
                </div>
                </div>
            </Layout>
            <Footer />
        </>
    )
}

export default Featured;