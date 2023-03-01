import React from 'react'
import Pagetitle from '../components/Pagetitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import './pages.scss'


const Contact = () => {
  return (
    <div>
      <Pagetitle title="CONTACT" />

      {/* Main Contact Section */}
      <div className='bg '>
        <div className='contact_main'>
          <div className="contact_container">

            {/* Info */}
            <div className="contact_left">

              {/* SIngle Info 1 */}
              <div className="single_info inner">
                <div className='single_icon'>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div className="single_details">
                  <h4>
                    +8801784220265
                  </h4>
                  <span>
                    For any inquiries, please do not hesitate to call me.
                  </span>
                </div>
              </div>

              {/* SIngle Info 2 */}
              <div className="single_info inner">
                <div className="single_icon">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="single_details">
                  <h4>
                    Dhaka, Bangladesh
                  </h4>
                  <span >
                    116/F, North Mugdapara, Dhaka-1214
                  </span>
                </div>
              </div>

              {/* SIngle Info 3 */}
              <div className="single_info inner">
                <div className="single_icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="single_details">
                  <h4>
                    ikramul.web@gmail.com
                  </h4>
                  <span>
                    Interested in collaborating on your upcoming projects?
                  </span>
                </div>
              </div>

            </div>

            {/* Form */}
            <div className="contact_right">
              <form>

                <h4 >
                  How Can I Help You?
                  <div className='underline3'></div>
                </h4>

                <div className="form_area">

                  {/* Inputs */}
                  <div className='form_inputs'>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder='Name'
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder='Email'
                    />
                    <input
                      type="text"
                      id="Subject"
                      name="subject"
                      placeholder='Subject'
                    />
                  </div>

                  {/* Textarea */}
                  <div className='form_text'>
                    <textarea
                      id="message"
                      name="message"
                      placeholder='Message'
                    />
                  </div>


                </div>

                {/* Submit */}

                <button
                  type="submit"
                >Send Message
                </button>

              </form>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Contact