import React from 'react'
import { Link } from 'gatsby'
import GenLayout from '../components/genlayout'


const Landing = (props) => (
    <GenLayout>
    <section id="contact">
    <div className="inner">
        <section>
            <form>
            <h3 style={{fontFamily:'ZCOOL+XiaoWei'}}>Please Register</h3>
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
                    <input type="tel" name="phone" id="phone" />
                </div>
                <div className="field half">
                    <label htmlFor="tel">Age</label>
                    <input type="tel" name="age" id="age" />
                </div> 
                <div className="field half first">
                    <label htmlFor="email">Password</label>
                    <input type="text" name="pasword" id="email" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Confirm Password</label>
                    <input type="text" name="email" id="email" />
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