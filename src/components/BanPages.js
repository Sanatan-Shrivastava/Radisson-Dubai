import React from 'react';
import pic12 from '../assets/images/diamond1.jpg'

const BanPages = (props) => (
    <section style={{backgroundImage:`url(${pic12})`}}  id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h3 style={{fontFamily:'Cinzel Decorative'}} >Diamond is indeed the expensive and most hardest!</h3>
            </header>
            <div className="content">
                <p>Planning your most luxurious stays</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Details</a></li>
                    <li><a href="/bookdiamond" className="button next scrolly">Book Now</a></li>
                    <li><a href="#three" className="button next scrolly">Gallery</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default BanPages
