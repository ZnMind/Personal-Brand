import React, { Component } from 'react';
import Layout from '../components/Layout';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer'
import Pagination from '../components/Pagination';

class Projects extends Component {
    async componentDidMount() {
        await this.loadProjects()
    }

    async loadProjects() {
        if (typeof window !== 'undefined') {
            /* for (let i = 0; i < this.state.projects.length; i++) {
                var div = document.getElementById(`target${i}`)
                div.onload = function () {
                    div.style.height = "100vh";
                    div.style.width = "110vh"
                }
            } */
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    name: 'REST API with React Pagination',
                    link: "https://prismatic-brioche-997f72.netlify.app/",
                    code: "https://github.com/ZnMind/React-REST-API-Pagination"
                },
                {
                    name: 'Dicey Business',
                    link: "https://62cf08ce80ae69195086b433--fanciful-torte-f1a151.netlify.app/",
                    code: "https://github.com/ZnMind/Dicey-Business"
                },
                {
                    name: 'Just My Type',
                    link: "https://62cf17b7e731572c6daa4ae0--magenta-mochi-f86254.netlify.app/",
                    code: "https://github.com/ZnMind/Just-My-Type"
                },
                {
                    name: 'REST API with Routers',
                    link: 'https://62d081534791ac2c0f000eb6--velvety-lily-38f01f.netlify.app/',
                    code: "https://github.com/ZnMind/Reacting-to-Routers"
                },
                {
                    name: "Tic-Tac-Toe",
                    link: "https://jovial-basbousa-0455e3.netlify.app/",
                    code: "https://github.com/ZnMind/TicTacToe"
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
                <Footer />
            </>
        )
    }
}

export default Projects;
