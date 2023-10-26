import React, { useEffect } from "react";
import AOS from "aos";
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
                    <h2>
                      2<em>nd</em>
                    </h2>
                    <h4>
                      International Conference on Advancements in smart, secure
                    </h4>
                    <h4>And intelligent Computing</h4>
                    <h4>At MLRIT Campus, Dundigal</h4>
                    <h4>(27th - 29th January, 2024)</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="header-content carousel-caption show call-mb"
              style={{ left: "35%", marginTop: "-30px" }}
            >
              {/* <a href="/#" target=" " style={{ float: "right" }}>
                <input
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                    padding: "15px 30px",
                    textDecoration: "none",
                    margin: "4px 2px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "20px",
                  }}
                  type="submit"
                  value="Submit Paper"
                />
              </a> */}
              <a
                className="underlined-text"
                href="/#"
                target=" "
                style={{ float: "right" }}
              >
                <input
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                    padding: "15px 30px",
                    textDecoration: "none",
                    margin: "4px 2px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "20px",
                    width: "200px",
                  }}
                  type="submit"
                  value="Submit Paper"
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = "none";
                  }}
                />
              </a>
            </div>
          </div>
          <div className="container">
            <div className="container-fluid mb-top">
              <div className="row mb-set">
                <div
                  className="col-sm-4 response"
                  style={{ marginTop: "12px" }}
                >
                  <center>
                    <img
                      className="imgset"
                      src="./sdd.jpg"
                      width="100%"
                      height="230px;"
                      alt="rdd"
                    />
                  </center>
                </div>
                <div className="col-sm-4" style={{ marginTop: "50px" }}>
                  <center>
                    <img
                      className="imgset"
                      src="./bigger1again.png"
                      width="100%"
                      alt="tgg"
                    />
                  </center>
                </div>
                <div className="col-sm-4" style={{ marginTop: "50px" }}>
                  <center>
                    <h4 style={{ fontStyle: "italic", color: "blue" }}>
                      <b>Hosted By</b>
                    </h4>
                    <img
                      className="imgset"
                      data-aos="flip-left"
                      src="./mlr.jpeg"
                      width="350px"
                      height="100px"
                      alt="bn"
                    />
                  </center>
                </div>
                <div className="container">
                  <div className="sdd my-4">
                    <a
                      className="underlined-text"
                      href="https://ieeexplore.ieee.org/xpl/conhome/10088285/proceeding"
                      target="__blank"
                      style={{ float: "left" }}
                    >
                      <input
                        style={{
                          backgroundColor: "orange",
                          border: "none",
                          color: "black",
                          padding: "15px 30px",
                          textDecoration: "none",
                          margin: "4px 2px",
                          borderRadius: "25px",
                          cursor: "pointer",
                          fontWeight: 700,
                          fontSize: "20px",
                          width: "500px",
                        }}
                        type="proceedings"
                        value="Proceedings of (IEEE MLR 2023) Available Here"
                        onMouseEnter={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      />
                    </a>

                    <a
                      className="underlined-text"
                      href="/#"
                      target="__blank"
                      style={{ float: "right" }}
                    >
                      <input
                        style={{
                          backgroundColor: "orangered",
                          border: "none",
                          color: "black",
                          padding: "15px 30px",
                          textDecoration: "none",
                          margin: "4px 2px",
                          borderRadius: "25px",
                          cursor: "pointer",
                          fontWeight: 700,
                          fontSize: "20px",
                          width: "200px",
                        }}
                        type="callforpapers"
                        value="Call For Papers"
                        onMouseEnter={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="container my-4">
              <div className="maps_section">
                <div className="container">
                  <h1 className="text-uppercase text-center mb-4">Our Location</h1>
                </div>
                <div>
                  <iframe
                    id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="100%"
                    height="450px"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1744261147683!2d78.43861427492355!3d17.59445019680756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b8eae5cd739%3A0x2aa927e931d97eee!2sMLR%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1698081164126!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <footer className="container">
            <p className="float-end" >
              <a href="#">&#10148;Back to top</a>
            </p>
            <p className="dss">
              © 2020–2024 Rakesh sols, Inc. · <a href="#">Privacy</a> ·{" "}
              <a href="#">Terms</a>
            </p>
          </footer>
          <footer className="container">
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              style={{
                textAlign: "center",
                paddingBottom: "20px",
                paddingTop: "5px",
              }}
            >
              <p
                style={{
                  marginBottom: "0px",
                  color: "#969595",
                  fontSize: "12px",
                }}
              >
                2024 International Conference on Advance Smart, Secure and
                Intelligent Computing | Designed by:
                <b>Rakesh Reddy</b>| © Copyright All right reserved
              </p>
              <a href="/#">
                <i
                  className="fa fa-facebook-square"
                  aria-hidden="true"
                  style={{ color: "blue", fontSize: "30px", marginTop: "16px" }}
                ></i>
              </a>
              <a href="/#" rel="noreferrerr">
                <i
                  className="fa fa-twitter-square"
                  aria-hidden="true"
                  style={{ color: "blue", fontSize: "30px", marginTop: "16px" }}
                ></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
