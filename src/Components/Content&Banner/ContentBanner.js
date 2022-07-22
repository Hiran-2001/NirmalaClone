import React from 'react'
import './Content-Banner.css'
import Banner from '../../images/banner.png'
function ContentBanner() {
  return (
    <div className='ContentBanner'>
      <h1 className='name'>NIRMALA ACADEMY</h1>
      <h6 className='content'>Educational Consultant in Cherthala <br />
        Opening at 8:00 AM</h6>
      <button type="button" id='Btn' class="btn btn-secondary">Make Appointment</button>
      <br />
      <br />
      <br />
        <div className="banner">
          <img src={Banner} alt="" />
        </div>
    </div>
  )
}

export default ContentBanner