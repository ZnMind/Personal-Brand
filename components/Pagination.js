import React, { useState , Component } from "react";
import styles from './Pagination.module.css';

const Pagination = data => {
    const [pages] = useState(Math.round(data.data.length / 1))
    const [currentPage, setCurrentPage] = useState(1);
    const [loaded, setLoaded] = useState(false);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const id = event.target.innerHTML.split('"')[1]
        const pageNumber = Number(event.target.innerText);
        console.log(id)
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * 1 - 1;
        const endIndex = startIndex + 1;
        return data.data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        if(!loaded) {
            //setLoaded(true);
            return new Array(5).fill().map((_, idx) => idx + 1);
        }
    };

    return (
        <div className="d-flex justify-center">

            <div className="header-box">
                <div className="box">

                </div>
            </div>

            <div className={styles.pagination}>
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`${styles.prev} ${currentPage == 1 ? styles.disabled : ''}`}
                >
                    prev
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`${styles.paginationItem} ${currentPage === item ? styles.active : null}`}
                    >
                        <span id={item}>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`${styles.next} ${currentPage == 5 ? styles.disabled : ''}`}
                >
                    next
                </button>
            </div>

            <div className="dataContainer d-flex">
                {getPaginatedData().map((data, index) => (
                    <div key={index} className="box d-flex">
                        <div className="info">
                            <a href={data.link} target='_blank' id='site-link'>
                                {data.name}
                            </a>
                        </div>
                        <div className="info">
                            <a href={data.code} target='_blank' id='site-link'>
                                Code
                            </a>
                        </div>
                        <iframe src={data.link} className='project' id={`target${index}`}></iframe>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pagination;