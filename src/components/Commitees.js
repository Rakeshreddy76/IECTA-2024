import React, { useEffect } from "react";
import AOS from "aos";
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
        <div
          className="container my-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row">
            <div className="col">
              <h2 className="com1">Chief Patron</h2>
              <p className="coll my-3">
                <h6>
                  &#10148; Achyuta Samanta, KIIT & KISS, India.
                </h6>
              </p>

              <h2 className="com1">General Chair</h2>
              <p className="coll my-3">
                <h6>

                  &#10148; Khaled Shaalan ,The British University in Dubai,
                  UAE.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Adam Slowik , Koszalin University of Technology,
                  Poland.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Jnyana Ranjan Mahanty , KIIT, India.
                </h6>
              </p>

              <h2 className="com1">Organizing Chairs</h2>
              <p className="coll my-3">
                <h6>

                  &#10148;  Sushruta Mishra , KIIT, India

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Kshira Sagar Sahoo, Umea university, Sweden

                </h6>
              </p>

              {/* <h2 className="com1">Organizing Chairs</h2>
              <p
                className="coll my-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h6>
                  &#10148; Sushruta Mishra , KIIT, India
                </h6>
              </p>
              <p>
                <h6>
                  &#10148; Kshira Sagar Sahoo, Umea university, Sweden
                </h6>
              </p> */}

              <h2 className="com1">
                Finance Chairs
              </h2>
              <p className="coll my-3">
                <h6>
                  &#10148; Abhaya Kumar Sahoo , KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Prabhu Prasad Dev, KIIT, India.
                </h6>
              </p>

              <h2
                className="com1 my-4"
              >
                Publicity Chairs
              </h2>
              <p className="coll my-3">
                <h6>

                  &#10148; Muhammad Ehsan Rana , APU, Kuala Lumpur , Malaysia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Somya Mohanty , University of North Carolona at
                  Greensboro , USA.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Piyush Maheshwari , The British University in Dubai
                  , UAE.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; P. Sanjeevikumar , IEEE Senior Member, Aarhus
                  University , Herning, Denmark.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Pratyusa Mukherjee , KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Adyasha Dash , KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Rabindra Barik, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Lambodar Jena, SOA, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Anamay Sarkar, Google LLC.
                </h6>
              </p>

              <h2
                className="com1 my-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Publication Chairs
              </h2>
              <p className="coll my-3">
                <h6>
                  &#10148; Satya Ranjan Dash, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Kunal Anand , KIIT, India.
                </h6>
              </p>

              <h2
                className="com1 my-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Session Management Chairs
              </h2>
              <p className="coll my-3">
                <h6>
                  &#10148; Jagannath Singh , KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Sujata Swain, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Gananath Bhuyan, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Hiren Kumar Thakkar, Pandit Deendayal Energy
                  University, India.

                </h6>
              </p>

              <h2
                className="com1 my-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Registration Chairs
              </h2>
              <p className="coll my-3">
                <h6>
                  &#10148; Suneeta Mohanty, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Junali Jasmine Jena KIIT, India
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Santwana Sagnika, KIIT, India
                </h6>
              </p>

              <h2
                className="com1 my-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                International Advisory Committee
              </h2>
              <p className="coll my-3">
                <h6>
                  &#10148; Biswajit Sahoo, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Samaresh Mishra, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Arup Abhinna Acharya, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Amulya Ratna Swain, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Victor Hugo C. de Albuquerque, Federal University
                  of Ceará , Brazil.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Quoc-Viet PHAM, Pusan National University , South
                  Korea.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Prasanti Manda , University of North Carolona at
                  Greensboro , US.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Shafiz Mohd Yusof , University of Wollongong ,
                  Dubai, UAE.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Mohamed TAHOUN , Suez Canal University , Ismailia ,
                  Egypt.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Pradeep Kumar Mallick, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Huda Binti Haji Ibrahim, Universiti Utara Malaysia,
                  Sintok, Malaysia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; AYO Femi Emmanuel , Olabisi Onabanjo University ,
                  Nigeria , West Africa.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Mohamed W.Abo EI-Soud , Majmaah University , KSA.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Ahmed Ali , Prince Sattam Bin Abdulaziz University
                  , Saudi Arabia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Joseph Bamidele AWOTUNDE , University of llorin ,
                  llorin , Nigeria.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Paolo Barsocchi , ISTI-CNR , Italy.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Madhabananda Das , KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Mostafa Al-Emran , The British University in Dubai
                  , UAE.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Folorunso Sakinat Oluwabukonl , Olabisi Onabanjo
                  University , Nigeria.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Apriandy Angdresey , Universitas Katolik De La
                  Salle, Manado , Indonesia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Chinmaya Dehury , University of Tartu , Estonia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Sung-Bae Cho , Yonsei University , Seol , Korea.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Esraa Eldesouky , Prince Sattam Bin Abdulaziz
                  University , Saudi Arabia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Dac-Nhuong Le , Haiphong University , Vietnam.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; ABIODUN Moses Kazeem , Landmark University ,
                  Nigeria , West Africa.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Suresh Babu, ServisBOT , Dublin , Ireland.
                </h6>
              </p>
            </div>

            {/* coll */}
            <div className="col">
              <h2 className="com1">Patron</h2>
              <p className="coll my-3">
                <h6>
                  &#10148; Sasmita Samanta , KIIT, India.
                </h6>
              </p>

              <h2 className="com1">Program Chairs</h2>
              <p className="coll my-3">
                <h6>
                  &#10148; Tarek Gaber , University of Salford, UK.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Zaineb Dagdia , Paris Saclay University, France.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Hrudaya Kumar Tripathy, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Prabha Sundaravidel , University of Texas at Tyler,
                  Tyler, Texas.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Sambit Mishra , SRM , AP , India.
                </h6>
              </p>

              <h2 className="com1">Technical Program Committee Chairs</h2>
              <p className="coll my-3">
                <h6>

                  &#10148; Selvakumar Samuel , Asia Pacific University of
                  Technology & Innovation (APU), Kuala Lumpur, Malaysia.

                </h6>
              </p>
              <p>
                <h6>
                  &#10148; Bhabani Sankar Prasad Mishra, KIIT, India.
                </h6>
              </p>
              <p>
                <h6>

                  &#10148; Mohamed Meselhy Eltoukhy , University of Jeddah,
                  Jeddah , Saudi Arabia.

                </h6>
              </p>
              <p>
                <h6>

                  &#10148; Pravakar Garnayak , Microsoft, Greater Seattle Area
                  , USA.

                </h6>
              </p>
              <p>
                <h6>
                  &#10148; Anuja Kumar Acharya , KIIT, India.
                </h6>
              </p>
              <p>
                <h6>

                  &#10148; Abhishek Hazra, National University of Singapore,
                  Singapore.

                </h6>
              </p>
              <p>
                <h6>
                  &#10148; Lipika Mohanty, KIIT, India.
                </h6>
              </p>
              <p>
                <h6>
                  &#10148; Sambit Mishra , SRM , AP , India
                </h6>
              </p>
              <p>
                <h6>
                  &#10148; Sibanjan Das, ServiceNow, India.
                </h6>
              </p>
              <p>
                <h6>
                  &#10148; Dayal Kumar Behera, KIIT, India.
                </h6>
              </p>

              <h2 className="com1">Technical Program Committee Members</h2>
              <p className="coll my-3">
                <h6>

                  &#10148; NZ Jhanjhi, Taylor’s University, Subang Jaya,
                  Malaysia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Ranjeet Kumar Rout, National Institute of
                  Technology Srinagar, Jammu and Kashmir, India

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Mohamed Meselhy Eltoukhy , University of Jeddah,
                  Jeddah , Saudi Arabia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Pravakar Garnayak , Microsoft, Greater Seattle Area
                  , USA.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Anuja Kumar Acharya , KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Abhishek Hazra, National University of Singapore,
                  Singapore.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Alfonso González Briones , Complutense University
                  of Madrid.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Muhammad Fazal Ijaz , Sejong University , Seoul
                  05006 , South Korea.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Abu ul Hassan S. Rana , The University of Melbourne
                  , VIC, Australia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Niranjan Kumar Ray, KIIT, India
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Pramod Kumar Sethy, Eotvos Lorand University,
                  Budapest, Hungary

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Lov Kumar, NIT Kurukshetra, India
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Paramartha Dutta, Siksha Bhavana (Institute of
                  Science), Visva-Bharati Santiniketan, WB, INDIAa

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Vazeerudeen Hameed, Asia Pacific University , Asia
                  Pacific University of Technology & Innovation (APU) , Kuala
                  Lumpur , Malaysia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Mukesh Nandave, DPSRU, New Delhi, India
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Vinothini Kasinathan, Asia Pacific University of
                  Technology & Innovation (APU), Kuala Lumpur , Malaysia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; B. S. Mahanand, Sri Jayachamarajendra College of
                  Engineering, Mysuru, India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Ferdous Ahmed Barbhuiya, Indian Institute of
                  Information Technology, Guwahati, India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Kesava Pillai, Asia Pacific University of
                  Technology & Innovation (APU), Kuala Lumpur , Malaysia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Roshidi bin Din , Universiti Utara Malaysia,
                  Sintok, Malaysia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Sasmita Padhy, VSSUT, Burla, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Mostafa Al-Emran, British University in Dubai, UAE.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Daniel W. Woods, British University in Dubai, UAE.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Balakrishna Tripathy, VIT, Vellore, Chennai, India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Saravanakumar K, VIT, Vellore, Chennai, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Ishola Dada Muraina, Yusuf Maitama Sule University,
                  Kano Nigeria.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Lokesh Sharma, Manipal University Jaipur, India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Sudhansu Shekhar Patra, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Sandeep Panda, ICFAI University, Hyderabad, India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Biswaranjan Acharya, Marwadi University, Gujarat,
                  India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Mrutyunjaya Panda, Utkal University, Bhubaneswar,
                  India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Subhendu Ku Pani, Krupajal Group of Institutions,
                  Bhubaneswar, INDIA.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; D P Acharjya, VIT, Vellore, Chennai, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Pinaki Sankar Chatterjee, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Angelia Melani Adrian , De La Salle Catholic
                  University , Indonesia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Santosh Kumar Baliarsingh, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Muhammad Attique , Sejong University , Seoul 05006
                  , South Korea.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Junaidy Sanger, Universitas Katolik De La Salle,
                  Manado - Indonesia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Ghanshyam S. Bopche, National Institute of
                  Technology Tiruchirappalli, India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Ranjan Kumar Behera, Indian Institute of
                  Information Technology, India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Debanjan Pathak, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Shakti Sharma, Bennett University, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Kumaran P, NIT Puducherry, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Areej Shahid , The University of Melbourne , VIC ,
                  Australia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Nikesh Bajaj , University of East London , England.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Hitesh Mohapatra, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; Angelia Melani Adrian, Universitas Katolik De La
                  Salle, Manado - Indonesia.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>

                  &#10148; B Ramachandra Reddy, National Institute of
                  Technology, Jamshedpur, India.

                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Banee Bandana Das, SRM University-AP, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Priyanka Singh, SRM University-AP, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Kuldeep Chouhan, Sharda University, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Aleena Swetapadma, KIIT, India.
                </h6>
              </p>
              <p className="coll my-3">
                <h6>
                  &#10148; Deepak Kumar Nayak, MNIT, Jaipur, India.
                </h6>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="container my-5" data-aos="fade-up" data-aos-duration="2000">
                    <div className="row">
                        <div className="col">
                            <h2 className='com1'>General Chair</h2>
                            <p className="coll my-3" ><h6>&#10148; Khaled Shaalan ,The British University in Dubai, UAE.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Adam Slowik , Koszalin University of Technology, Poland.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Jnyana Ranjan Mahanty , KIIT, India.</h6></p>
                        </div>
                        <div className="col">
                            <h2 className='com1'>Program Chairs</h2>
                            <p className="coll my-3" ><h6>&#10148; Tarek Gaber , University of Salford, UK.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Zaineb Dagdia , Paris Saclay University, France.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Hrudaya Kumar Tripathy, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Prabha Sundaravidel , University of Texas at Tyler, Tyler, Texas.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Sambit Mishra , SRM , AP , India.</h6></p>
                        </div>
                    </div>
                </div> */}
        {/* <div className="container my-5" data-aos="fade-up" data-aos-duration="2200">
                    <div className="row">
                        <div className="col">
                            <h2 className='com1'>Organizing Chairs</h2>
                            <p className="coll my-3" data-aos="fade-up" data-aos-duration="2200"><h6>&#10148; Sushruta Mishra , KIIT, India</h6></p>
                            <p ><h6>&#10148; Kshira Sagar Sahoo, Umea university, Sweden</h6></p>
                        </div>
                        
                        <div className="col">
                            <h2 className='com1'>Technical Program Committee Chairs</h2>
                            <p className="coll my-3"><h6>&#10148; Selvakumar Samuel , Asia Pacific University of Technology & Innovation (APU),     Kuala Lumpur, Malaysia.</h6></p>
                            <p><h6>&#10148; Bhabani Sankar Prasad Mishra, KIIT, India.</h6></p>
                            <p><h6>&#10148; Mohamed Meselhy Eltoukhy , University of Jeddah, Jeddah , Saudi Arabia.</h6></p>
                            <p><h6>&#10148; Pravakar Garnayak , Microsoft, Greater Seattle Area , USA.</h6></p>
                            <p><h6>&#10148; Anuja Kumar Acharya , KIIT, India.</h6></p>
                            <p><h6>&#10148; Abhishek Hazra, National University of Singapore, Singapore.</h6></p>
                            <p><h6>&#10148; Lipika Mohanty, KIIT, India.</h6></p>
                            <p><h6>&#10148; Sambit Mishra , SRM , AP , India</h6></p>
                            <p><h6>&#10148; Sibanjan Das, ServiceNow, India.</h6></p>
                            <p><h6>&#10148; Dayal Kumar Behera, KIIT, India.</h6></p>
                        </div>
                    </div>
                </div> */}
        {/* <div className="container my-5" data-aos="fade-up" data-aos-duration="1000">
                    <div className="row">
                        <div className="col">
                            <h2 className='com1' data-aos="fade-up" data-aos-duration="1000">Finance Chairs</h2>
                            <p className="coll my-3" ><h6>&#10148; Abhaya Kumar Sahoo , KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Prabhu Prasad Dev, KIIT, India.</h6></p>

                            <h2 className='com1 my-4' data-aos="fade-up" data-aos-duration="1000">Publicity Chairs</h2>
                            <p className="coll my-3" ><h6>&#10148; Muhammad Ehsan Rana , APU, Kuala Lumpur , Malaysia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Somya Mohanty , University of North Carolona at Greensboro , USA.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Piyush Maheshwari , The British University in Dubai , UAE.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; P. Sanjeevikumar , IEEE Senior Member, Aarhus University , Herning, Denmark.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Pratyusa Mukherjee , KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Adyasha Dash , KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Rabindra Barik, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Lambodar Jena, SOA, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Anamay Sarkar, Google LLC.</h6></p>

                            <h2 className='com1 my-4' data-aos="fade-up" data-aos-duration="1000">Publication Chairs</h2>
                            <p className="coll my-3" ><h6>&#10148; Satya Ranjan Dash, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Kunal Anand , KIIT, India.</h6></p>

                            <h2 className='com1 my-4' data-aos="fade-up" data-aos-duration="1000">Session Management Chairs</h2>
                            <p className="coll my-3" ><h6>&#10148; Jagannath Singh , KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Sujata Swain, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Gananath Bhuyan, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Hiren Kumar Thakkar, Pandit Deendayal Energy University, India.</h6></p>
                        </div>
                        
                        <div className="col">
                            <h2 className='com1'>Technical Program Committee Members</h2>
                            <p className="coll my-3" ><h6>&#10148; NZ Jhanjhi, Taylor’s University, Subang Jaya, Malaysia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Ranjeet Kumar Rout, National Institute of Technology Srinagar, Jammu and Kashmir, India</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Mohamed Meselhy Eltoukhy , University of Jeddah, Jeddah , Saudi Arabia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Pravakar Garnayak , Microsoft, Greater Seattle Area , USA.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Anuja Kumar Acharya , KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Abhishek Hazra, National University of Singapore, Singapore.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Alfonso González Briones , Complutense University of Madrid.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Muhammad Fazal Ijaz , Sejong University , Seoul 05006 , South Korea.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Abu ul Hassan S. Rana , The University of Melbourne , VIC, Australia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Niranjan Kumar Ray, KIIT, India</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Pramod Kumar Sethy, Eotvos Lorand University, Budapest, Hungary</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Lov Kumar, NIT Kurukshetra, India</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Paramartha Dutta, Siksha Bhavana (Institute of Science), Visva-Bharati Santiniketan, WB, INDIAa</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Vazeerudeen Hameed, Asia Pacific University , Asia Pacific University of Technology & Innovation (APU) , Kuala Lumpur , Malaysia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Mukesh Nandave, DPSRU, New Delhi, India</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Vinothini Kasinathan, Asia Pacific University of Technology & Innovation (APU), Kuala Lumpur , Malaysia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; B. S. Mahanand, Sri Jayachamarajendra College of Engineering, Mysuru, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Ferdous Ahmed Barbhuiya, Indian Institute of Information Technology, Guwahati, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Kesava Pillai, Asia Pacific University of Technology & Innovation (APU), Kuala Lumpur , Malaysia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Roshidi bin Din , Universiti Utara Malaysia, Sintok, Malaysia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Sasmita Padhy, VSSUT, Burla, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Mostafa Al-Emran, British University in Dubai, UAE.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Daniel W. Woods, British University in Dubai, UAE.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Balakrishna Tripathy, VIT, Vellore, Chennai, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Saravanakumar K, VIT, Vellore, Chennai, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Ishola Dada Muraina, Yusuf Maitama Sule University, Kano Nigeria.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Lokesh Sharma, Manipal University Jaipur, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Sudhansu Shekhar Patra, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Sandeep Panda, ICFAI University, Hyderabad, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Biswaranjan Acharya, Marwadi University, Gujarat, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Mrutyunjaya Panda, Utkal University, Bhubaneswar, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Subhendu Ku Pani, Krupajal Group of Institutions, Bhubaneswar, INDIA.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; D P Acharjya, VIT, Vellore, Chennai, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Pinaki Sankar Chatterjee, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Angelia Melani Adrian , De La Salle Catholic University , Indonesia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Santosh Kumar Baliarsingh, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Muhammad Attique , Sejong University , Seoul 05006 , South Korea.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Junaidy Sanger, Universitas Katolik De La Salle, Manado - Indonesia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Ghanshyam S. Bopche, National Institute of Technology Tiruchirappalli, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Ranjan Kumar Behera, Indian Institute of Information Technology, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Debanjan Pathak, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Shakti Sharma, Bennett University, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Kumaran P, NIT Puducherry, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Areej Shahid , The University of Melbourne , VIC , Australia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Nikesh Bajaj , University of East London , England.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Hitesh Mohapatra, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Angelia Melani Adrian, Universitas Katolik De La Salle, Manado - Indonesia.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; B Ramachandra Reddy, National Institute of Technology, Jamshedpur, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Banee Bandana Das, SRM University-AP, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Priyanka Singh, SRM University-AP, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Kuldeep Chouhan, Sharda University, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Aleena Swetapadma, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Deepak Kumar Nayak, MNIT, Jaipur, India.</h6></p>
                        </div>
                    </div>
                </div> */}

        {/* <div className="container my-5" data-aos="fade-up" data-aos-duration="2000">
                    <div className="row">
                        <div className="col">
                            <h2 className='com1'>General Chair</h2>
                            <p className="coll my-3" ><h6>&#10148; Khaled Shaalan ,The British University in Dubai, UAE.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Adam Slowik , Koszalin University of Technology, Poland.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Jnyana Ranjan Mahanty , KIIT, India.</h6></p>
                        </div>
                        <div className="col">
                            <h2 className='com1'>Program Chairs</h2>
                            <p className="coll my-3" ><h6>&#10148; Tarek Gaber , University of Salford, UK.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Zaineb Dagdia , Paris Saclay University, France.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Hrudaya Kumar Tripathy, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Prabha Sundaravidel , University of Texas at Tyler, Tyler, Texas.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Sambit Mishra , SRM , AP , India.</h6></p>
                        </div>

                        <div className="col">
                            <h2 className='com1'>Program Chairs</h2>
                            <p className="coll my-3" ><h6>&#10148; Tarek Gaber , University of Salford, UK.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Zaineb Dagdia , Paris Saclay University, France.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Hrudaya Kumar Tripathy, KIIT, India.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Prabha Sundaravidel , University of Texas at Tyler, Tyler, Texas.</h6></p>
                            <p className="coll my-3" ><h6>&#10148; Sambit Mishra , SRM , AP , India.</h6></p>
                        </div>
                    </div>
                </div>  */}
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
