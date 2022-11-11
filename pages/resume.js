import React from "react";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Anchor from "@components/Anchor";

const Resume = () => {
    return (
        <>
            <Navbar />
            <Layout title="Resume">
                <h2>Resume</h2>
                <div>
                    <iframe src="/images/Resume 9-22.pdf#toolbar=0&navpanes=0&scrollbar=0" height="910" width="705" className="resume"></iframe>
                </div>
            </Layout>
            <Anchor
                text="Page Source"
                href="https://github.com/ZnMind/Personal-Brand/blob/main/pages/resume.js"
                className="anchor-link"
            />
            <Footer />
        </>
    )
}

export default Resume;