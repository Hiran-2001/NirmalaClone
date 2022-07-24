import React, { useState } from 'react'
import './NavBar.css'
import { IoMenu } from 'react-icons/io5'
import { BiCalendarEvent } from 'react-icons/bi'
import { MdPhone, MdDirections } from 'react-icons/md'
import { ExternalLink } from 'react-external-link';
import SideBar from '../SideBar/SideBar'
import ContentBanner from '../Content&Banner/ContentBanner'
import Updates from '../Updates/Updates'
import Testimonials from '../Testimonials/Testimonials'
import Gallery from '../Gallery/Gallery'
import ContactUs from '../Contact-us/ContactUs'
function NavBar() {
    const [showNav, setShowNav] = useState(false);

    const toggleSidebar = () => {
        setShowNav(!showNav)
    }
    return (
        <div className='navbar'>

            <nav id='nav' class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <IoMenu id='menubtn' onClick={ toggleSidebar } />
                    <a id='logo' class="navbar-brand" href="/">NIRMALA ACADEMY</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <ExternalLink id='booking' class="nav-link" href='https://www.facebook.com/nirmalaacademy' > <BiCalendarEvent className='icon' /> Make Appointment</ExternalLink>
                            </li>
                            <li class="nav-item">
                                <a id='call' class="nav-link" href="#"> <MdPhone className='icon' />Call Now</a>
                            </li>

                            <li class="nav-item">
                                <ExternalLink id='getDic' class="nav-link" href='https://www.google.com/maps/dir//NIRMALA+ACADEMY/@9.6598267,76.2293312,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b087dd8d75aadb5:0x8e3a32ecf31f022f!2m2!1d76.2993711!2d9.6598337' > <MdDirections className='icon' /> Get Directions</ExternalLink>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <ContentBanner/>
            <SideBar show={showNav}  />
            <Updates/>
            <Testimonials/>
            <Gallery/>
            <ContactUs/>
            
        </div>
    )
}

export default NavBar