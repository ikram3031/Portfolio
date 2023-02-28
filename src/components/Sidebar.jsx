import React, { useEffect } from 'react';
import './components.scss'

const Sidebar = ({ setSidebar = () => { } }) => {

    // If click outside the sidebar
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const sidebar = document.querySelector('.sidebar');
            if (!sidebar.contains(event.target)) {
                setSidebar(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setSidebar]);

    return (

        <div className="sidebar">
            <div className="sidebar_container">

                <div className="sidebar_main">

                    {/* Top */}
                    <div className="sidebar_top">
                        <span className='text-pop text-lg font-bold'>Get In Touch</span>
                        <button onClick={() => setSidebar(false)}>
                            <i className="fa-regular fa-rectangle-xmark"></i>
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className='sidebar_social'>
                        <a className='  social ' href="https://www.facebook.com/ikram3031 " target="_blank">
                            <i className="h-6 fa-brands fa-facebook-f"></i>
                        </a>
                        <a target="_blank" className='social' href="https://www.linkedin.com/in/ikramul-hossen-545a43206/">
                            <i className="h-6 fa-brands fa-linkedin-in"></i>
                        </a>
                        <a target="_blank" className='social' href="https://api.whatsapp.com/send?phone=+8801784220265&text=Hi%20there!%20I%20have%20a%20question%20:)">

                            <i className="h-6 fa-brands fa-whatsapp"></i>
                        </a>

                        <a target="_blank" className='social' href="mailto:ikramul.web@gmail.com">

                            <i class="h-6 fa-solid fa-at"></i>
                        </a>
                    </div>

                    {/* Info */}
                    <div className='sidebar_info'>
                        Email:
                        <a href="mailto:ikramul.web@gmail.com"> ikramul.web@gmail.com</a>
                    </div>
                    <div className='sidebar_info'>
                        Phone:
                        <a  href="tel: +8801784220265"> +8801784220265</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar