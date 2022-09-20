import React, { useState } from "react";
import styles from './Pagination.module.css';

const Pagination = data => {
    const [pages] = useState(Math.round(data.data.length / 1))
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        //const id = event.target.innerHTML.split('"')[1]
        const pageNumber = Number(event.target.innerText);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * 1 - 1;
        const endIndex = startIndex + 1;
        return data.data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        if (currentPage <= 3) {
            return new Array(5).fill().map((_, index) => index + 1)
        } else if (currentPage >= data.data.length - 2) {
            return new Array(5).fill(data.data.length).map((element, index) => element - (4 - index))
        } else {
            return new Array(5).fill(currentPage - 2).map((element, index) => element + index)
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
                    className={`${styles.next} ${currentPage == pages ? styles.disabled : ''}`}
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
                                Source Code
                            </a>
                        </div>
                        <iframe src={data.link} className={`project${data.format}`} id={`target${index}`}></iframe>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pagination;