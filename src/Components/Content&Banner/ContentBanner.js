import React from 'react'
import './Content-Banner.css'
import Banner from '../../images/banner.png'
import { ExternalLink } from 'react-external-link';
function ContentBanner() {
  return (
    <div className='ContentBanner'>
      <h1 className='name'>NIRMALA ACADEMY</h1>
      <h6 className='content'>Educational Consultant in Cherthala <br />
        Open today until 8:00 AM</h6>
        <ExternalLink  class="nav-link" href='https://www.facebook.com/nirmalaacademy' ><button type="button" id='Btn' class="btn btn-secondary">Make Appointment</button></ExternalLink>
      
      <br />
      <br />
      <br />
        <div className="banner">
          <img  src={Banner} alt="" id='img'/>
        </div>
    </div>
  )
}

export default ContentBanner