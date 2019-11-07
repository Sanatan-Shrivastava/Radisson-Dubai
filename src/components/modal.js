import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Modal = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/aboutus">About Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Restaurants</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Get Membership</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Check Packages</a></li>
                <li><a href="/login" className="button fit">Log In</a></li>
                <li><a href="/custom" className="button special fit">Book Now</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Modal
