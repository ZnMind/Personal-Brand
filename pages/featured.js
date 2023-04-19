import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Layout from "@components/Layout";
import Anchor from '@components/Anchor';
import Footer from '@components/Footer';

const Featured = () => {
    return (
        <>
            <Navbar />
            <Layout title="Projects">
                
                <div>
                    <h2>Artifice</h2>
                    <p>This is a pet project of mine and my most in-depth project.</p>
                    {/* <iframe src='https://artifice.vercel.app' className='artifice'></iframe> */}
                </div>
            </Layout>
            
            <Footer />
        </>
    )
}

export default Featured;