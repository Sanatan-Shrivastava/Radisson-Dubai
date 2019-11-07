import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import GenLayout from '../components/genlayout'
// import BannerLanding from '../components/BannerLanding'
import BanPages from '../components/BanPages'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/radisson.png'


const Diamond = (props) => (
    <GenLayout>
    <Helmet
        title="Gatsby Starter - Forty"
        meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ]}
    >
    </Helmet>

    <BanPages/>

    <div style={{background:'linear-gradient(rgba(255,255,255), rgba(255,255,255))',fontFamily:'ZCOOL XiaoWei'}} id="main"> <br></br>
        <section id="one" className="">
        <center><h3 style={{color:'#000'}}>Blockquote</h3></center>
        <blockquote style={{color:'#000'}}>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>

        <center><h2 style={{color:'#000'}}>Pricing for Presidential Diamond Suiter</h2></center>
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
                        <td>Presidential Suite</td>
                        <td>Lavish living over two floors</td>
                        <td>30000 INR/day</td>
                    </tr>
                    <tr>
                        <td>Restaurants</td>
                        <td>With every type of cuisine: Indian, Continental, Vegan, Carribean etc.</td>
                        <td>40000 INR</td>
                    </tr>
                    <tr>
                        <td>Car Service</td>
                        <td>A Rolls Royce at Your Service whenever You need to go somewhere for as logn as you stay.</td>
                        <td>60000 INR</td>
                    </tr>
                    <tr>
                        <td>SPA, GYM etc services</td>
                        <td>All the services are on house iwth the Diamond Pack.</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>Doctor on call</td>
                        <td>We Care for you!</td>
                        <td>40000 INR</td>
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
        <section style={{background:'linear-gradient(rgba(255,255,255), rgba(255,255,255))'}} id="two" className="">
          <center><p style={{fontFamily:'ZCOOL XiaoWei',color:'#000'}}>
                <h2 style={{color:'#000'}}>AMNETIES</h2><br></br>
                •3,000 AED Resort Credit once per stay <br></br>
                •World class butler service <br></br>
                •In-suite check-in and check-out <br></br>
                •Personalised private bars <br></br>
                •Two spacious dressing rooms <br></br>
                •A private library <br></br>
                •Separate dining room for six people<br></br> 
                •Daily breakfast buffet for two in Junsui or Bab Al Yam<br></br>
                •Separate staff entrance with private butler’s kitchen<br></br>
                •Two master bathrooms complete with a full-size Jacuzzi and a separate five-head rain shower<br></br>
                •A set of his and hers Hermès amenities<br></br>
                •Separate guest restroom on the lower level.<br></br>
                •Complimentary wifi, 21-inch iMac, a range of 42-inch and 32-inch widescreen interactive HD TVs<br></br>
                •Remote controlled environment including curtains, TV, music and lights and an all in one printer, copier, scanner and fax<br></br>
                •Selection of 9 types of pillows, eiderdown duvets, exquisite Egyptian cotton linen and beds personalised to suit your specific posture preferences
                •Facilities<br></br>
                •We offer a rich selection of facilities and amenities to guests at Radisson Dubai, although please note that some may incur an additional fee.<br></br>
                <br></br>
                <center><a href="#two" className="button next scrolly">Book Now</a></center>
                </p></center>  
                </section>  
                <section style={{background:'linear-gradient(rgba(255,255,255), rgba(255,255,255))'}} id="three" className=""> 
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


export default Diamond