import React from "react";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <Layout title="About">
                <div className="container">
                    About Page
                </div>
            </Layout>
            <Footer />
        </>
    )
}

export default About;