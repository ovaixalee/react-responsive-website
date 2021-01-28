import React from 'react'
import { HashLink as NavLink } from 'react-router-hash-link'
import Navbar from 'react-bootstrap/Navbar'


const Navigationbar = () => 
    <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-11 mx-auto">
                <Navbar className="navbar navbar-expand-lg navbar-light " fixed="top" >
                    <NavLink
                        className="navbar-brand" 
                        to="#">
                        MyLogo
                    </NavLink>
                    
                    <button 
                    className="navbar-toggler " 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink 
                                    exact
                                    activeClassName="menu_active" 
                                    className="nav-link" 
                                    to="/header#header">
                                    Home 
                                    <span class="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="menu_active" 
                                    className="nav-link" 
                                    to="/aboutus#aboutus"
                                    >
                                    Über Uns
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    activeClassName="menu_active" 
                                    className="nav-link" 
                                    to="/services#services">
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    activeClassName="menu_active" 
                                    className="nav-link" 
                                    to="/contactus#contactus">
                                    Kontakt
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Navbar>
                </div>
            </div>
        </div>
    </>


export default Navigationbar
