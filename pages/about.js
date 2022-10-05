import React, { useState } from "react";
import styles from '@components/Pagination.module.css';
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const Pagination = props => {
    const [pages] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
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

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`${styles.arrowbutton} ${styles.arrowbuttonR} ${currentPage == pages ? styles.disabled : ''}`}
                />
            </div>

            <div className="dataContainer">
                {getPaginatedData().map((data, index) => (
                    <div key={index} className="box">
                        <div className="info">
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
            <h3>Me</h3>
            <div className="about-container1">
                <div className="about-img">
                    <img src="/images/Dan.jpg" height="480" width="640"></img>
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
                    <div>
                        <h4>Stack</h4>
                        <ul className="stack">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node</li>
                        </ul>
                        <ul className="stack">
                            <li>React</li>
                            <li>NextJS</li>
                            <li>Express</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact">
                <h3>Contact Me</h3>
                <a href="mailto:tech.dmann@gmail.com?cc=damann1072@gmail.com&subject=Great%20Website!">tech.dmann@gmail.com</a>
                <p>(205) 936-3366</p>
            </div>
        </>
    )
}

const Page2 = () => {
    return (
        <>
            <h3>Wife</h3>
            <img src="/images/Kait.jpg" height="600" width="800"></img>
            {/* <img src="/images/Wedding.jpg" height="600" width="800"></img> */}
        </>
    )
}

const Page3 = () => {
    return (
        <>
            <h3>Pup</h3>
            <img src="/images/Pup.jpg" height="640" width="480"></img>

        </>
    )
}

const Page4 = () => {
    return (
        <>
            <h3>Family</h3>
            <img src="/images/Family.jpg" height="533.5" width="800"></img>
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
    const [currentPage, setCurrentPage] = useState('page1');
    const [pages] = useState([
        <components.page1 />,
        <components.page2 />,
        <components.page3 />,
        <components.page4 />
    ])

    return (
        <>
            <Navbar />
            <div className="about-container">
                <Layout title="About">
                    <h2 className="noM">Profile</h2>
                    <Pagination
                        data={pages}
                    />
                </Layout>
            </div>
            <Footer />
        </>
    )
}

export default About;