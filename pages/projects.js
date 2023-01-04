import React, { Component } from 'react';
import Layout from '../components/Layout';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer'
import Pagination from '../components/Pagination';
import Anchor from '@components/Anchor';

class Projects extends Component {
    async componentDidMount() {
        await this.loadProjects()
    }

    async loadProjects() {
        if (typeof window !== 'undefined') {
            console.log("Huzzah!!")
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    name: "Impermanent Loss Calculator",
                    link: "https://639cc336e14c8804ddcc4ae3--mellow-fox-1e1a82.netlify.app/",
                    code: "https://github.com/ZnMind/Impermanent-Loss-Calculator",
                    format: "typing"
                },
                {
                    name: "PlanetScale DB / League of Legends Scraped Games",
                    link: "https://6393a8edd3b1f2073221ba3a--teal-creponne-47065d.netlify.app/",
                    code: "https://github.com/ZnMind/React-PlanetScale",
                    format: "typing"
                },
                {
                    name: "Redux Counter",
                    link: "https://eloquent-gnome-3061a3.netlify.app/",
                    code: "https://github.com/ZnMind/Redux-Beginnings",
                    format: ""
                },
                {
                    name: "Puppeteer/Express Webscraping",
                    link: "https://netlify-heroku-express-backend.netlify.app/",
                    code: "https://github.com/ZnMind/Puppeteer-React-Webscraping",
                    format: "pup"
                },
                {
                    name: 'REST API with React Pagination',
                    link: "https://prismatic-brioche-997f72.netlify.app/",
                    code: "https://github.com/ZnMind/React-REST-API-Pagination",
                    format: "cc"
                },
                {
                    name: "Progress Bars OOP/DOM",
                    link: "https://delicate-dodol-627aed.netlify.app/",
                    code: "https://github.com/ZnMind/Progress-Bars",
                    format: ""
                },
                {
                    name: 'Custom QR Code',
                    link: "https://timely-monstera-26381f.netlify.app/",
                    code: "https://github.com/ZnMind/QR-code",
                    format: ""
                },
                {
                    name: 'Dicey Business',
                    link: "https://62cf08ce80ae69195086b433--fanciful-torte-f1a151.netlify.app/",
                    code: "https://github.com/ZnMind/Dicey-Business",
                    format: ""
                },
                {
                    name: 'Just My Type',
                    link: "https://62cf17b7e731572c6daa4ae0--magenta-mochi-f86254.netlify.app/",
                    code: "https://github.com/ZnMind/Just-My-Type",
                    format: "typing"
                },
                {
                    name: "Tic-Tac-Toe",
                    link: "https://jovial-basbousa-0455e3.netlify.app/",
                    code: "https://github.com/ZnMind/TicTacToe",
                    format: ""
                },
                {
                    name: "Inception",
                    link: "https://dmann.netlify.app",
                    code: "https://github.com/ZnMind/Personal-Brand",
                    format: "cc"
                }
            ]
        }
    }

    render() {
        return (
            <>
                <Navbar />
                <Layout title="Projects">
                    <h2>Projects</h2>
                    <div className='d-flex justify-center'>
                        <Pagination
                            data={this.state.projects}
                        />
                    </div>
                </Layout>
                <Anchor
                    text="Page Source"
                    href="https://github.com/ZnMind/Personal-Brand/blob/main/pages/projects.js"
                    className="anchor-link"
                />
                <Footer />
            </>
        )
    }
}

export default Projects;
