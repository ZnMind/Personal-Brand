import React, { useState } from "react";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Anchor from "@components/Anchor";
import styles from "@components/Pagination.module.css";

const Pagination = props => {
    const [pages] = useState(2)
    const [currentPage, setCurrentPage] = useState(1)
    const [headers] = useState({ 1: "Innovate Birmingham", 2: "AIDT" })

    const goToNextPage = () => {
        setCurrentPage(page => page += 1);
    }

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage - 1;
        const endIndex = startIndex + 1;
        return props.data.slice(startIndex, endIndex);
    };

    return (
        <>
            <h2 className={styles.headerCe}>{headers[currentPage]}</h2>
            <div className={styles.paginationCe}>

                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`${styles.arrowbuttonCe} ${styles.arrowbuttonLCe} ${currentPage == 1 ? styles.disabled : ''}`}
                />

                <div className="dataContainer">
                    {getPaginatedData().map((data, index) => (
                        <div key={index} className="box">
                            <div className="info">
                                {data}
                            </div>
                        </div>
                    ))}
                </div>

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`${styles.arrowbuttonCe} ${styles.arrowbuttonRCe} ${currentPage == pages ? styles.disabled : ''}`}
                />
            </div>
        </>
    )
}

const Cert1 = () => {
    return (
        
            <iframe src="/images/DANIELMANN.pdf#toolbar=0&navpanes=0&scrollbar=0" className="certificate" height="605" width="795"></iframe>
        
    )
}

const Cert2 = () => {
    return (
        <div>
            <iframe src="/images/AIDT Leadership Cert.pdf#toolbar=0&navpanes=0&scrollbar=0" className="certificate" height="605" width="795"></iframe>
        </div>
    )
}

const components = {
    "cert1": Cert1,
    "cert2": Cert2
}

const Certificates = () => {
    const [certs] = useState([
        <components.cert1 />,
        <components.cert2 />
    ])

    return (
        <>
            <Navbar />
            <Layout title="Resume">
                <Pagination
                    data={certs}
                />
            </Layout>
            <Anchor
                text="Page Source"
                href="https://github.com/ZnMind/Personal-Brand/blob/main/pages/certificates.js"
                className="anchor-link"
            />
            <Footer />
        </>
    )
}

export default Certificates;