import React from "react";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const Resume = () => {
    return (
        <>
            <Navbar />
            <Layout title="Resume">
                <div>
                    <iframe src="/images/Dmann 2022 Resume.pdf" className="resume"></iframe>
                </div>
            </Layout>
            <Footer />
        </>
    )
}

export default Resume;