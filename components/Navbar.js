import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "./Navbar.module.css"

const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <>
                {/* <div className={styles.next1}>
                    <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />
                </div> */}
            <nav className={styles.nav}>
                <div className={styles.next}>
                    <Link href="/">
                        <a className={
                            `nav-link ${currentRoute === "/"
                                ? "active"
                                : "non-active"}`
                        }>Home</a>
                    </Link>
                </div>
                <div className={styles.next}>
                    <Link href="/about">
                    <a className={
                            `nav-link ${currentRoute === "/about"
                                ? "active"
                                : "non-active"}`
                        }>About</a>
                    </Link>
                </div>
                {/* <div className={styles.next}>
                    <Link href="/message">
                    <a className={
                            `nav-link ${currentRoute === "/message"
                                ? "active"
                                : "non-active"}`
                        }>Messages</a>
                    </Link>
                </div> */}
                <div className={styles.next}>
                    <Link href="/featured">
                    <a className={
                            `nav-link ${currentRoute === "/featured"
                                ? "active"
                                : "non-active"}`
                        }>Featured</a>
                    </Link>
                </div>
                <div className={styles.next}>
                    <Link href="/projects">
                    <a className={
                            `nav-link ${currentRoute === "/projects"
                                ? "active"
                                : "non-active"}`
                        }>Projects</a>
                    </Link>
                </div>
                <div className={styles.next}>
                    <Link href="/resume">
                    <a className={
                            `nav-link ${currentRoute === "/resume"
                                ? "active"
                                : "non-active"}`
                        }>Resume</a>
                    </Link>
                </div>
                <div className={styles.next}>
                    <Link href="/certificates">
                    <a className={
                            `nav-link ${currentRoute === "/certificates"
                                ? "active"
                                : "non-active"}`
                        }>Certificates</a>
                    </Link>
                </div>
                
                <style jsx>{`
                nav { 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    box-shadow: 0 5px 10px #ccc;
                    margin-bottom: 15px;
                  }
                  
                  nav a {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                  }
                  
                  .non-active {
                    color: white;
                  }
                  
                  .active {
                    color: #61dafb;
                }
            `}</style>
            </nav>
        </>
    )
}

export default Navbar;