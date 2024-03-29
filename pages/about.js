import React, { useState } from "react";
import Image from "next/image";
import styles from '@components/Pagination.module.css';
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Anchor from "@components/Anchor";

const Pagination = props => {
    const [pages] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [headers] = useState({ 1: "Me", 2: "Wife", 3: "Pup", 4: "Family" })

    const goToNextPage = () => {
        setCurrentPage(page => page + 1);
    }

    const goToPreviousPage = () => {
        setCurrentPage(page => page - 1);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage - 1;
        const endIndex = startIndex + 1;
        return props.data.slice(startIndex, endIndex);
    };

    return (
        <>
            <div className={styles.paginationAb}>
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`${styles.arrowbutton} ${styles.arrowbuttonL} ${currentPage == 1 ? styles.disabled : ''}`}
                />

                <h3>{headers[currentPage]}</h3>

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`${styles.arrowbutton} ${styles.arrowbuttonR} ${currentPage == pages ? styles.disabled : ''}`}
                />
            </div>

            <div className="dataContainer">
                {getPaginatedData().map((data, index) => (
                    <div key={index} className="box">
                        <div className="info2">
                            {data}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

const Page1 = () => {
    return (
        <>
            <div className="about-container1">
                <div className="about-img">
                    <div style={{ padding: '1em', border: '1px solid lightgray', boxShadow: '5px 6px 1em black', borderRadius: '7.5px' }}>
                        <Image
                            src='/images/Dan.jpg'
                            height={480}
                            width={640}
                        />
                    </div>
                </div>
                <div className="about">
                    <p>
                        I am a motivated individual
                        with a passion for software
                        development, specifically the
                        challenge it provides and how
                        rewarding it is to solve
                        complex problems. I enjoy
                        thinking outside the box and
                        coming up with solutions that
                        are unique to myself and my
                        strengths and in the process
                        learning something new every
                        day. Personal growth is my
                        priority and in the world of
                        technology, this opportunity
                        is limitless.
                    </p>
                    <p>
                        I am currently <b>#OpenToWork </b>
                        and looking for roles as a software
                        developer.
                        If you are searching or know someone
                        who is, I would love to get into
                        contact with you!
                    </p>
                    <h4 style={{ marginBottom: '0.5em' }}>Stack</h4>
                    <div className="stack-container">
                        <ul className="stack">
                            <li>HTML5 / JSX</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node</li>
                            <li>Express</li>
                        </ul>
                        <ul className="stack">
                            <li>React</li>
                            <li>Redux</li>
                            <li>Next.js</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact">
                <h3>Contact Me</h3>
                <a href="mailto:damann1072@gmail.com?cc=tech.dmann@gmail.com&subject=Great%20Website!">damann1072@gmail.com</a>
                <p>(205) 936-3366</p>
            </div>
        </>
    )
}

const Page2 = () => {
    return (
        <>
            <div style={{ padding: '1em', border: '1px solid lightgray', boxShadow: '5px 6px 1em black', borderRadius: '7.5px' }}>
                <Image
                    src='/images/Kait.jpg'
                    height={480}
                    width={640}
                />
            </div>
        </>
    )
}

const Page3 = () => {
    return (
        <>
            <div style={{ padding: '1em', border: '1px solid lightgray', boxShadow: '5px 6px 1em black', borderRadius: '7.5px' }}>
                <Image
                    src='/images/Pup.jpg'
                    height={853}
                    width={640}
                />
            </div>
        </>
    )
}

const Page4 = () => {
    return (
        <>
            <div style={{ padding: '1em', border: '1px solid lightgray', boxShadow: '5px 6px 1em black', borderRadius: '7.5px' }}>
                <Image
                    src='/images/Family.jpg'
                    height={427}
                    width={640}
                />
            </div>
        </>
    )
}

const components = {
    'page1': Page1,
    'page2': Page2,
    'page3': Page3,
    'page4': Page4
}

const About = () => {
    const [pages] = useState([
        <components.page1 />,
        <components.page2 />,
        <components.page3 />,
        <components.page4 />
    ])

    return (
        <>
            <Navbar />
            <div>
                <Layout title="About">
                    <h2 className="noM">Profile</h2>
                    <Pagination
                        data={pages}
                    />
                </Layout>
            </div>
            <Anchor
                text="Page Source"
                href="https://github.com/ZnMind/Personal-Brand/blob/main/pages/about.js"
                className="anchor-link"
            />
            <Footer />
        </>
    )
}

export default About;