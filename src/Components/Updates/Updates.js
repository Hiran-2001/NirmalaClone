import React from 'react'
import CrashCourse from '../../images/crashcourse.jpg'
import Admission from '../../images/admissionstarted.jpg'
import Nursing from '../../images/Nursing.jpg'
import NirmalaAcVidoe from '../../images/nirmalaacd-video.mp4'
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
            <h5 className="date">Aug 21, 2019 – Aug 28, 2019</h5>
          </div>

          {/* Admission */}

          <div className="admission">
            <img className='updateimg' src={CrashCourse} alt="" />
            <h6 className="title">8 DAYS CRASH COURSE WITH 100% <br />
              RESULT GUARANTEED</h6>
            <h5 className="date">Aug 21, 2019 – Aug 28, 2019</h5>
          </div>

          {/* Call */}

          <div className="callnow">
            <img className='updateimg' src={CrashCourse} alt="" />
            <h6 className="title">8 DAYS CRASH COURSE WITH 100% <br />
              RESULT GUARANTEED</h6>
            <h5 className="date">Aug 21, 2019 – Aug 28, 2019</h5>
          </div>


          {/* NursingCourse */}
          <br />
          <br />

          <div className="nursingcourse">
            <img className='updateimg' src={CrashCourse} alt="" />
            <h6 className="title">8 DAYS CRASH COURSE WITH 100% <br />
              RESULT GUARANTEED</h6>
            <h5 className="date">Aug 21, 2019 – Aug 28, 2019</h5>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Updates