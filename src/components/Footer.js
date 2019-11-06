import React from 'react'

const Footer = (props) => (
    <footer  style={{backgroundColor:'black'}} id="footer">
        <div style={{backgroundColor:'black'}} className="inner">
            <ul className="icons">
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; All Rights Reserved</li><li>Radisson<a href="#"> Blue</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
