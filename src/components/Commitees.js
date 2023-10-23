import React, { useEffect } from 'react';
import AOS from 'aos'
export default function Commitees() {
    // const gradientStyle = {
    //     height: '32px',
    //     width: '280px',
    //     backgroundImage: 'linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1))',
    //   };
    //   const gradientStyle1 = {
    //     height: '32px',
    //     width: '640px',
    //     backgroundImage: 'linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1))',
    //   };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <>
            <div>
                <div className="container my-5" data-aos="fade-up" data-aos-duration="1000">
                    <div className="row">
                        <div className="col">
                            <h2 className='com1'>Chief Patron</h2>
                            <p className="coll my-3" ><h6><b>&#10148; Achyuta Samanta, KIIT & KISS, India.</b></h6></p>
                        </div>
                        <div className="col">
                            <h2 className='com1'>Patron</h2>
                            <p className="coll my-3" ><h6><b>&#10148; Sasmita Samanta , KIIT, India.</b></h6></p>
                        </div>
                    </div>
                </div>
                <div className="container my-5" data-aos="fade-up" data-aos-duration="2000">
                    <div className="row">
                        <div className="col">
                            <h2 className='com1'>General Chair</h2>
                            <p className="coll my-3" ><h6><b>&#10148; Khaled Shaalan ,The British University in Dubai, UAE.</b></h6></p>
                            <p className="coll my-3" ><h6><b>&#10148; Adam Slowik , Koszalin University of Technology, Poland.</b></h6></p>
                            <p className="coll my-3" ><h6><b>&#10148; Jnyana Ranjan Mahanty , KIIT, India.</b></h6></p>
                        </div>
                        <div className="col">
                            <h2 className='com1'>Program Chairs</h2>
                            <p className="coll my-3" ><h6><b>&#10148; Tarek Gaber , University of Salford, UK.</b></h6></p>
                            <p className="coll my-3" ><h6><b>&#10148; Zaineb Dagdia , Paris Saclay University, France.</b></h6></p>
                            <p className="coll my-3" ><h6><b>&#10148; Hrudaya Kumar Tripathy, KIIT, India.</b></h6></p>
                            <p className="coll my-3" ><h6><b>&#10148; Prabha Sundaravidel , University of Texas at Tyler, Tyler, Texas.</b></h6></p>
                            <p className="coll my-3" ><h6><b>&#10148; Sambit Mishra , SRM , AP , India.</b></h6></p>
                        </div>
                    </div>
                </div>
                <div className="container my-5" data-aos="fade-up" data-aos-duration="2200">
                    <div className="row">
                        <div className="col">
                            <h2 className='com1'>Organizing Chairs</h2>
                            <p className="coll my-3" data-aos="fade-up" data-aos-duration="2200"><h6><b>&#10148; Sushruta Mishra , KIIT, India</b></h6></p>
                            <p ><h6><b>&#10148; Kshira Sagar Sahoo, Umea university, Sweden</b></h6></p>
                        </div>
                        <div className="col">
                            <h2 className='com1'>Technical Program Committee Chairs</h2>
                            <p className="coll my-3" data-aos="fade-up" data-aos-duration="2200"><h6><b>&#10148; Selvakumar Samuel , Asia Pacific University of Technology & Innovation (APU),     Kuala Lumpur, Malaysia.</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Bhabani Sankar Prasad Mishra, KIIT, India.</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Mohamed Meselhy Eltoukhy , University of Jeddah, Jeddah , Saudi Arabia.</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Pravakar Garnayak , Microsoft, Greater Seattle Area , USA.</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Anuja Kumar Acharya , KIIT, India.</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Abhishek Hazra, National University of Singapore, Singapore.</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Lipika Mohanty, KIIT, India.</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Sambit Mishra , SRM , AP , India</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Sibanjan Das, ServiceNow, India.</b></h6></p>
                            <p data-aos="fade-up" ><h6><b>&#10148; Dayal Kumar Behera, KIIT, India.</b></h6></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
