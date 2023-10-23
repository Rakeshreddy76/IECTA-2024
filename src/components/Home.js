import React, { useEffect } from 'react';
import AOS from 'aos'
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        <div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="image">
                <img
                  src="./tech5.jpg"
                  className="d-block w-100"
                  alt="xxx"
                  height="385"

                />
                <div className="bottom-left">
                  <div className="boxx">
                    <h2>2<em>nd</em></h2>
                    <h4>International Conference on Advancements in smart, secure</h4>
                    <h4>And intelligent Computing</h4>
                    <h4>At MLRIT Campus, Dundigal</h4>
                    <h4>(27th - 29th January, 2024)</h4>
                  </div>

                </div>
              </div>
            </div>
            <div className="header-content carousel-caption show call-mb" style={{ left: '35%', marginTop: '-30px' }}>
              <a href="#" target=" " style={{ float: "right" }}>
                <input
                  style={{
                    backgroundColor: 'white',
                    border: 'none',
                    color: 'black',
                    padding: '15px 30px',
                    textDecoration: 'none',
                    margin: '4px 2px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '20px'

                  }}
                  type="submit"
                  value="Submit Paper"
                />
              </a>
            </div>
          </div>
          <div className="container">
            <div className="container-fluid mb-top">
              <div className="row mb-set">
                <div className="col-sm-4 response" style={{ marginTop: '12px' }}>
                  <center>
                    <img
                      className="imgset"
                      src="./2IEEE-OA-site-560x420-1.jpg"
                      width="100%"
                      height="230px;"
                    />
                  </center>
                </div>
                <div className="col-sm-4" style={{ marginTop: '50px' }}>
                  <center>
                    <img className="imgset" src="./bigger1again.png" width="100%" />
                  </center>
                </div>
                <div className="col-sm-4" style={{ marginTop: '50px' }}>
                  <center>
                    <h4 style={{ fontStyle: 'italic', color:"blue" }}><b>Hosted By</b></h4>
                    <img className="imgset" data-aos="flip-left" src="./mlr.jpeg" width="350px" height="100px" />
                  </center>
                </div>
              </div>
            </div>
          </div>
          <footer className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ textAlign: 'center', paddingBottom: '20px', paddingTop: '5px' }}>
              <p style={{ marginBottom: '0px', color: '#969595', fontSize: '12px' }}>
                2024 International Conference on Advance Smart, Secure and Intelligent Computing | Designed by:
                <b>Rakesh Reddy</b>
                | © Copyright All right reserved
              </p>
              <a href="">
                <i className="fa fa-facebook-square" aria-hidden="true" style={{ color: 'blue', fontSize: '30px', marginTop: '16px' }}></i>
              </a>
              <a href="">
                <i className="fa fa-twitter-square" aria-hidden="true" style={{ color: 'blue', fontSize: '30px', marginTop: '16px' }}></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}