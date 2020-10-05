import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
// import logo from '../assets/img/logo_465x320.png'

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);

    console.log(menuToggle);

    return(
        <div>

            

            <div className="header">

                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="desktop-menu container">
                    <div className="row">

                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                {/* <img src={logo} /> */}
                                <a href="#">Shipment Tracking</a>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                 </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>
                    <Link to="/home" onClick={() => setMenuToggle(!menuToggle)}>Home</Link>
                    <Link to="/services" onClick={() => setMenuToggle(!menuToggle)}>Services</Link>
                    <Link to="/about" onClick={() => setMenuToggle(!menuToggle)}>About</Link>
                    <Link to="/contact" onClick={() => setMenuToggle(!menuToggle)}>Contact</Link>
                    <Link to="/order" onClick={() => setMenuToggle(!menuToggle)}>Order</Link>
                </div>

            </div>
        </div>
    );
}

export default Header;