import React from 'react';
const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Radisson Dubai</h1>
            </header>
            <div className="content">
                <p>Planning your most luxurious stays</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Check our Packages</a></li>
                    <li><a href="/login" className="button next scrolly">Login</a></li>
                    <li><a href="/register" className="button next scrolly">Register</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
