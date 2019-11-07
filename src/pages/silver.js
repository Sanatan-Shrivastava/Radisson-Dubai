import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import GenLayout from '../components/genlayout'
// import BannerLanding from '../components/BannerLanding'
import BanSilver from '../components/BanSilver'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
// import pic11 from '../assets/images/gold1.jpg'


const Silver = (props) => (
    <GenLayout>
    <Helmet
        title="Gatsby Starter - Forty"
        meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ]}
    >
    </Helmet>

    <BanSilver/>

    <div style={{backgroundColor:'#aaa9ad',fontFamily:'ZCOOL XiaoWei'}} id="main"> <br></br>
        <section id="one" className="">
        <center><h3 style={{color:'#000'}}>Blockquote</h3></center>
        <blockquote style={{color:'#000'}}>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>

        <center><h2 style={{color:'#000'}}>Pricing for Mid-Budget Silver Suite</h2></center>
        <div style={{color:'#000'}} className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th style={{color:'#000',fontFamily:'ZCOOL XiaoWei'}}>Features in this Package</th>
                        <th style={{color:'#000',fontFamily:'ZCOOL XiaoWei'}}>Description</th>
                        <th style={{color:'#000',fontFamily:'ZCOOL XiaoWei'}}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Economy Suite</td>
                        <td>Silvery skies over ninth floors</td>
                        <td>22000 INR/day</td>
                    </tr>
                    <tr>
                        <td>Restaurants</td>
                        <td>With 3 type of cuisine: Indian, Lebanon, Carribean</td>
                        <td>27000 INR</td>
                    </tr>
                    <tr>
                        <td>Car Service</td>
                        <td>A Mercedes Benz at Your Service whenever You need to go somewhere for as long as you stay.</td>
                        <td>45000 INR</td>
                    </tr>
                    <tr>
                        <td>SPA, GYM and Swimming</td>
                        <td>All the services are on house with the Silver Pack only on membership subscription</td>
                        <td>T&C</td>
                    </tr>
                    <tr>
                        <td>Doctor on call</td>
                        <td>We Care for you!</td>
                        <td>53000 INR</td>
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
        <section style={{backgroundColor:'#aaa9ad'}} id="two" className="">
        <center><p style={{fontFamily:'ZCOOL XiaoWei',color:'#000'}}>
                <h2 style={{color:'#000'}}>AMNETIES</h2><br></br>
                • World class butler service and concierge servic<br></br>e
                • Two bedrooms with bathroom complete with a full-size Jacuzzi and a separate five-head rain showe<br></br>r
                • Separate staff entrance with private kitche<br></br>n
                • Separate guest restroom on the lower leve<br></br>l
                • Hermès bathroom amenitie<br></br>s
                • Complimentary Wi-fi, 21-inch iMac, a range of 42-inch and 32-inch widescreen interactive HD T<br></br>V
                • Remote controlled environment including curtains, TV, music and lights and a private all in one printer, copier, scanner and fa<br></br>x
                • Selection of 9 types of pillows, eiderdown duvets, Egyptian cotton linen and beds personalised for your specific posture preferences<br></br>
                <br></br>
                <center><a href="#two" className="button next scrolly">Book Now</a></center>
                </p></center>  
                </section>  
                <section style={{background:'linear-gradient(#aaa9ad,#000)'}} id="three" className=""> 
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


export default Silver