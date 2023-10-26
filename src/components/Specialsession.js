import React, { useEffect } from "react";
import AOS from "aos";
export default function Specialsession() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <>
            <div>
                <div className="key my-3" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="animate-charcter">Special Session</h1>
                </div>

                <div className="container" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container">
                        <h2 style={{ color: "red" }}>Special Session on</h2>
                        <p className="dss">“Smart and Intelligent Computing (SIC)”</p>
                    </div>

                    <div className="container my-3">
                        <h2 style={{ color: "red" }}>Conveners:</h2>
                        <p className="dss">* Lambodar Jena, SOA University, India.</p>
                        <p className="dss">* Soumen Nayak, SOA University, India.</p>
                    </div>

                    <div className="container my-3">
                        <h2 style={{ color: "red" }}>Abstract:</h2>
                        <p className="dss">
                            The special session on “Smart and Intelligent Computing” invites
                            innovative research articles about recent technological advancements
                            in context to smart Internet of Things based applications along with
                            modern predictive intelligence driven concepts. Since population is
                            constantly rising at an alarming rate and the prevalent issues in
                            different sectors like healthcare, agriculture, etc. are getting
                            beyond human control. In each and every arena, researchers are
                            developing new technologies to get the optimal solution with
                            different roadmaps. In the current stage, smart and intelligent
                            computing based conceptual applications using different emerging
                            techniques can provide feasible solutions in solving the current and
                            upcoming complicated problems. This special session aims to address
                            these issues and invites good quality papers from researchers and
                            academicians with interest in smart and predictive techniques to
                            solve various existing problems in different sectors. The prime
                            focus is on the proposed theme and authors are encouraged to submit
                            research articles based on the application of smart and intelligent
                            computing in different sectors.
                        </p>
                    </div>

                    <div className="container my-3">
                        <h2 style={{ color: "red" }}>Recommended Topics:</h2>
                        <ul className="dss">
                            <li> Data Science and Big Data applications</li>
                            <li> Blockchain, Data Security and Privacy</li>
                            <li> Deep Learning and Artificial Intelligence based concepts</li>
                            <li> Cloud Computing models for smart applications</li>
                            <li> Autonomous Systems and Agents</li>
                            <li> Sensors, Networks and Devices</li>
                            <li> Predictive analytics in Software Engineering</li>
                            <li> Statistical Data Analytics</li>
                            <li> IoT devices and Edge computing</li>
                            <li> Computation and Simulation</li>
                            <li> Big data Analytics & Deep Learning in Computing System</li>
                            <li> Information & Network Security using Machine Learning</li>
                            <li>
                                {" "}
                                Applications of Machine Learning in Automations and robotics
                            </li>
                            <li> Application of Artificial Intelligence Pattern Recognition</li>
                            <li> Multimedia Analytics using Machine Learning</li>
                            <li> Intelligent Cloud based applications for Machine Learning</li>
                            <li> Smart Healthcare Automation using ML &DL</li>
                            <li> Industrial Automation and Robotics</li>
                            <li> Hybrid Applications of IoT</li>
                            <li> Wireless Sensor Networks & Adaptive Wireless Communication</li>
                            <li> Smart Farming and Precision Agriculture</li>
                            <li>
                                {" "}
                                Future Directions and Challenges in Smart and Intelligent
                                Computing
                            </li>
                        </ul>
                    </div>

                    <div className="container my-3">
                        <h2 style={{ color: "red" }}>Submissions:</h2>
                        <p className="dss">Paper Submission Deadline: 30th July, 2023</p>
                        <p className="dss">
                            All papers must be submitted through email to:
                            sic.mlrit2023@gmail.com
                        </p>
                        <p className="dss">
                            The subject of your paper submission mail must be “IEEE MLRIT 2023: SIC”
                        </p>
                        <p className="dss">
                            After submission of the paper, please fill-up the Google form given
                            below to be considered for the special session track “Smart and
                            Intelligent Computing(SIC)”.
                        </p>
                        <p className="dss">
                            <a href="#" target=" ">
                                Click Here ...
                            </a>
                        </p>
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
