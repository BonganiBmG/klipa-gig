import React from 'react'
import Header from './Header'
import Footer from '../components/Footer';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout