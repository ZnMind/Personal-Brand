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
                <p style={{ marginTop: '0.25em', marginBottom: '0.25em' }}>Fun Fact: This resume is written entirely in React!</p>
                {/* <p>It utilizes the Node.js package react-to-print to translate CSS stylings.</p> */}
                <p style={{ marginTop: '0.25em' }}>{`Source code found `}
                    <a href='https://github.com/ZnMind/Resume/blob/main/src/App.js' target='_blank' rel='noreferrer' className='anchor-link'>Here</a>!
                </p>
                <div>
                    <iframe src="/images/DMann-react-resume.pdf#toolbar=0&navpanes=0&scrollbar=0"/*  height="910" width="705"  */ className="resume"></iframe>
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