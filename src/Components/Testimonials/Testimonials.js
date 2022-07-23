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

            <div id='review-container' class="col-md-4 d-flex pb-3 ">
                {
                    data.map((reviews) => (

                        <TestimonialReviews star={reviews.star} time={reviews.time} review={reviews.review} by={reviews.by} />
                    ))
                }
            </div>

        </div>
    )
}

export default Testimonials