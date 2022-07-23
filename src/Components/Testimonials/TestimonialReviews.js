import React from 'react'
import { FaStar } from 'react-icons/fa'
import './Testimonials.css'
function TestimonialReviews(reviewdata) {
    return (
        <div id='review-container' className="col-sm-4 d-flex " >


            <div id="reviewscard" >

                <div id='star'>
                    {[...Array(reviewdata.star)].map((stars) => {
                        return <FaStar id='star-icon' />
                    })


                    }
                </div>
                <div id='time' class="p-3">{reviewdata.time}</div>
                <div id='rev-by' class="d-flex flex-column mb-3">
                    <div id='reviews' >{reviewdata.review}</div>
                    <div id='by'>{reviewdata.by}</div>
                </div>
            </div>
           
        </div>


        //<div class="col-sm-3 d-flex pb-3 ">
        //<div className="card text-center " style={{ width: "18rem" }}>

        // <div className="card-body">
        //<h5 className="card-title">gfdgd</h5>
        // <p className="card-text">afsdf</p>


        //</div>
        //</div>
        // </div>

    )
}
export default TestimonialReviews