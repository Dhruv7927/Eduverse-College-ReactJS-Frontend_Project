import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {

    const slider = useRef();
    const end = useRef();
    const start = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        if(tx == -50){
            end.current.style.opacity = '0';
        }else{
            end.current.style.opacity = '1';
        }
        if(tx != 0){
            start.current.style.opacity = '1';
        }
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        if(tx == 0){
            start.current.style.opacity = '0';
        }else{
            start.current.style.opacity = '1';
        }
        if(tx != -50){
            end.current.style.opacity = '1';
        }
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} ref={end} className='next-btn' onClick={slideForward} alt="Next or Back Button Image" />
        <img src={back_icon} ref={start} className='back-btn' onClick={slideBackward}  alt="Next or Back Button Image" />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Om Gadhiya</h3>
                                <span>Eduverse, Una</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I'vs ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Vishal Singh</h3>
                                <span>Eduverse, Una</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I'vs ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Lalit Patil</h3>
                                <span>Eduverse, Una</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I'vs ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Aaryan Singh</h3>
                                <span>Eduverse, Una</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I'vs ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials