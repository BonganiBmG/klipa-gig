import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="header sticky-bar">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><a className="d-flex" href="index.html"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/jobhub-logo.svg"/></a></div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">
                                    <li ><a className="active" href="index.html">Home</a>
                                    </li>
                                    <li><a href="/jobs-grid">Find Jobs</a>
                                    </li>
                                    <li><a href="companies-grid.html">Recruiters</a>
                                    </li>
                                    <li><a href="/candidates">Candidates</a>
                                    </li>
                                    <li><a href="blog-grid.html">Blog</a>
                                    </li>
                                    <li><a href="page-contact.html">Contact</a></li>
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