import React from 'react'
import CrashCourse from '../../images/crashcourse.jpg'
import Admission from '../../images/admissionstarted.jpg'
import Nursing from '../../images/Nursing.jpg'
import NirmalaAcVideo from '../../images/nirmalaacd-video.mp4'
import NirmalaVideo from '../../images/nirmalaVideo.jpg'

import './Updates.css'
function Updates() {
  return (
    <div className='updatesdiv'>
      <div id='updateSection' >

        <hr className='line' />
        <h6 className='update'>UPDATES</h6>

      </div>


      <div id='sections' className="col-sm-4  d-flex pb-3">


        <div className="sectioncontainer">

          {/* CrashCourse */}

          <div className="crashcourse">
            <img className='updateimg' src={CrashCourse} alt="" />

            <h6 className="title">8 DAYS CRASH COURSE WITH 100% <br />
              RESULT GUARANTEED</h6>
            <h6 className="crashcoursedate">Aug 21, 2019 – Aug 28, 2019</h6>
          </div>

          {/* Admission */}

          <div className="admission">
            <img className='updateimg' src={Admission} alt="" />
            <h6 className="date">Posted on Aug 9, 2019</h6>
            <h6 className="admissiontitle">OET ADMISSION STARTED  </h6>
            <h6 id='book'>BOOK</h6>
            <hr id='bookhr' />
          </div>

          {/* Call */}

          <div className="callnow">
            <img className='updateimg' src={NirmalaVideo} alt="" />
            {/*} <video className='updateimg'  width="750" height="500" controls >
              <source src={NirmalaAcVideo} type="video/mp4" />
            </video>*/}
            <h6 className="date">Posted on Apr 13, 2019</h6>
            <p className="calltitle">“By recording your dreams and goals on <br />
             paper, you set in motion the process of <br /> 
             becoming the person you most want to be. <br />
              Put your future in good hands—your own.”</p>
              <h6 className='call'>CALL NOW</h6>
            <hr id='callhr' />
          </div>


          {/* NursingCourse */}
          <br />
          <br />

          <div className="nursingcourse">
            <img className='updateimg' src={Nursing} alt="" />
            <h6 className="nursecoursetitle">Nursing Crash Course at Rs.4999/-
            <br /> Offer valid until May </h6>
            <h6 className="nursecoursedate">Apr 13, 2019 – May 31, 2019</h6>
            <h6 className='nursecoursedetail'>Grand opening offers.!!</h6>
            <h6 className='nursecoursedetail'>Show this code at the store:</h6>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Updates