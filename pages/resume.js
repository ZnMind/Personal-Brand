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
                    <iframe src="/images/dmann2022.pdf#toolbar=0&navpanes=0&scrollbar=0" className="resume"></iframe>
                </div>
            </Layout>
            <Footer />
        </>
    )
}

export default Resume;