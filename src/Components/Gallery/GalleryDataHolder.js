import React from 'react'
import './Gallery.css'
function GalleryDataHolder(getImage) {
  return (
    <div id='gallery-container' className="col-md-4 d-flex " >
        <div id="gallerycard" >
            <img id='gallery-img' src={getImage.image} alt="" />
        </div>
    </div>
  )
}

export default GalleryDataHolder