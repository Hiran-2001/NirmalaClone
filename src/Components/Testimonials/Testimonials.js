import React from 'react'
import TestimonialReviews from './TestimonialReviews'
import './Testimonials.css'
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
                    <h6 className='write-review'>WRITE A REVIEW</h6>
                    <hr className='write-line' />
                </div>
                <div className='read-more-div'>
                    <h6 className='read-more'>READ MORE</h6>
                    <hr className='read-line' />
                </div>

            </div>
        </div>
    )
}

export default Testimonials