import React from 'react'
import './SideBar.css'
import { Outlet, Link } from "react-router-dom";
import Updates from '../Updates/Updates'
function SideBar({show}) {
    return (
        <div className='sidebardiv'>
            <div className={show ? 'sidebar active' : 'sidebar'} >
               <ul>
               <li class="nav-link">Updates</li> 
                <li class="nav-link">Testimonials</li>
                <li class="nav-link">Gallery</li>
                <li class="nav-link">Contact</li>
               </ul>
                {/*<Link class="nav-link" to="">  Updates</Link>
                <Link class="nav-link" to="">  Testimonials</Link>
                <Link class="nav-link" to="">  Gallery</Link>
                <Link class="nav-link" to=""> Contact</Link>*/}


               
            </div>
            
        </div>
    )
}

export default SideBar