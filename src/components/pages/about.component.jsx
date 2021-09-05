import React from 'react'
import Footer from '../master/footer.component'
import Header from '../master/header.component'


const About = () => {
    return (
        <>
            <Header />
            <div id="about" className="cabout chome">
                <div className="container">
                    <div className="heading">
                        <h2>About</h2>
                        <p>WE WORK WITH YOU, NOT FOR YOU</p>
                        <hr className="line2" />
                    </div>

                    <div className="about">
                        <div className="image image1">
                            <img src="./assets/images/boss4.webp" alt="" />
                            <div className="image-text">
                                <h3 className="heading-3">About Me</h3>
                                <p>Commited and Creative</p>
                            </div>
                        </div>
                        <div className="image image2">
                            <img src="./assets/images/images2.webp" alt="" />
                            <div className="image-text">
                                <h3 className="heading-3">Philosophy</h3>
                                <p>Trust Pays off</p>
                            </div>
                        </div>
                        <div className="image image2">
                            <img src="./assets/images/images3.webp" alt="" />
                            <div className="image-text">
                                <h3 className="heading-3">Working</h3>
                                <p>24/07</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-text">
                        <div className="text1">
                            <h2 className="heading-2">About Me</h2>
                            <p>
                                This is Shailesh Rajpal, CEO and Founder of RAJPAL GROUP OF COMPANIES.
                                With an ideology of being the greatest entrepreneur ever, I wanted my skills
                                to be useful for our nation with quality services under one roof with
                                prominent efficiency. After completing my MBA from a Premier Institute and a
                                certificate course in Management from University of Australia,
                                I started my own company after having vast experience in Human Resource
                                Management area. Rajpal Group of companies has become a dynamic business
                                reality in India and across the world.
                            </p>
                        </div>
                    </div>
                    <div className="spacer">

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
