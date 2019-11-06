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

const Login = (props) => (
    <GenLayout>
    <section id="contact">
    <div className="inner">
        <section>
            <form method="post" action="#">
            <h3 style={{fontFamily:'ZCOOL+XiaoWei'}}>Login</h3>
                
                <div className="field half first">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field half first">
                    <label htmlFor="email">Password</label>
                    <input type="text" name="email" id="email" />
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Login" className="special" /></li>
                    <li><input type="reset" value="Reset Password" /></li>
                </ul>
            </form>
        </section>
        <section className="split">
        
        </section>
    </div>
</section>
</GenLayout>
)


export default Login