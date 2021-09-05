import React from 'react'
import Footer from '../master/footer.component'
import Header from '../master/header.component'

const Blog = () => {
    return (
        <>
            <Header />
            <div id="blog" className="cabout">
                <div className="container">
                    <div className="heading">
                        <h2>Latest Blogs</h2>
                        <p>CHECK OUT SOME OF OUR THINKING</p>
                        <hr className="line2" />
                    </div>

                    <div className="blog">
                        <div className="blog-item image">
                            <img src="./assets/images/blog1.webp" alt="" />
                            <div className="blog-text">
                                <p>Blogs</p>
                                <h3 className="heading-3">The real pictures of the economics across the Globe in relation with currect
                                    situation</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="blog-item image">
                            <a href="article.html">
                                <img src="./assets/images/blog2.webp" alt="" />
                                <div className="blog-text">
                                    <p>Blogs</p>
                                    <h3 className="heading-3">Following SUMO-COLE Law will ensure Productive employee results</h3>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>

                        <div className="blog-item image">
                            <img src="./assets/images/blog3.webp" alt="" />
                            <div className="blog-text">
                                <p>Blogs</p>
                                <h3 className="heading-3">What are the 3 Main Qualities that every Manager Should have?</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className="blog" data-aos="fade-up">
                        <div className="blog-item image">
                            <img src="./assets/images/Gallery/gallery9.webp" alt="" />
                            <div className="blog-text">
                                <p>Blogs</p>
                                <h3 className="heading-3">The Importance Of Fitness Among People – By Shailesh Rajpal</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="blog-item image">
                            <img src="./assets/images/Gallery/gallery11.webp" alt="" />
                            <div className="blog-text">
                                <p>Blogs</p>
                                <h3 className="heading-3">I always wanted to serve the Society with Best Resources – Shailesh Rajpal</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="blog-item image">
                            <img src="./assets/images/elonmusk.webp" alt="" />
                            <div className="blog-text">
                                <p>Blogs</p>
                                <h3 className="heading-3">Elon Musk is an Ultimate Source of Inspiration for me – Shailesh Rajpal</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>



                    <div className="blog" data-aos="fade-up">
                        <div className="blog-item image">
                            <img src="./assets/images/blog.webp" alt="" />
                            <div className="blog-text">
                                <p>Blogs</p>
                                <h3 className="heading-3">New Dawn for Companies, Quality Human Resources ensures Productivity –
                                    ShaileshRajpal</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="blog-item image">
                            <img src="./assets/images/blog5.webp" alt="" />
                            <div className="blog-text">
                                <p>Blogs</p>
                                <h3 className="heading-3">Personal Development of the Employees will lead to the Ultimate Development of the
                                    Firm</h3>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="blog-item image">
                            <img src="./assets/images/blog6.webp" alt="" />
                            <div className="blog-text">
                                <p>Blogs</p>
                                <h3 className="heading-3">We All Should Learn the Quality of Taking Risks – Shailesh Rajpal</h3>
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

export default Blog
