import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import GenLayout from '../components/genlayout'
import BannerLanding from '../components/BannerLanding'
import axios from 'axios'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/radisson.png'
import pic12 from '../assets/images/dubai.png'

let state = {
    password: '',
    cnfPassword: '',
    isPasswordError: false
}
const handlePass = event => {
    state.password = event.target.value
}
const handleCnfPass = event => {
    state.cnfPassword = event.target.value
    if (state.password != state.cnfPassword) {
        
    }
}

const Landing = (props) => (
    <GenLayout>
        <section id="contact">
            <div className="inner">
                <section>
                    <form method="post" action="http://localhost:3000/user/">
                        <h3 style={{ fontFamily: 'ZCOOL+XiaoWei' }}>Please Register</h3>
                        <div className="field half first">
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="name">Last Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half first">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field half">
                            <label htmlFor="tel">Phone</label>
                            <input type="tel" name="phone" id="phone" />
                        </div>
                        <div className="field half first">
                            <label htmlFor="phone">Gender</label>
                            <input type="tel" name="gender" id="gender" />
                        </div>
                        <div className="field half">
                            <label htmlFor="tel">Age</label>
                            <input type="tel" name="age" id="age" />
                        </div>
                        <div className="field half first">
                            <label htmlFor="email">Password</label>
                            <input type="text" name="password" id="password" onChange={this.handlePass} />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Confirm Password</label>
                            <input type="text" name="cnfpassword" id="cnfpassword" onChange = {this.handleCnfPass}/>
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
    </GenLayout>
)


export default Landing