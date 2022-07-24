import React from 'react'
import TestimonialReviews from './TestimonialReviews'
import './Testimonials.css'
import { ExternalLink } from 'react-external-link';
import reviewData from '../Datas/TestimonialsData';
function Testimonials() {
    const data = reviewData;
    return (
        <div className='testimonialsdiv'>
            <div className='testimonialsHeading'>
                <hr className='Testimonials-line' />
                <h6 className='testimonials'>TESTIMONIALS</h6>
            </div>

            <div id='review-container' className='card-deck' >
                {
                    data.map((reviews) => (

                        <TestimonialReviews star={reviews.star} time={reviews.time} review={reviews.review} by={reviews.by} />
                    ))
                }
            </div>
            <div className="review-more">

                <div className='write-review-div'>
                <ExternalLink id='booking' class="nav-link" href='https://www.google.com/search?hl=en-IN&gl=in&q=NIRMALA+ACADEMY,+Arthunkal+Beach+Rd,+Cherthala,+Kerala+688530&ludocid=10248559895307551279&lsig=AB86z5Ws311owxQqTXlBLgeyzaTL#lrd=0x3b087dd8d75aadb5:0x8e3a32ecf31f022f,3' > <h6 className='write-review'>WRITE A REVIEW</h6></ExternalLink>
                    
                    <hr className='write-line' />
                </div>
                <div className='read-more-div'>
                <ExternalLink id='booking' class="nav-link" href='https://www.google.com/search?hl=en-IN&gl=in&q=NIRMALA+ACADEMY,+Arthunkal+Beach+Rd,+Cherthala,+Kerala+688530&ludocid=10248559895307551279&lsig=AB86z5Ws311owxQqTXlBLgeyzaTL#lrd=0x3b087dd8d75aadb5:0x8e3a32ecf31f022f,1' >  <h6 className='read-more'>READ MORE</h6></ExternalLink>
                    <hr className='read-line' />
                </div>

            </div>
        </div>
    )
}

export default Testimonials