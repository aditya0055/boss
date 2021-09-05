import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="homepage">
            <div id="intro">
                <div className="container chome">
                    <br />
                    <div className="intro-text line" style={{ marginTop: '30%' }}>
                        <h1>Hey! I'm
                            <br />
                            Shailesh Rajpal
                        </h1>
                        <Link to="/about" className="btn btn-dark">Getting Started </Link>
                    </div>

                </div>
            </div>
        </main>
    )
}
export default Home
