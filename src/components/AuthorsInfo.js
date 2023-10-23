import React from 'react'

export default function AuthorsInfo() {
    return (
        <>
            <div>
                <div className="key my-3" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='backk1'>Information For Authors</h1>
                </div>
                <div className="container">
                    <h3 style={{ color: 'red' }}>Submission Policies</h3>
                    <p><b>The Authors of IEEE MLR 2024 should pay attention to the following:</b></p>
                    <p>&#10147; Original, previously unpublished papers, and not simultaneously submitted to another journal or conference, with scientific and technical contributions, are expected.</p>
                    <p>&#10147; All submitted papers will be checked for plagiarism through the IEEE CrossCheck system or Turnitin software.</p>
                    <p>&#10147; Papers must be written in English with a maximum paper length of six (6) printed pages including figures for regular papers. If they exceed 6 pages, authors are required to pay additional fees as per IEEE guidlines.</p>
                    <p><b>Papers have to be formatted in the conference proceedings layout on A4 paper according to IEEE Template as follows:</b></p>
                    <ul>
                        <li >WORD: <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" className="btn-link" target="_blank">http://www.ieee.info/IEEE_template.docx</a></li>
                        <li>LATEX: <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/conference-latex-template_10-17-19.zip" className="btn-link" target="_blank">http://www.ieee.info/IEEE_latex.zip</a></li>
                    </ul>
                    <p>&#10147; Authors of accepted papers should upload their final paper in PDF format via the EasyChair. The PDF file must be compliance with IEEE eXpress PDF format.</p>
                    <p>&#10147; Only accepted and presented papers will be published in the IEEE MLR 2023 Conference Proceedings which will be submitted to the IEEE Xplore® digital library.</p>
                </div>
                <div className="container">
                    <h3 style={{ color: 'red' }}>Paper Submission</h3>
                    <p>&#10147; Upload your paper <a href="" target="_blank" style={{ fontWeight: '700' }}>here</a></p>
                </div>
                <div className="container">
                    <h3 style={{ color: 'red' }}>Camera-Ready Submission</h3>
                    <p>&#10147; Upon acceptance, at least one of the authors listed in the paper must attend the conference and present the paper according to the schedule of the conference. In the event that the presenter is unable to attend the conference for any reasons, your accepted paper will not be considered for submission of the proceeding to the IEEE Xplore.</p>
                    <p>&#10147; At least one of the authors listed on the paper must register for the IEEE MLR 2023 to upload the final manuscript. The final manuscript must be prepared based on reviewers’ comments and according to the final paper format as well as IEEE PDF compliance.</p>
                    <p>&#10147; Only paper that have been corrected according to reviewer(s) suggestion will be considered to be included in the final proceedings for the submission to the IEEE Xplore.</p>
                </div>
            </div>
        </>
    )
}
