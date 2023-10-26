
import React, { useEffect } from "react";
import AOS from "aos";
export default function Registration() {
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
                    <h1 className="animate-charcter">Registration</h1>
                </div>
                <div className="container">
                    <h1 className="dsx" style={{ float: "right" }}>For Registration Specific Queries Contact : </h1><br />
                    {/* <h1 className="dsx" style={{ float: "right" }}>Mobile No : xxxxxxxxxx</h1> */}
                </div>
                <div className="container my-5">
                    <p style={{ float: "right" }}> </p>
                </div>

                <div className="container my-5"
                    data-aos="fade-up"
                    data-aos-duration="1000">
                    <div class="col-lg-129 col-12">
                        <div class="container my-6">
                            <div class="table-responsive">
                                <center><h4 className="xs"><b></b>Indian Delegates (INR)</h4></center><table class="table table-hover table-bordered">
                                    <colgroup><col />
                                    </colgroup><colgroup span="2"></colgroup>
                                    <colgroup span="2"></colgroup>
                                    <tbody className="ss"><tr >
                                        <td rowspan="3" class="mdl1" ><b>Category</b></td>
                                        <th colspan="4" scope="colgroup" class="mdl">Online Participation</th>
                                        <th colspan="4" scope="colgroup" class="mdl">Offline Participation</th>
                                    </tr>
                                        <tr>
                                            <th colspan="2" scope="colgroup" class="mdl">Academic/Professionals</th>
                                            <th colspan="2" scope="colgroup" class="mdl">Students</th>
                                            <th colspan="2" scope="colgroup" class="mdl">Academic/Professionals</th>
                                            <th colspan="2" scope="colgroup" class="mdl">Students</th>
                                        </tr>
                                        <tr>
                                            <th scope="col" class="mdl">IEEE</th>
                                            <th scope="col" class="mdl">Non-IEEE</th>
                                            <th scope="col" class="mdl">IEEE</th>
                                            <th scope="col" class="mdl">Non-IEEE</th>
                                            <th scope="col" class="mdl">IEEE</th>
                                            <th scope="col" class="mdl">Non-IEEE</th>
                                            <th scope="col" class="mdl">IEEE</th>
                                            <th scope="col" class="mdl">Non-IEEE</th>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ss">Author</th>
                                            <td class="mdl">7000</td>
                                            <td class="mdl">7500</td>
                                            <td class="mdl">6500</td>
                                            <td class="mdl">7000</td>
                                            <td class="mdl">8500</td>
                                            <td class="mdl">9000</td>
                                            <td class="mdl">8000</td>
                                            <td class="mdl">8500</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ss">CoAuthor/<br />participant</th>
                                            <td class="mdl">1500</td>
                                            <td class="mdl">1500</td>
                                            <td class="mdl">1500</td>
                                            <td class="mdl">1500</td>
                                            <td class="mdl">2000</td>
                                            <td class="mdl">2000</td>
                                            <td class="mdl">2000</td>
                                            <td class="mdl">2000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ss">Industry Persons</th>
                                            <th colspan="8" scope="colgroup" >9500</th>
                                        </tr>
                                        <tr>
                                            <th colspan="9" scope="colgroup" className="xp" style={{ color: 'crimson' }}>Foreign Delegates (US $)</th>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ss">Author</th>
                                            <td class="mdl">120</td>
                                            <td class="mdl">150</td>
                                            <td class="mdl">110</td>
                                            <td class="mdl">130</td>
                                            <td class="mdl">150</td>
                                            <td class="mdl">180</td>
                                            <td class="mdl">140</td>
                                            <td class="mdl">160</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ss">CoAuthor/<br />participant</th>
                                            <td class="mdl">50</td>
                                            <td class="mdl">50</td>
                                            <td class="mdl">50</td>
                                            <td class="mdl">50</td>
                                            <td class="mdl">80</td>
                                            <td class="mdl">80</td>
                                            <td class="mdl">80</td>
                                            <td class="mdl">80</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ss">Industry Persons</th>
                                            <th colspan="8" scope="colgroup" >200</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <h3 style={{ color: 'rgb(29, 38, 132)' }}>Offline Registration Fee Includes:</h3>
                        <ul className="dss">
                            <li>Conference Participation in the technical event</li>
                            <li>IEEE MLRIT Badge</li>
                            <li>Coffee breaks</li>
                            <li>Conference Kit</li>
                            <li>Breakfast and Lunch</li>
                        </ul>
                    </div>
                    <div className="container">
                        <h3 style={{ color: 'rgb(29, 38, 132)' }}>Important Note</h3>
                        <ul className="dss">
                            <li>Each accepted paper needs to be registered by at least one of its authors and the paper must be presented during the conference, to be considered for Submission in IEEE Xplore.</li>
                            <li>All registration fees specified are excluding bank charges.</li>
                            <li>If any author has multiple papers accepted then he/she has to register for each paper.</li>
                            <li>Authors permanently residing (working) in India can only make payment in Indian Rupees.</li>
                            <li>All other authors including Indians currently residing or working in other countries should make payment in USD.</li>
                            <li>This fee is transferable to another author in case there is a change in the presenting author.</li>
                            <li>Registration fees do not include accommodation and travel expenses.</li>
                        </ul>
                    </div>
                    <div className="container">
                        <h1 style={{ color: 'rgb(69, 80, 204)' }}>_______________________________________________________________________________</h1>
                    </div>
                    <div className="container">
                        <div className="dss">
                            <h5 style={{ color: 'blue' }}>Bank Name -</h5>
                            <h5 style={{ color: 'blue' }}>Name Of Account (As Per Bank Record) -</h5>
                            <h5 style={{ color: 'blue' }}>Branch Name -</h5>
                            <h5 style={{ color: 'blue' }}>Contact Address -</h5>
                            <h5 style={{ color: 'blue' }}>Account Number -</h5>
                            <h5 style={{ color: 'blue' }}>Account Type -</h5>
                            <h5 style={{ color: 'blue' }}>IFSC Code - </h5>
                            <h5 style={{ color: 'blue' }}>Swift Code - </h5>
                        </div>
                    </div>
                    <div className="container">
                        <p className="dss" style={{ color: 'red' }}>&#10137; All papers must be strictly in IEEE format.</p>
                        <p className="dss" style={{ color: 'red' }}>&#10137; At the time of submission, authors are required to make sure that the PDF file (pdf eXpress) and the camera ready paper have the same list of authors. Also, the author list of an accepted paper CANNOT be changed in the final manuscript.</p>
                        <p className="dss" style={{ color: 'red' }}>&#10137; The camera ready paper should be prepared in proper formatting and should include all the recommendations of the reviewers.</p>
                        <p className="dss" style={{ color: 'red' }}>&#10137; It is mandatory for any one of the authors of an accepted paper to present in the conference.</p>
                        <p className="dss" style={{ color: 'red' }}>&#10137; Registration Fee is only for participants per paper, hence, one author registration is sufficient per paper. The Registration Fee is non Refundable.</p>
                        <p className="dss" style={{ color: 'red' }}>&#10137; The registration Fee for up to 8 pages manuscript. Authors will be charged Rs.500 for each of the extra pages.</p>
                        <p className="dss" style={{ color: 'red' }}>&#10137; Presentation Certificates will be provided to only participants who has done registration and presented their paper in the conference, if you require certificates for Co-authors (either one presented/participated certificate), 500/- will be charged for each certificate.</p>
                    </div>
                </div>
            </div>
        </>
    );
}