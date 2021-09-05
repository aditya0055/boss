import React from 'react'
import Footer from '../master/footer.component'
import Header from '../master/header.component'
import './services.style.css'

const Service = () => {
    return (
        <>
            <Header />
            <div id="services" className="cabout">
                <div className="container">
                    <div className="heading">
                        <h2>Ventures</h2>
                        <p>WE WORK WITH YOU, NOT FOR YOU</p>
                        <hr className="line2" />
                    </div>

                    <div className="main-content">
                        <div className="palette__wrapper">
                            <div className="palette palette--one">
                                <div className="palette__cover">
                                    <div className="palette__cover__border"><span>White Force</span></div>
                                </div>
                                <div className="palette__cover__top"></div>
                                <div className="palette__base">
                                <img src="./assets/images/whiteforce.webp" alt="" />
                                </div>
                            </div>
                            <h4>White-Force</h4>
                        </div>
                        <div className="palette__wrapper">
                            <div className="palette palette--two">
                                <div className="palette__cover">
                                    <div className="palette__cover__border"><span>Happiest Resume</span></div>
                                </div>
                                <div className="palette__cover__top"></div>
                                <div className="palette__base">
                                    <img src="https://happiestresume.com/public/front/jobsearch/images/logo1.png" alt="" />
                                </div>
                            </div>
                            <h4>Happiest Resume</h4>
                        </div>
                        <div className="palette__wrapper">
                            <div className="palette palette--three">
                                <div className="palette__cover">
                                    <div className="palette__cover__border"><span>Rajpal Homes</span></div>
                                </div>
                                <div className="palette__cover__top"></div>
                                <div className="palette__base">
                                    <img src="./assets/images/rajpalhomes.webp" alt="" />
                                </div>
                            </div>
                            <h4>Rajpal Homes</h4>
                        </div>
                        <div className="palette__wrapper">
                            <div className="palette palette--four">
                                <div className="palette__cover">
                                    <div className="palette__cover__border"><span>7 Eye IT Solutions</span></div>
                                </div>
                                <div className="palette__cover__top"></div>
                                <div className="palette__base">
                                    <img src="https://7eyeitsolutions.com/global_images/7eye-logo-small.png" alt="" />
                                </div>
                            </div>
                            <h4> 7 Eye IT Solutions</h4>
                        </div>
                        <div className="palette__wrapper">
                            <div className="palette palette--three">
                                <div className="palette__cover">
                                    <div className="palette__cover__border"><span>Desi Wallet</span></div>
                                </div>
                                <div className="palette__cover__top"></div>
                                <div className="palette__base">
                                    <img src="https://desi-wallet.com/assets/img/logo/logo.png" style={{height: "59px",
                                    width: "162px",
                                    marginTop: "35px"}} alt="" />
                                </div>
                            </div>
                            <h4>Desi Wallet</h4>
                        </div>
                        <div className="palette__wrapper">
                            <div className="palette palette--one">
                                <div className="palette__cover">
                                    <div className="palette__cover__border"><span>Rajpal Petrol KSK</span></div>
                                </div>
                                <div className="palette__cover__top"></div>
                                <div className="palette__base">
                                    <img src="./assets/images/oil.webp" style={{
                                        padding: "10px",
                                        marginTop: "-25px" }} alt="" />
                                </div>
                            </div>
                            <h4>Rajpal Petrol KSK </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer">

            </div>
            <Footer />
        </>
    )
}

export default Service

