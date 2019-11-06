import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import GenLayout from '../components/genlayout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/radisson.png'
import pic12 from '../assets/images/dubai.png'

const Diamond = (props) => (
    <GenLayout>
    <Helmet>
        <title></title>
        <meta name="description" content="Landing Page" />
    </Helmet>
    

    <section id="contact">
       <center><div className="inner">
            <section id="one">
            <h3 style={{fontFamily:'Cinzel Decorative'}}>Welcome the newest era of hotel experience! <br></br> The Diamond Package</h3>
            <hr color="white"></hr>
            </section>
        </div></center> 
    </section>
</GenLayout>
)


export default Diamond