import React, { useEffect } from 'react';
import AOS from 'aos'
export default function ProgramSchedule() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <>
            <div>
                <div className="key my-5" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='backk1'>Program Schedule</h1>
                    <br></br>
                    <h3 data-aos="fade-up">To be Updated Soon</h3>
                </div>
            </div>
        </>
    )
}

