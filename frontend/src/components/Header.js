import React from 'react'
import logo from '../images/klipa1.png'

const Header = () => {
    return (
        <div>
            <header className="header sticky-bar">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><a className="d-flex" href="/"><img alt="jobBox" src={logo} width="150"/></a></div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li ><a className="active" href="/">Home</a>
                                    </li>
                                    <li><a href="/jobs-grid">Find Jobs</a>
                                    </li>
                                    <li><a href="/companies">Companies</a>
                                    </li>
                                    <li><a href="/candidates">Candidates</a>
                                    </li>
                                    <li><a href="/blog">Blog</a>
                                    </li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="burger-icon burger-icon-white"><span className="burger-icon-top"></span><span className="burger-icon-mid"></span><span className="burger-icon-bottom"></span></div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin"><a className="text-link-bd-btom hover-up" href="/signup">Register</a><a className="btn btn-default btn-shadow ml-40 hover-up" href="/signin">Sign in</a></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header