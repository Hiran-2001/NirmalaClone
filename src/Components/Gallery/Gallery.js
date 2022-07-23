import React from 'react'
import GalleryData from '.././Datas/GalleryData'
import GalleryDataHolder from './GalleryDataHolder'
import './Gallery.css'
function Gallery() {
    const gData = GalleryData
    return (
        <div className="gallery">
            <hr id='gallery-line' />
            <h6 id='gallery'>GALLERY</h6>
           <div id="gallery-container" className='card-deck' >

            {
                gData.map((images) => (
                    <GalleryDataHolder image={images.imageUrl} />
                ))
            }
           </div>
        </div>
    )
}

export default Gallery