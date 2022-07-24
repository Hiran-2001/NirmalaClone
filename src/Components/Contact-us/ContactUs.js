import React from 'react'
import { ExternalLink } from 'react-external-link';
import MapImg from '../../images/LocationImg.PNG'
import './ContactUs.css'
function ContactUs() {
   const call = ()=>{ alert('Open Pick an app ?')}
   
    return (
        <div className='contactUs-main-div'>
            <hr className='contact-us-line' />
            <h6 className='contact-us'>CONTACT US</h6>
            <div className="map-container">
                <ExternalLink id='getDic' class="nav-link" href='https://www.google.com/maps/place/NIRMALA+ACADEMY/data=!3m1!4b1!4m2!3m1!1s0x3b087dd8d75aadb5:0x8e3a32ecf31f022f' > <img src={MapImg} alt="" /> </ExternalLink>
            </div>

                        {/*academy details*/}

            <div className="academy-details">

                             {/*contact*/ }

                <div className="contact">
                    <h6 id='contact-written'>Contact</h6>
                    <button onClick={call} id='call-now-btn' type="button" class="btn btn-primary">CALL NOW</button>
                    <h6 id='number'>098452 87070</h6>
                </div>

                                     {/*Address*/ }

                <div className="address">
                    <h6 id='address'>Address</h6>
                    <ExternalLink id='booking' class="nav-link" href='https://www.google.com/maps/dir//NIRMALA+ACADEMY/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b087dd8d75aadb5:0x8e3a32ecf31f022f!2m2!1d76.29938349999999!2d9.65976' >  <button id='address-btn' type="button" class="btn btn-primary">GET DIRECTIONS</button></ExternalLink>
                   
                    <h6 id='academy-address'>Arthunkal Beach Road <br />
                        Cherthala, Kerala 688530 <br />
                        India</h6>

                </div>

                                     {/*booking*/ }

                <div className="booking-hours-div">
                    <h6 id='booking-hours'>Business Hours</h6>
                    <ul>
                        <li>Mon: 8:00 AM – 8:00 PM</li>
                        <li>Tue: 8:00 AM – 8:00 PM</li>
                        <li>Wed: 8:00 AM – 8:00 PM</li>
                        <li>Thu: 8:00 AM – 8:00 PM</li>
                        <li>Fri: 8:00 AM – 8:00 PM</li>
                        <li>Sat: 8:00 AM – 8:00 PM</li>
                        <li>Sun: Closed</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default ContactUs