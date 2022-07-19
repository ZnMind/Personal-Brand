import styles from './Footer.module.css'
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.next}>
          {/* Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you */}
        </div>
        
        <div className={styles.next}>

          <Link href="https://github.com/ZnMind?tab=repositories">
            <a className={styles.logo} target="_blank">
              <img src="/images/GH.svg" width={"30px"} height={"40px"} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/daniel-mann-98113198/">
            <a className={styles.logo} target="_blank">
              <img src="/images/LI.svg" width={"40px"} height={"40px"} />
            </a>
          </Link>
        </div>
      </footer>
    </>
  )
}
