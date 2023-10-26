import React, { useEffect } from "react";
import AOS from "aos";
export default function CallforPapers() {
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
          <h1 className="animate-charcter">Call for Papers</h1>
        </div>

        <div
          className="container my-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row">
            <div className="col">
              <p className="dss"><b>IEEE MLRIT 2023</b> technical tracks span original research in
                the field of smart enabled systems, secure computing and
                intelligent technologies for applications in all fields of science
                and technology.</p>
              <p className="mxx my-4">
                &#10148; Full paper submission : October 15 , 2023
              </p>
              <p className="mxx my-4">
                &#10148; Notification Of Acceptance/Rejectance : October 30,
                2023
              </p>
              <p className="mxx my-4">
                &#10148; Camera Ready Paper Submission : November 20, 2023
              </p>
            </div>
            <div className="col">
              <h4 className="ribbon-highlight">*BEST PAPER FROM EACH TRACK WILL BE AWARDED **</h4>
            </div>

            <div
              className="container my-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="row">
                <div className="col">
                  <h2 className="com1" style={{ color: "red" }}>
                    TRACK I:
                  </h2>
                  <h5 style={{ color: "red" }}>
                    <i>AI Enabled Computing</i>
                  </h5>
                  <ul className="key1">
                    <li> Artificial Immune Systems.</li>
                    <li> Agent based modeling and fuzzy logic.</li>
                    <li>
                      {" "}
                      Nature driven models and paradigms in computer vision.
                    </li>
                    <li> Bioinformatics models and machine vision.</li>
                    <li>
                      {" "}
                      Bio-inspired Fuzzy Clustering, Image Classification.
                    </li>
                    <li> Biologically inspired imaging and sensing.</li>
                    <li> Cellular and Molecular Automata.</li>
                    <li> Cognitive learning with big data.</li>
                    <li> Computational Neuroscience.</li>
                    <li> Evolutionary Computing and Genetic Algorithms.</li>
                    <li> Biometric recognition systems.</li>
                    <li> Human Computer Interaction.</li>
                    <li> Machine Learning and Decision Science.</li>
                    <li>
                      {" "}
                      Neuro-Fuzzy technology for bioengineering application.
                    </li>
                    <li> Biologically inspired image processing.</li>
                    <li> Visual-based interactive robotics.</li>
                    <li> Bio-Inspired Artificial Intelligence.</li>
                    <li> Bio-Inspired Data Analytics.</li>
                    <li> Bio-inspired cluster analysis.</li>
                  </ul>
                </div>
                <div className="col">
                  <h2 className="com1" style={{ color: "red" }}>
                    TRACK II:
                  </h2>
                  <h5 style={{ color: "red" }}>
                    <i>AI Enabled Smart Healthcare</i>
                  </h5>
                  <ul className="key1">
                    <li> Assistive Technologies, Home Monitoring</li>
                    <li> eHealth Applications</li>
                    <li> Electronic Health Records and Standards</li>
                    <li> Evaluation and Use of Healthcare IT</li>
                    <li> Healthcare Management Systems</li>
                    <li> ICT, Ageing and Disability</li>
                    <li>
                      {" "}
                      Application of Health Informatics in Clinical Cases
                    </li>
                    <li> Medical Informatics</li>
                    <li> Mobile Technologies for Healthcare Applications</li>
                    <li> Pervasive Health Systems and Services</li>
                    <li> Physiological and Behavioral Modeling</li>
                    <li> Software Systems in Medicine</li>
                    <li>
                      {" "}
                      Therapeutic Systems and Rehabilitation Technologies
                    </li>
                    <li> Cognitive Informatics</li>
                    <li> Telemedicine</li>
                    <li> Medical robots</li>
                    <li> Wearable Health Informatics</li>
                    <li> Big Data in Healthcare</li>
                    <li> Wellbeing Informatics</li>
                    <li> Bio-inspired Robotics</li>
                  </ul>
                </div>

                <div className="col">
                  <h2 className="com1" style={{ color: "red" }}>
                    TRACK III:
                  </h2>
                  <h5 style={{ color: "red" }}>
                    <i>Intelligent Data Analysis and Secure Computing</i>
                  </h5>
                  <ul className="key1">
                    <li> Security in new paradigms of intelligent data</li>
                    <li> Cyber hacking and Cyber monitoring</li>
                    <li> Digital forensics in intelligent data</li>
                    <li> Big data security and Database security</li>
                    <li> Intelligent data mining in security</li>
                    <li> Social engineering, advance spear phishing</li>
                    <li> Cloud-based intelligent data and security issues</li>
                    <li> Tele-health security in intelligent data.</li>
                    <li> Sensor network security and solutions</li>
                    <li> Quality of Service (QoS) improvements techniques</li>
                    <li> Vulnerabilities on smart contract</li>
                    <li> Internet of Things and cyber-physical systems</li>
                    <li>
                      {" "}
                      Security and Privacy aspects of Blockchain for Information
                      Systems
                    </li>
                    <li>
                      {" "}
                      Blockchain-based security applications and challenges
                    </li>
                    <li> Access Control in Wireless Robotics</li>
                    <li> Bio-inspired Privacy preserving</li>
                    <li>
                      {" "}
                      Bio-inspired algorithms for secure parallel processing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="container">
          <p className="float-end" >
            <a href="#">Back to top</a>
          </p>
          <p className="dss">
            © 2020–2024 Rakesh sols, Inc. · <a href="#">Privacy</a> ·{" "}
            <a href="#">Terms</a>
          </p>
        </footer>
      </div>
    </>
  );
}
