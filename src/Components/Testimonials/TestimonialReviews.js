import React from 'react'
import { FaStar } from 'react-icons/fa'
import './Testimonials.css'
function TestimonialReviews(reviewdata) {
    return (
        <div id='review-container' class="col-sm-4 d-flex pb-3 " >


            <div id="reviewscard" className="card text-center" >

                <div id='star'>
                    {[...Array(reviewdata.star)].map((stars) => {
                        return <FaStar id='star-icon' />
                    })


                    }
                </div>
                <div id='time' class="p-3">{reviewdata.time}</div>
                <div class="d-flex flex-column mb-3">
                    <div id='reviews' class="p-2">{reviewdata.review}</div>
                    <div class="p-2">{reviewdata.by}</div>
                </div>
            </div>
        </div>
    )
}
export default TestimonialReviews