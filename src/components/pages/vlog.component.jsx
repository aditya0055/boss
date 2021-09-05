import React from 'react'
import Footer from '../master/footer.component'
import Header from '../master/header.component'

const Vlog = () => {
    return (
        <>
            <Header />
            <div id="vlog" className="cabout">
                <div className="container">
                    <div className="heading">
                        <h2>Latest Vlogs</h2>
                        <p>CHECK OUT SOME OF OUR THINKING</p>
                        <hr className="line2" />
                    </div>

                    <div className="vlog">
                        <div className="vlog-item image">
                            <img src="./assets/images/birthdayvlog.webp" alt="" />
                            <div className="vlog-text">
                                <p>Vlogs</p>
                                <h3 className="heading-3">Decoration of my Cabin | My Birthday Celebrations</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="vlog-item image">
                            <img src="./assets/images/thumb.webp" alt="" />
                            <div className="vlog-text">
                                <p>Vlogs</p>
                                <h3 className="heading-3">My Birthday Celebrations In my Office Part 2 | Birthday</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="vlog-item image">
                            <img src="./assets/images/desiwalletl.webp" alt="" />
                            <div className="vlog-text">
                                <p>Vlogs</p>
                                <h3 className="heading-3">What are the 3 Main Qualities that every Manager Should have?</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>


                    <div className="vlog" data-aos="fade-up">
                        <div className="vlog-item image">
                            <img src="./assets/images/vlog.webp" alt="" />
                            <div className="vlog-text">
                                <p>Vlogs</p>
                                <h3 className="heading-3">Glimpses of Rajpal Tower | Our New Office | Shailesh Rajpal</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="vlog-item image">
                            <img src="./assets/images/vlog1.webp" alt="" />
                            <div className="vlog-text">
                                <p>Vlogs</p>
                                <h3 className="heading-3">Introduction of White Force | Rajpal Group of Ventures</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="vlog-item image">
                            <img src="./assets/images/vlog2.webp" alt="" />
                            <div className="vlog-text">
                                <p>Vlogs</p>
                                <h3 className="heading-3">For a perfect and professional Resume Visit | Happiest Resume</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Vlog
