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
    <section id="contact">
    <div className="inner">
        <section>
            <form onSubmit={this.submitHandler} >
                <h3 style={{ fontFamily: 'ZCOOL+XiaoWei' }}>Please Register</h3>
                <div className="field half first">
                    <label htmlFor="name">First Name</label>
                    <input type="text" name="name" id="name" onChange={this.nameHandler} />
                </div>
                <div className="field half">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name="name" id="name" onChange={this.nameHandler} />
                </div>
                <div className="field half first">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={this.emailHandler} />
                </div>
                <div className="field half">
                    <label htmlFor="tel">Phone</label>
                    <input type="tel" name="phone" id="phone" onChange={this.phoneHandler} />
                </div>
                <div className="field half first">
                    <label htmlFor="phone">Gender</label>
                    <input type="tel" name="gender" id="gender" onChange={this.genderHandler} />
                </div>
                <div className="field half">
                    <label htmlFor="tel">Age</label>
                    <input type="tel" name="age" id="age" onChange={this.ageHandler} />
                </div>
                <div className="field half first">
                    <label htmlFor="email">Password</label>
                    <input type="text" name="password" id="password" onChange={this.passwordHandler} />
                </div>
                <div className="field half">
                    <label htmlFor="email">Confirm Password</label>
                    <input type="text" name="cnfpassword" id="cnfpassword" onChange={this.cnfpasswordHandler} />
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Submit" className="special" /></li>
                    <li><input type="reset" value="Clear" /></li>
                </ul>
            </form>
        </section>
        <section className="split">

        </section>
    </div>
</section>
)


export default Login