import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpg'
import gallery_3 from '../../assets/gallery-3.jpg'
import gallery_4 from '../../assets/gallery-4.jpg'
import gallery_5 from '../../assets/gallery-5.jpg'
import gallery_6 from '../../assets/gallery-6.jpg'
import gallery_7 from '../../assets/gallery-7.jpg'
import gallery_8 from '../../assets/gallery-8.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="Campus Image" />
            <img src={gallery_2} alt="Campus Image" />
            <img src={gallery_3} alt="Campus Image" />
            <img src={gallery_4} alt="Campus Image" />
        </div>
        <div className="gallery">
            <img src={gallery_5} alt="Campus Image" />
            <img src={gallery_6} alt="Campus Image" />
            <img src={gallery_7} alt="Campus Image" />
            <img src={gallery_8} alt="Campus Image" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="More Icon" /></button>
    </div>
  )
}

export default Campus