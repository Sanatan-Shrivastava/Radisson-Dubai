import React from 'react';
import pic13 from '../assets/images/gold1.jpg'

const BanGold = (props) => (
    <section style={{backgroundImage:`url(${pic13})`}}  id="banner" className="major">
        <div  style={{color:'#d4af37'}} className="inner">
            <header  style={{color:'#d4af37'}} className="">
            
                <h3 style={{fontFamily:'Cinzel Decorative', color:'#d4af37'}} >With Gold, get the Golden Dreams along with a lots of Savings!</h3>
            </header>
            <hr color="#d4af37"/>
            <div className="content">
                <p style={{color:'#d4af37'}}>Planning your most Vibrant and golden stays</p>
                <ul className="actions">
                    <li><a style={{color:'#d4af37'}} href="#one" className="button next scrolly">Details</a></li>
                    <li><a style={{color:'#d4af37'}} href="#two" className="button next scrolly">Book Now</a></li>
                    <li><a  style={{color:'#d4af37'}} href="#three" className="button next scrolly">Gallery</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default BanGold
