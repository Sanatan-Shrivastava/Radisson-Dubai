import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import GenLayout from '../components/genlayout'
// import BannerLanding from '../components/BannerLanding'
import BanGold from '../components/BanGold'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
// import pic11 from '../assets/images/gold1.jpg'

import React, { Component } from 'react'

export default class Gold extends Component {
    render() {
        return (
            <GenLayout>
    <Helmet
        title="Gatsby Starter - Forty"
        meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ]}
    >
    </Helmet>

    <BanGold/>

    <div style={{backgroundColor:'#7c6f55',fontFamily:'ZCOOL XiaoWei'}} id="main"> <br></br>
        <section id="one" className="">
        <center><h3 style={{color:'#fff'}}>Blockquote</h3></center>
        <blockquote style={{color:'#fff'}}>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>

        <center><h2 style={{color:'#fff'}}>Pricing for Presidential Diamond Suiter</h2></center>
        <div style={{color:'#fff'}} className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th style={{color:'#fff',fontFamily:'ZCOOL XiaoWei'}}>Features in this Package</th>
                        <th style={{color:'#fff',fontFamily:'ZCOOL XiaoWei'}}>Description</th>
                        <th style={{color:'#fff',fontFamily:'ZCOOL XiaoWei'}}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Deluxe Suite</td>
                        <td>Golden living over sixth floors</td>
                        <td>22000 INR/day</td>
                    </tr>
                    <tr>
                        <td>Restaurants</td>
                        <td>With 4 type of cuisine: Indian, Lebanon, Vegan, Carribean etc.</td>
                        <td>32000 INR</td>
                    </tr>
                    <tr>
                        <td>Car Service</td>
                        <td>A BMW at Your Service whenever You need to go somewhere for as long as you stay.</td>
                        <td>45000 INR</td>
                    </tr>
                    <tr>
                        <td>SPA, GYM, Snookers, and Swimming</td>
                        <td>All the services are on house with the Golden Pack only on membership subscription</td>
                        <td>T&C</td>
                    </tr>
                    <tr>
                        <td>Doctor on call</td>
                        <td>We Care for you!</td>
                        <td>50000 INR</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2"></td>
                        <td>[total here]</td>
                    </tr>
                </tfoot>
            </table>
        </div>
                        
        </section>
        <section style={{backgroundColor:'#7c6f55'}} id="two" className="">
        <center><p style={{fontFamily:'ZCOOL XiaoWei',color:'#fff'}}>
                <h2 style={{color:'#fff'}}>AMNETIES</h2><br></br>
                • World class butler service and concierge service <br></br>
                • Separate living restroom on the lower level <br></br>
                • A master bathroom complete with a full-size Jacuzzi and a separate five-head rain shower
                Hermès bathroom amenities<br></br>
                • Complimentary Wi-fi, 21-inch iMac, a range of 42-inch and 32-inch widescreen interactive HD TV<br></br>
                • Remote controlled environment including curtains, TV, music and lights and a private all in one printer, copier, scanner and fax<br></br>
                • Selection of 9 types of pillows, eiderdown duvets, Egyptian cotton linen and a bed personalised for your specific posture preferences<br></br>
                <br></br>
                <center><Link to="/package-book" className="button next scrolly">Book Now</Link></center>
                </p></center>  
                </section>  
                <section style={{background:'linear-gradient(#7c6f55,#000)'}} id="three" className=""> 
                <div className="box alt">
                    <div className="grid-wrapper">
                        <div className="col-3"><span className="image fit"><img src={pic08} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic09} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic10} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic10} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic08} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic09} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic09} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic10} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic08} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic09} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic10} alt="" /></span></div>
                        <div className="col-3"><span className="image fit"><img src={pic08} alt="" /></span></div>
                    </div>
                </div>
                </section>
       
    </div>

</GenLayout>
        )
    }
}
