import Link from "next/link";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.next}>
                <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />
            </div>
            <div className={styles.next}>
                <Link href="/">
                    <a className="nav-link">Home</a>
                </Link>
            </div>
            <div className={styles.next}>
                <Link href="/about">
                    <a className="nav-link">About</a>
                </Link>
            </div>
            <div className={styles.next}>
                <Link href="/resume">
                    <a className="nav-link">Resume</a>
                </Link>
            </div>
            <div className={styles.next}>
                <Link href="/projects">
                    <a className="nav-link">Projects</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;