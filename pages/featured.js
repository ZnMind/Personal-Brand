import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Layout from "@components/Layout";
import Anchor from '@components/Anchor';
import Footer from '@components/Footer';
import artifice from '../public/images/Artifice.jpg';

const Featured = () => {
    /* let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.onload = function () {

        // set size proportional to image
        canvas.height = canvas.width * (img.height / img.width);
    
        // step 1 - resize to 50%
        var oc = document.createElement('canvas'),
            octx = oc.getContext('2d');
    
        oc.width = img.width * 0.5;
        oc.height = img.height * 0.5;
        octx.drawImage(img, 0, 0, oc.width, oc.height);
    
        // step 2
        octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);
    
        // step 3, resize to final size
        ctx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
        0, 0, canvas.width, canvas.height);
    }
    img.src = "//i.imgur.com/SHo6Fub.jpg"; */
    return (
        <>
            <Navbar />
            <Layout title="Projects">

                <div>
                    <h2><a className='anchor-link' href='https://artifice.vercel.app' target='_blank' rel='noreferrer'>Artifice</a></h2>
                    <p>This is a pet project of mine and my most in-depth project</p>
                    <p>It began as an effort to learn Redux and turned into a full-fledged game</p>
                    <p>Artifice takes inspiration from Old School Runescape, but is an incremental style game</p>
                    <p>Written entirely in React and Node with Redux for managing state</p>
                    <p>It currently draws 200+ players per day while still being in development!</p>
                    <p>{`If you would like to check it out, here is the `}
                        <a className='anchor-link' href='https://artifice.vercel.app' target='_blank' rel='noreferrer'>Link</a>!
                    </p>
                    <p>( Not yet formatted for mobile users, Sorry! )</p>
                    {/* <img src='/images/Artifice.jpg' style={{ height: '75vh', width: '75vw' }}></img> */}
                </div>
            </Layout>

            <Footer />
        </>
    )
}

export default Featured;