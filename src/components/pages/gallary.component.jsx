import React from 'react'
import Footer from '../master/footer.component'
import Header from '../master/header.component'

const Gallery = () => {
    return (
        <>
            <Header />
            <div id="gallery" style={{ paddingTop: '4rem', paddingBottom: '0%' }}>
                <div className="container">
                    <div className="heading">
                        <h2>Our Gallery</h2>
                        <p>WE WORK WITH YOU, NOT FOR YOU</p>
                        <hr className="line2" />
                    </div>

                    <div className="gallery">
                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery.webp" alt="" />
                        </div>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery2.webp" alt="" />
                        </div>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery3.webp" alt="" />
                        </div>
                    </div>

                    <div className="gallery">

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery7.webp" alt="" />
                        </div>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery8.webp" alt="" />
                        </div>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery9.webp" alt="" />
                        </div>
                    </div>

                    <div className="gallery">

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery4.webp" alt="" />
                        </div>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery5.webp" alt="" />
                        </div>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery6.webp" alt="" />
                        </div>
                    </div>



                    <div className="gallery" style={{ marginBottom: "150px" }}>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery10.webp" alt="" />
                        </div>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery11.webp" alt="" />
                        </div>

                        <div className="gallery-item imagegallery">
                            <img src="./assets/images/Gallery/gallery12.webp" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery
