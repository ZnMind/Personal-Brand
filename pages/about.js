import React from "react";
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <Layout title="About">
                    <h3>Profile</h3>
                    <div className="about-container">
                        <div className="about-img">
                            <img src="/images/Prof Photo.jpg"></img>
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
                        <p>tech.dmann@gmail.com</p>
                        <p>(205) 936-3366</p>
                    </div>
                </Layout>
            </div>
            <Footer />
        </>
    )
}

export default About;