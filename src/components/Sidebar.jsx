import React, { useEffect } from 'react'

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
        <div className="sidebar absolute overflow-hidden z-99">
            <div className="bg-white p-4 rounded-md flex flex-col align-center justify-center gap-5">
                <div className="flex text-para text-xl justify-between">
                    <span className='text-pop text-lg font-bold'>Get In Touch</span>
                    <button onClick={() => setSidebar(false)}>
                        <i className="fa-regular fa-rectangle-xmark"></i>

                    </button>
                </div>

                {/* Social Icons */}
                <div className='flex gap-5 my-2 align-center text-para'>
                    <a className='py-4 px-5 social rounded-sm ' href="https://www.facebook.com/ikram3031 " target="_blank">
                        <i className="h-6 fa-brands fa-facebook-f"></i>
                    </a>
                    <a target="_blank" className='py-4 px-5 social rounded-sm' href="https://www.linkedin.com/in/ikramul-hossen-545a43206/">
                        <i className="h-6 fa-brands fa-linkedin-in"></i>
                    </a>
                    <a target="_blank" className='py-4 px-5 social rounded-sm' href="https://api.whatsapp.com/send?phone=+8801784220265&text=Hi%20there!%20I%20have%20a%20question%20:)">

                        <i className="h-6 fa-brands fa-whatsapp"></i>
                    </a>

                    <a target="_blank" className='py-4 px-5 social rounded-sm' href="mailto: ikramul.web@gmail.com">

                        <i class="h-6 fa-solid fa-at"></i>
                    </a>
                </div>

                {/* Info */}
                <div className='text-para font-semibold text-os'>
                    Email:
                    <a className='text-blu' href="mailto: ikramul.web@gmail.com"> ikramul.web@gmail.com</a>
                </div>
                <div className='text-para font-semibold text-os'>
                    Phone:
                    <a className='text-blu' href="tel: +8801784220265"> +8801784220265</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar