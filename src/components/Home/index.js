import {Link} from 'react-router-dom'
import {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-cont">
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block imgg"
                src="https://i.postimg.cc/wjx2Xxnt/sasasa.png"
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  imgg"
                src="https://i.postimg.cc/4dHh6jJH/Untitled-croped-4.png"
                alt="Second slide"
              />
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  imgg"
                src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725630257/istockphoto-1386515668-612x612_zc2uxo.jpg"
                alt="Third slide"
              />
             
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="doc">
          <h1 className="text-center">Meet Your Dentist</h1>
          <div className='doc-content'>
          <div className='text-center'>
              <img
                src="data:image/jpeg;base64,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"
                alt="Doctor Img"  className='doc-image'
              />
            </div>
            <div className='doc-text'>
              <h1>Chief Dentist</h1>
              <h1 className='doc-name'>
                Dr. Rama Krishna <span className='doc-qual'>MDS, BDS</span>
              </h1>
              <p>
                Welcome to RamaKrishna Dental, where innovation meets expertise.
                I'm Dr. Rama Krishna, leading a cutting-edge clinic specializing
                in Conservative Dentistry and Endodontics. With a passion for
                research-driven, evidence-based practices and a focus on
                Biomimetic Dentistry, I'm dedicated to providing
                state-of-the-art care. Recognized for my contributions to
                dentistry, I strive to offer the best services, ensuring each
                patient receives the highest quality treatment in a hygienic
                environment.
              </p>
            </div>
            
          </div>
        </div>

        <div className='why'>
          <h1  className="text-center">Why Rama Krishna Dental</h1>
          <div className="why-content">
          <div className="why1">
            <h1 className="why-head">Experienced Dentist</h1>
            <p>Our expert possesses the perfect blend of skills and ensures personalized care tailored to your unique needs.</p>
          </div>
          <div className="why1">
            <h1 className="why-head">Cost Effective</h1>
            <p>We take pride in offering cost-effective dental solutions that prioritize your budget without compromising on quality.</p>
          </div>
          <div className="why1">
            <h1 className="why-head">Best Dental Care</h1>
            <p>At our clinic, we go above and beyond to provide exceptional dental care, focusing on comprehensive solutions</p>
          </div>
          <div className="why1">
            <h1 className="why-head">Safety and Hygiene</h1>
            <p>We adhere to stringent protocols to maintain a hygienic environment, Your safety and well-being are our top priorities.</p>
          </div>
          <div className="why1">
            <h1 className="why-head">All About the Patient</h1>
            <p>We are passionate about putting our patients at the center of everything we do and offer dental care that exceeds their expectations.</p>
          </div>
          </div>
        </div>

        <div>
          <div>
            <div className="container">
              <div className="card">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725708536/card2home-removebg-preview_tu16to.png"
                    alt="s-img"
                    className="card-icon"
                  />
                </div>

                <h3>Opening Hours</h3>
                <p>
                  Mon - Fri 10:00am - 08:00pm
                  <br />
                  Saturday 10:00am - 08:00pm
                  <br />
                  Sunday 10:00am - 08:00pm
                </p>
                <button type="button" className="btn">
                  Visit Us
                </button>
              </div>

              <div className="card">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725708536/card3home-removebg-preview_q1jnzy.png"
                    alt="s-img"
                    className="card-icon"
                  />
                </div>
                <h3>Make An Appointment</h3>
                <p>
                  Now you can book appointments at Annapoorna International
                  Dental Care with just a phone call
                </p>
                <button type="button" className="btn">
                  Appointment
                </button>
              </div>

              <div className="card">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725708536/card1home-removebg-preview_zrjmak.png"
                    alt="s-img"
                    className="card-icon"
                  />
                </div>
                <h3>Contact Us Now</h3>
                <p>
                  +917075997722, +918500155959
                  <br />
                  annapoornadentalcare@gmail.com
                  <br />
                  Vijayawada, Machilipatnam
                </p>
                <button type="button" className="btn">
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h1 className="darkblue-font text-center">What We offer</h1>
              <div className="btn-container">
                <Link to="/services">
                  <button type="button" className="serv-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      id="impacted-tooth"
                      className="offer-card-svg"
                    >
                      <path d="M503.058,334.46c-.372-19.284.592-39.179-1.8-58.352-.618-4.958-1.635-9.875-4.264-14.206-3.7-6.095-9.959-9.623-14.469-14.992-5.7-6.791-7.573-17.464-14.885-22.75-7.788-5.629-18.548-3.2-25.944,1.941a28.263,28.263,0,0,0-6.175,5.93,208.661,208.661,0,0,1-6.934-27.961,203.187,203.187,0,0,0-14.372-47.37,68.963,68.963,0,0,0-32.563-33.94c-15.959-7.877-34.349-10-48.689,2.213C327.018,130.037,322,136.867,318,143.545c-2.838,4.738-3.853,11.259-8.022,15.065-5.566,5.082-14.08,4.038-21.036,4.1-8.832.08-17.593,1.165-25.43,5.526a44.584,44.584,0,0,0-13.955,12.506,110.027,110.027,0,0,0,2.3-17.1c.811-17.3-5.069-34.257-15.569-47.929C225.35,101.476,210.167,93.668,192.1,97.76a80,80,0,0,0-24.615,10.009c-4.413,2.827-7.909,6.507-13.447,6.8-6.1.327-11.645-3.524-16.575-6.618-6.223-3.905-12.507-7.808-19.618-9.9-17.561-5.165-35.84,2.261-48.976,14C54.123,125.223,47.109,144.166,46.862,163.7c-.233,18.447,6.124,35.57,12.739,52.486-7.259.082-14.27,2.441-18.385,9.155-2.074,3.385-3.03,7.4-4.659,10.994a45.08,45.08,0,0,1-8.43,12.476,59.27,59.27,0,0,0-13.088,22c-3.75,11.6-3.974,24.785-4.655,36.865a386.216,386.216,0,0,0-.157,40.362c.585,12.1.58,25.679,4.515,37.269,6.2,18.254,24.131,24.615,41.845,25.77,14.765.962,29.677.771,44.467.928q27.606.293,55.214.3c31.256.049,62.513-.088,93.77-.129,56.326-.073,112.665.456,168.989.939,4.551.039,9.105.05,13.655.147,8.743.185,17.441-.126,26-2.106a56.238,56.238,0,0,0,26.116-13.49c6.978-6.615,11.218-15.361,14.484-24.273C503.833,360.99,503.309,347.458,503.058,334.46ZM259.964,186.85A31.012,31.012,0,0,1,279.43,175.3c7.253-1.184,14.671-.169,21.959-.963,7.321-.8,14.046-3.439,18.879-9.2,3.415-4.072,4.524-9.04,7-13.622a63.856,63.856,0,0,1,13.625-17.576c6.324-5.482,14.157-6.817,22.234-5.155a56.725,56.725,0,0,1,36.239,25.387c8,13.106,12.4,29.236,15.848,44.086,1.418,6.111,2.274,12.324,3.543,18.463a168.14,168.14,0,0,0,6.575,22.307,188.332,188.332,0,0,0,21.715,42.712c4.32,6.4,8.563,12.829,12.313,19.583,3.8,6.846,7.812,13.988,8.667,21.914a35.723,35.723,0,0,1-.581,12.21c-.531,2.15-1.3,4.752-3.156,6.166-2.747,2.089-4.116.087-5.425-2.479-5.826-11.415-9.751-23.879-16.163-35.02-6.188-10.753-14.92-20.4-25.624-26.778-13.887-8.272-31.345-12.118-44.9-1.114-12.425,10.083-13.51,26.2-11.332,41.042a91.22,91.22,0,0,0,20.147,44.574,84.493,84.493,0,0,0,8.141,8.536c2.85,2.6,7.087,5.374,8.252,9.241,2.652,8.8-12.142,2.164-15.072.18-10.577-7.162-18.422-19.093-25.716-29.324-9.558-13.407-18.748-27.09-29.3-39.751a182.879,182.879,0,0,0-17.394-18.272c-22.337-19.961-52.515-34.355-59.2-66.35A48.781,48.781,0,0,1,259.964,186.85Zm-195.6-49.182c6.895-14.936,22.738-28.3,39.623-29.266,14.306-.822,23.942,9.186,36.035,14.824,5.832,2.719,11.906,4.029,18.306,2.844,5.526-1.024,9.393-3.967,13.871-7.052,12.472-8.591,31.22-15.084,44.759-5.757,12.029,8.286,20.12,23.966,22.367,38.148,2.918,18.423-3.632,38.355-9.231,55.689-4.415,13.666-10.663,26.416-14.024,40.459-4.027,16.822-6.539,33.621-6.2,50.957.3,15.674,1.886,32.379-1.917,47.744a41.77,41.77,0,0,1-7.15,14.951c-2.174,2.9-8.033,9.835-12.506,7.266-2.323-1.334-1.428-5.042-1.1-7.267.726-4.975,1.6-9.92,2.238-14.912.887-6.908,2.031-13.821,2.7-20.753a79.6,79.6,0,0,0-6.47-40.017c-6.078-13.414-16.961-26.9-32.413-28.877-17.3-2.209-30.4,8.784-38.269,23.161A96.577,96.577,0,0,0,103.6,333.294a101.492,101.492,0,0,0,1.93,13.282c1.021,4.75,3.051,9.45,3.491,14.295.276,3.032-.423,7.8-4.421,6.893-3.354-.756-6.072-4.06-7.817-6.83-7.112-11.289-7.724-26.483-8.622-39.373-1.328-19.083-1.5-38.242-3.924-57.241a209.511,209.511,0,0,0-5.661-29.286C69.557,203.378,49.016,170.92,64.366,137.668ZM489.522,364.323c-3.967,16.175-13.826,29.384-30.193,34.253-8.7,2.589-17.576,2.881-26.579,2.687-3.531-.076-7.063-.088-10.594-.121-52.084-.473-104.171-.674-156.257-.933-58.478-.291-116.956.47-175.434-.331-12.943-.178-26.434.507-39.279-1.318-7.38-1.049-15.311-3.373-20.521-9.009-7.033-7.608-6.912-20.02-7.683-29.718a375.686,375.686,0,0,1,1.34-74.722,50.831,50.831,0,0,1,8.706-23.519c2.043-2.956,4.753-5.312,7.022-8.082a55.658,55.658,0,0,0,8.093-13.948c1.112-2.657,1.818-6.191,3.606-8.509,2.479-3.212,7.3-3.4,10.975-2.853a6.82,6.82,0,0,0,1.222.068q1.626,4.942,3.06,9.956c5.773,20.948,7.067,42.56,8.11,64.161.842,17.456,1.051,35.739,6.051,52.628,3.593,12.136,16.372,31.717,31.539,23.234,8.286-4.634,9.274-14.865,7.459-23.189-2.171-9.96-4.886-19.019-4.85-29.358a86.613,86.613,0,0,1,5.154-29.038c3.146-8.751,7.986-18.824,15.761-24.39a21.984,21.984,0,0,1,21.708-1.926c6.139,3.015,10.421,8.973,13.9,14.665,7.551,12.349,9.661,27.371,8.181,41.6-.006.05-.009.086-.012.116-.028.18-.907,6.292-1.263,9.052-.755,5.835-1.382,11.688-2.307,17.5-1.225,7.693-3.659,16.9,2.593,23.2,11.651,11.733,27.223-1.424,33.79-11.639,8.938-13.9,9.456-31.222,9.475-47.273.021-17.318-1.211-34.247,2-51.421,2.984-15.947,7.8-30.761,13.726-45.784a69.112,69.112,0,0,0,10.818,32.47c9.114,14.447,22.457,24.737,36.054,34.7,5.738,4.2,11.2,8.662,16.508,13.4,13.589,12.354,24.629,26.952,35.18,41.9,9.288,13.16,18.2,26.948,29.46,38.55,8.91,9.181,25.968,21.273,38.433,11.287,6.565-5.259,6.357-14.855,2.021-21.485-4.912-7.51-13.058-12.532-18.527-19.709-10.637-13.959-17.858-33.125-15.914-50.872.754-6.883,3.759-12.823,9.713-16.6,7.865-4.989,16.956-2.4,24.749,1.288,11.692,5.534,20.79,15.412,26.84,26.717,2.721,5.082,4.88,10.476,7.336,15.688,2.1,4.448,4.129,8.91,6.019,13.449,1.493,3.588,3.114,7.12,6,9.828,5.766,5.416,14.542,4.291,20.058-.879,4.889-4.581,6.624-11.36,7.246-17.8,1.412-14.628-4.787-27.558-11.939-39.924-8.257-14.275-18.615-27.111-25.514-42.184a13.005,13.005,0,0,1-.749-4.322,17.39,17.39,0,0,1,10.2-11.822c3.277-1.354,7.4-2.026,9.805,1.073,2.456,3.171,3.689,7.529,5.684,11a55.613,55.613,0,0,0,9.521,12.443c2.6,2.488,5.561,4.552,7.992,7.218a13.357,13.357,0,0,1,2.43,3.643,4.177,4.177,0,0,1,.5,1.243,31.306,31.306,0,0,1,.99,3.738c1.138,5.571,1.12,11.7,1.269,17.506.271,10.529.378,21.063.612,31.593C491.115,336.8,492.728,351.251,489.522,364.323Z" />
                    </svg>
                    Cosmetic Dentistry
                  </button>
                </Link>
                <Link to="/services">
                  {" "}
                  <button type="button" className="serv-btn">
                    <svg
                      className="offer-card-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      id="tooth-implant"
                    >
                      <path
                        fill="#f1748e"
                        d="M28.5,31.5H3.5a3,3,0,0,1-3-3V20.63914a3.99135,3.99135,0,0,1,4.77754-3.92059A53.13316,53.13316,0,0,0,16,17.8125a53.13316,53.13316,0,0,0,10.72245-1.094A3.99135,3.99135,0,0,1,31.5,20.63914V28.5A3,3,0,0,1,28.5,31.5Z"
                      />
                      <path
                        fill="#fff"
                        d="M19.36668,27.11115l-2.12834-4.91708a1.61621,1.61621,0,0,0-2.93782-.06248L11.965,26.95374a.87855.87855,0,0,1-1.57613.01068l-.429-.85609a9.82238,9.82238,0,0,1-.47308-7.68361l.016-.045a2.67753,2.67753,0,0,0,.034-1.709l-1.32454-4.2096a4.018,4.018,0,0,1,5.05-5.03518l2.04956.65152a2.67868,2.67868,0,0,0,1.51371.03219l2.07541-.56379a4.018,4.018,0,0,1,4.83136,5.24533l-1.50232,4.14948a2.67868,2.67868,0,0,0-.04144,1.7h0A9.95649,9.95649,0,0,1,21.3763,26.405l-.43542.78379A.87852.87852,0,0,1,19.36668,27.11115Z"
                      />
                      <polygon
                        fill="#57565e"
                        points="17.815 12.598 16 13.808 14.185 12.598 14.185 2.92 17.815 2.92 17.815 12.598"
                      />
                      <rect
                        width="7.259"
                        height="2.42"
                        x="12.371"
                        y=".5"
                        fill="#8b8891"
                      />
                      <path d="M5.5,28a.5.5,0,1,0,.5.5A.5.5,0,0,0,5.5,28Zm-2-9a.5.5,0,1,0,.5.5A.5.5,0,0,0,3.5,19Zm0,4a.5.5,0,1,0,.5.5A.5.5,0,0,0,3.5,23Zm25-3a.5.5,0,1,0,.5.5A.5.5,0,0,0,28.5,20Zm1.83789-2.85547a4.44146,4.44146,0,0,0-3.7207-.91357c-1.27.26642-2.55237.46954-3.82648.631l1.40948-3.90149a4.49976,4.49976,0,0,0-.92578-4.60156,4.43517,4.43517,0,0,0-4.50293-1.29248l-.457.12152V3.41943h1.31445a.49971.49971,0,0,0,.5-.5V.5a.49971.49971,0,0,0-.5-.5H12.37109a.49971.49971,0,0,0-.5.5V2.91943a.49971.49971,0,0,0,.5.5h1.31445V7.03925l-.27344-.08514A4.4334,4.4334,0,0,0,8.86133,8.05127,4.50848,4.50848,0,0,0,7.7334,12.61035l1.33008,4.21191c.0022.0069.00116.01373.0033.02063-1.22217-.159-2.45636-.35736-3.68494-.61243A4.49147,4.49147,0,0,0,0,20.64014V28.5A3.50425,3.50425,0,0,0,3.5,32h25A3.50425,3.50425,0,0,0,32,28.5V20.64014A4.48984,4.48984,0,0,0,30.33789,17.14453ZM12.87109,2.41943V1h6.25781V2.41943Zm4.44336,1v8.91064L16,13.20654l-1.31445-.87646V7.69781c-.00055-.01184.0014-.02338,0-.0351V3.41943Zm-8.627,8.89111a3.5162,3.5162,0,0,1,4.42383-4.40283l.57422.179v4.511a.50134.50134,0,0,0,.22266.416l1.81445,1.21a.49993.49993,0,0,0,.55469,0l1.81445-1.21a.50134.50134,0,0,0,.22266-.416V8.22321l.71777-.191a3.51169,3.51169,0,0,1,4.22754,4.58789l-1.5,4.15186a2.72785,2.72785,0,0,0-.1543.6123,3.13942,3.13942,0,0,0,.10742,1.40479,9.32457,9.32457,0,0,1,.417,2.78076,9.46118,9.46118,0,0,1-1.18555,4.59473l-.34106.60535c.34631-3.16833-.00665-5.67426-1.09253-7.62439a5.21931,5.21931,0,0,0-2.03418-2.08594,4.42593,4.42593,0,0,0-4.3252.12354c-1.60645.978-2.168,3.02246-2.50586,4.89307a17.16773,17.16773,0,0,0-.24658,3.7901,9.37925,9.37925,0,0,1-.42822-7.31891,3.30243,3.30243,0,0,0,.184-1.05206l.0025-.00751-.00092-.011c.00018-.01581.00385-.03082.00385-.04663a2.929,2.929,0,0,0-.14355-.91064ZM19.63336,26.459l-1.93512-4.46924a2.122,2.122,0,0,0-3.84863-.07764l-2.33008,4.82031a.36573.36573,0,0,1-.0459.06409,16.40831,16.40831,0,0,1,.15625-4.5426c.29785-1.65186.77344-3.44482,2.041-4.2168a3.4537,3.4537,0,0,1,3.33105-.09717,4.22691,4.22691,0,0,1,1.63574,1.69238A11.502,11.502,0,0,1,19.63336,26.459ZM31,28.5A2.50263,2.50263,0,0,1,28.5,31H3.5A2.50263,2.50263,0,0,1,1,28.5V20.64014a3.49638,3.49638,0,0,1,1.29395-2.7207A3.44447,3.44447,0,0,1,5.17871,17.21c1.31354.27271,2.63544.48486,3.94165.64972a2.66786,2.66786,0,0,1-.10083.39178,10.34076,10.34076,0,0,0,.49414,8.084l.42871.84814a1.37244,1.37244,0,0,0,1.23437.7666h.00879a1.37486,1.37486,0,0,0,1.23438-.78223L14.75,22.34766a1.07267,1.07267,0,0,1,1.02734-.625,1.09212,1.09212,0,0,1,1.00391.666l2.12988,4.91992a1.37376,1.37376,0,0,0,1.20313.83252c.02246.001.04395.00146.06543.00146a1.35739,1.35739,0,0,0,1.19629-.707l.44043-.78223a10.46435,10.46435,0,0,0,1.31348-5.0835,10.292,10.292,0,0,0-.46191-3.07666,2.16405,2.16405,0,0,1-.087-.59387c1.41052-.16864,2.834-.39429,4.24036-.68933a3.446,3.446,0,0,1,2.88477.70947A3.49638,3.49638,0,0,1,31,20.64014ZM2.5,28a.5.5,0,1,0,.5.5A.5.5,0,0,0,2.5,28ZM29,25.5a.5.5,0,1,0,.5-.5A.5.5,0,0,0,29,25.5ZM6.5,21a.5.5,0,1,0,.5.5A.5.5,0,0,0,6.5,21Zm20,3a.5.5,0,1,0,.5.5A.5.5,0,0,0,26.5,24Zm-19,1a.5.5,0,1,0,.5.5A.5.5,0,0,0,7.5,25Zm17,4a.5.5,0,1,0,.5.5A.5.5,0,0,0,24.5,29Zm3-1a.5.5,0,1,0,.5.5A.5.5,0,0,0,27.5,28Zm-2-8a.5.5,0,1,0,.5.5A.5.5,0,0,0,25.5,20ZM20,29a.5.5,0,1,0,.5.5A.5.5,0,0,0,20,29Zm-6,0a.5.5,0,1,0,.5.5A.5.5,0,0,0,14,29ZM9.5,29a.5.5,0,1,0,.5.5A.5.5,0,0,0,9.5,29Zm6-3a.5.5,0,1,0,.5.5A.5.5,0,0,0,15.5,26Z" />
                    </svg>
                    Dental Implants
                  </button>
                </Link>
                <Link to="/services">
                  {" "}
                  <button type="button" className="serv-btn">
                    <svg
                      className="offer-card-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 64 64"
                      viewBox="0 0 64 64"
                      id="tooth"
                    >
                      <linearGradient
                        id="a"
                        x1="37"
                        x2="37"
                        y1="60"
                        y2="4"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#cde2ff" />
                        <stop offset=".283" stopColor="#dee9f9" />
                        <stop offset=".704" stopColor="#f0f0f3" />
                        <stop offset="1" stopColor="#f7f3f1" />
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M63,19.03c0,4.94-1.41,9.76-4.09,13.92C55.7,37.95,54,43.73,54,49.67C54,55.37,49.37,60,43.67,60H42    c-1.1,0-2-0.9-2-2V47c0-1.65-1.35-3-3-3c-1.65,0-3,1.35-3,3v11c0,1.1-0.9,2-2,2h-1.67C24.63,60,20,55.37,20,49.67    c0-5.94-1.7-11.72-4.91-16.72C12.41,28.79,11,23.97,11,19.03C11,10.74,17.74,4,26.03,4c4.2,0,8.15,1.74,10.97,4.76    C39.82,5.74,43.77,4,47.97,4C56.26,4,63,10.74,63,19.03z"
                      />
                      <path
                        fill="#cde2ff"
                        d="M37,21.968c-1.945,0-3.891-0.37-5.743-1.111c-1.025-0.41-1.524-1.574-1.114-2.6    c0.411-1.026,1.574-1.526,2.6-1.114c2.745,1.098,5.77,1.098,8.515,0c1.027-0.41,2.189,0.089,2.6,1.114    c0.41,1.025-0.089,2.189-1.114,2.6C40.891,21.598,38.945,21.968,37,21.968z"
                      />
                      <linearGradient
                        id="b"
                        x1="8.995"
                        x2="8.995"
                        y1="64"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fda900" />
                        <stop offset="1" stopColor="#fff442" />
                      </linearGradient>
                      <path
                        fill="url(#b)"
                        d="M17.99,51.99c0,0.7-0.35,1.36-0.95,1.72    l-0.02,0.01c-2.78,1.67-4.79,4.29-5.68,7.39l-0.42,1.44C10.68,63.41,9.89,64,9,64c-0.9,0-1.68-0.59-1.92-1.45l-0.4-1.4    c-0.89-3.13-2.91-5.77-5.7-7.43C0.37,53.36,0,52.71,0,52c0-0.7,0.37-1.35,0.97-1.71c2.8-1.68,4.81-4.31,5.7-7.41l0.41-1.43    C7.32,40.59,8.11,40,9,40s1.68,0.59,1.92,1.45l0.41,1.43c0.89,3.1,2.9,5.73,5.67,7.39C17.6,50.63,17.98,51.29,17.99,51.99z"
                      />
                      <linearGradient
                        id="c"
                        x1="43.456"
                        x2="53.954"
                        y1="24.88"
                        y2="14.651"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fff" stopOpacity=".05" />
                        <stop offset="1" stopColor="#384051" stopOpacity=".4" />
                      </linearGradient>
                      <polygon
                        fill="url(#c)"
                        points="54.66 13.79 55.285 25.536 49.624 30.376 37.714 18.466 44.47 11.71"
                      />
                      <linearGradient
                        id="d"
                        x1="53.995"
                        x2="53.995"
                        y1="26"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fda900" />
                        <stop offset="1" stopColor="#fff442" />
                      </linearGradient>
                      <path
                        fill="url(#d)"
                        d="M63.99,12.99c0,0.76-0.42,1.46-1.1,1.8    l-0.01,0.01c-3.28,1.63-5.66,4.6-6.56,8.15l-0.38,1.54C55.72,25.38,54.92,26,54,26s-1.72-0.63-1.94-1.52l-0.37-1.49    c-0.89-3.57-3.29-6.56-6.58-8.2c-0.68-0.34-1.11-1.03-1.11-1.8c0-0.76,0.44-1.45,1.12-1.79c3.28-1.64,5.67-4.61,6.56-8.17    l0.38-1.52C52.28,0.62,53.08,0,54,0s1.72,0.62,1.94,1.51l0.38,1.52c0.89,3.56,3.28,6.53,6.55,8.17    C63.55,11.54,63.99,12.24,63.99,12.99z"
                      />
                    </svg>
                    Teeth Whitening
                  </button>
                </Link>
                <Link to="/services">
                  {" "}
                  <button type="button" className="serv-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2950"
                      height="2950"
                      fill="none"
                      viewBox="0 0 2950 2950"
                      id="braces"
                      className="offer-card-svg"
                    >
                      <g clipPath="url(#a)">
                        <path
                          fill="#C1DCDE"
                          fillRule="evenodd"
                          d="M403.324 2241.31C322.66 2241.31 259.281 2137.6 207.425 2045.41L201.663 2033.89C74.9056 1797.66 97.9525 1624.81 109.476 1503.81C115.238 1440.43 120.999 1394.34 103.714 1359.77C92.1908 1342.48 80.6673 1325.2 74.9056 1307.91C28.8118 1233.01 -5.75847 1169.63 0.00324931 1031.35C0.00324931 887.308 63.3822 789.359 178.617 737.504C276.566 685.648 374.515 720.218 455.179 749.027C483.988 760.55 512.796 772.074 541.605 777.836C628.031 800.883 679.886 783.597 743.265 754.789C754.788 754.789 766.312 749.027 777.835 743.265C795.12 737.504 818.167 749.027 829.691 772.074C835.452 789.359 829.691 806.644 812.406 818.168L991.019 1480.77V1486.53L973.734 2016.61C979.495 2016.61 985.257 2016.61 985.257 2022.37C1008.3 2028.13 1014.07 2056.94 1002.54 2074.22C979.495 2120.32 950.687 2160.65 910.355 2195.22C858.499 2241.31 812.406 2241.31 789.359 2229.79C772.074 2224.03 731.742 2206.74 714.456 2137.6C714.456 2131.84 714.456 2131.84 714.456 2131.84C714.456 2097.27 714.456 2056.94 720.218 2016.61C720.218 1987.8 720.218 1964.75 720.218 1947.46C725.98 1734.28 674.124 1636.33 616.507 1630.57C576.175 1624.81 518.558 1688.19 501.273 1791.9C495.511 1820.71 501.273 1884.09 501.273 1953.23C501.273 2091.51 501.273 2149.12 483.988 2177.93C460.941 2229.79 426.37 2241.31 403.324 2241.31Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#F5F5F5"
                          fillRule="evenodd"
                          d="M691.41 777.835C708.695 772.074 725.98 766.312 743.266 754.789C754.789 754.789 766.312 749.027 777.836 743.265C795.121 737.503 818.168 749.027 829.691 772.074C835.453 789.359 829.691 806.644 812.406 818.168L991.02 1480.77V1486.53L973.734 2016.61C979.496 2016.61 985.258 2016.61 985.258 2022.37C1008.3 2028.13 1014.07 2056.94 1002.54 2074.22C985.258 2120.32 956.449 2154.89 921.879 2183.69C858.5 2062.7 818.168 1930.18 800.883 1791.9C789.359 1693.95 800.883 1601.76 806.645 1503.81C812.406 1469.24 823.93 1382.82 806.645 1354.01C795.121 1330.96 783.598 1313.68 772.074 1290.63C760.551 1267.58 749.027 1244.53 731.742 1215.73C685.648 1117.78 674.125 1031.35 674.125 921.878C674.125 870.023 679.887 818.168 691.41 777.835Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#C1DCDE"
                          fillRule="evenodd"
                          d="M2126.07 2241.31C2051.17 2241.31 1982.03 2131.83 1947.46 2068.45C1935.94 2051.17 1947.46 2028.12 1964.74 2016.6C1964.74 2016.6 1964.74 2016.6 1970.51 2010.84L2137.6 818.162C2120.31 806.638 2108.79 783.592 2120.31 766.306C2131.83 743.26 2154.88 737.498 2172.17 749.021C2206.74 760.545 2235.54 772.068 2264.35 777.83H2270.12C2362.3 800.877 2414.16 777.83 2477.54 754.783C2512.11 743.26 2546.68 725.974 2592.77 720.213C2708.01 697.166 2805.95 720.213 2869.33 800.877C2955.76 904.588 2973.04 1088.96 2909.67 1250.29C2880.86 1313.67 2857.81 1342.48 2846.29 1359.76C2829 1382.81 2829 1382.81 2846.29 1526.85C2869.33 1757.32 2777.15 2079.98 2644.63 2195.21C2581.25 2247.07 2540.92 2235.54 2517.87 2229.78C2494.82 2224.02 2460.25 2200.97 2448.73 2131.83C2442.97 2097.26 2442.97 2045.41 2448.73 1999.31C2448.73 1982.03 2448.73 1958.98 2448.73 1947.46C2454.49 1734.28 2402.63 1630.56 2345.02 1630.56C2304.69 1624.8 2247.07 1688.18 2229.78 1791.89C2229.78 1814.94 2229.78 1861.03 2229.78 1918.65C2235.54 2085.74 2229.78 2149.12 2212.5 2177.93C2189.45 2229.78 2154.88 2241.31 2126.07 2241.31C2131.83 2241.31 2131.83 2241.31 2126.07 2241.31Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#F5F5F5"
                          fillRule="evenodd"
                          d="M2033.88 2189.46C1999.31 2154.89 1964.74 2103.03 1947.46 2068.46C1935.94 2051.18 1947.46 2028.13 1964.74 2016.61C1964.74 2016.61 1964.74 2016.61 1970.51 2010.84L2137.6 818.168C2120.31 806.645 2108.79 783.598 2120.31 766.312C2131.83 743.266 2154.88 737.504 2172.17 749.027C2200.97 760.551 2229.78 772.074 2258.59 777.836C2270.12 812.406 2275.88 852.738 2275.88 893.07C2281.64 1002.54 2264.35 1106.25 2224.02 1204.2C2200.97 1261.82 2172.17 1307.91 2143.36 1354.01C2137.6 1354.01 2137.6 1359.77 2137.6 1359.77C2137.6 1371.29 2137.6 1394.34 2137.6 1400.1C2143.36 1446.2 2149.12 1492.29 2149.12 1538.38C2149.12 1538.38 2149.12 1538.38 2149.12 1544.14C2160.64 1699.71 2143.36 1866.8 2097.26 2016.61C2079.98 2074.22 2056.93 2131.84 2033.88 2189.46Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#C1DCDE"
                          fillRule="evenodd"
                          d="M1215.72 2414.16C1129.3 2414.16 1054.39 2298.93 985.254 2183.69C985.254 2177.93 979.492 2172.17 979.492 2166.41C823.926 1872.56 846.973 1665.14 864.258 1509.57C875.781 1428.91 881.543 1371.29 858.496 1325.2C846.973 1302.15 835.449 1284.87 823.926 1267.58C772.07 1169.63 725.977 1094.73 731.738 921.878C731.738 754.789 800.879 639.554 944.922 564.652C1065.92 507.035 1181.15 547.367 1279.1 587.699C1313.67 604.984 1354 616.507 1382.81 622.269C1503.81 651.078 1572.95 628.031 1659.38 593.46C1699.71 576.175 1740.04 558.89 1791.89 547.367C1930.18 518.558 2051.17 553.128 2131.84 651.078C2183.69 714.457 2212.5 800.882 2218.26 898.832C2224.02 991.019 2206.74 1094.73 2166.41 1186.92C2137.6 1261.82 2108.79 1296.39 2091.5 1319.44C2068.46 1354.01 2068.46 1359.77 2091.5 1544.14C2108.79 1676.66 2091.5 1843.75 2039.65 1999.32C1993.55 2160.65 1918.65 2293.17 1843.75 2356.55C1797.66 2402.64 1745.8 2414.16 1699.71 2402.64C1659.38 2385.35 1636.33 2350.78 1624.8 2293.17C1619.04 2252.84 1624.8 2189.46 1624.8 2137.6C1624.8 2108.79 1630.57 2085.75 1630.57 2062.7C1636.33 1786.14 1561.43 1659.38 1486.52 1653.62C1423.14 1647.85 1348.24 1728.52 1330.96 1866.8C1325.2 1907.13 1325.2 1993.56 1325.2 2079.98C1330.96 2241.31 1325.2 2316.21 1313.67 2350.78C1279.1 2402.64 1244.53 2414.16 1215.72 2414.16Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#4F71B6"
                          fillRule="evenodd"
                          d="M40.332 1250.29C28.8086 1221.48 17.2852 1192.68 11.5234 1152.34C259.277 1238.77 616.504 1313.67 956.445 1354L973.73 1440.43C651.074 1400.1 299.609 1330.96 40.332 1250.29Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#4F71B6"
                          fillRule="evenodd"
                          d="M956.445 1354L973.73 1440.43C921.875 1434.67 870.02 1428.91 818.164 1417.38 818.164 1394.34 818.164 1365.53 806.641 1354 806.641 1348.24 800.879 1342.48 795.117 1336.72 852.734 1342.48 904.59 1348.24 956.445 1354zM2051.17 1451.96L2062.7 1371.29C2356.54 1342.48 2673.44 1290.63 2915.43 1227.25 2915.43 1233.01 2909.67 1238.77 2909.67 1250.3 2892.38 1279.11 2880.86 1302.15 2869.34 1319.44 2627.34 1377.05 2333.5 1428.91 2051.17 1451.96z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#4F71B6"
                          fillRule="evenodd"
                          d="M2051.17 1451.96L2062.7 1371.29C2085.74 1365.53 2108.79 1365.53 2137.6 1365.53C2137.6 1371.29 2137.6 1394.34 2137.6 1400.1C2143.36 1417.39 2143.36 1428.91 2143.36 1440.43C2114.55 1446.2 2079.98 1451.96 2051.17 1451.96Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#4F71B6"
                          fillRule="evenodd"
                          d="M1578.71 1475C1538.38 1475 1492.29 1475 1451.95 1469.24C1411.62 1469.24 1371.29 1469.24 1330.96 1469.24C1307.91 1469.24 1290.62 1451.96 1290.62 1428.91C1290.62 1405.86 1307.91 1388.58 1330.96 1388.58C1371.29 1388.58 1411.62 1388.58 1451.95 1388.58C1492.29 1394.34 1538.38 1394.34 1578.71 1394.34C1601.76 1394.34 1619.04 1411.62 1619.04 1434.67C1619.04 1457.72 1601.76 1475 1578.71 1475ZM875.781 1428.91C875.781 1394.34 875.781 1365.53 864.258 1342.48C973.73 1359.77 1077.44 1371.29 1181.15 1377.05C1204.2 1377.05 1221.48 1400.1 1215.72 1417.39C1215.72 1440.43 1198.44 1457.72 1175.39 1457.72C1077.44 1451.96 979.492 1440.43 875.781 1428.91ZM2074.22 1371.29C2074.22 1388.58 2074.22 1411.62 2079.98 1451.96C1964.75 1457.72 1843.75 1469.24 1734.28 1469.24C1716.99 1469.24 1693.95 1451.96 1693.95 1428.91C1693.95 1405.86 1711.23 1388.58 1734.28 1388.58C1843.75 1388.58 1958.98 1382.82 2074.22 1371.29Z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#4F71B6"
                          fillRule="evenodd"
                          d="M1135.06 1457.71V1371.29C1152.35 1377.05 1163.87 1377.05 1181.16 1377.05 1198.44 1377.05 1215.73 1394.34 1215.73 1411.62V1417.38C1215.73 1440.43 1198.44 1457.71 1175.39 1457.71 1163.87 1457.71 1152.35 1457.71 1135.06 1457.71zM1377.05 1388.57V1469.24C1365.53 1469.24 1348.25 1469.24 1330.96 1469.24 1319.44 1469.24 1302.15 1457.71 1296.39 1446.19V1411.62C1302.15 1400.1 1319.44 1388.57 1330.96 1388.57 1348.25 1388.57 1365.53 1388.57 1377.05 1388.57zM1538.38 1475V1394.34C1555.66 1394.34 1567.18 1394.34 1578.71 1394.34 1601.75 1394.34 1619.04 1411.62 1619.04 1434.67 1619.04 1457.72 1601.75 1475 1578.71 1475 1567.18 1475 1555.66 1475 1538.38 1475zM1780.37 1388.58V1469.24C1768.84 1469.24 1751.56 1469.24 1734.27 1469.24 1722.75 1469.24 1705.46 1457.72 1699.7 1446.2V1411.62C1705.46 1400.1 1722.75 1388.58 1734.27 1388.58 1751.56 1388.58 1763.08 1388.58 1780.37 1388.58z"
                          clipRule="evenodd"
                        />
                        <path
                          fill="#4F71B6"
                          fillRule="evenodd"
                          d="M1336.72 1596H1175.39C1152.35 1596 1135.06 1578.71 1135.06 1555.67V1313.68C1135.06 1290.63 1152.35 1273.34 1175.39 1273.34H1336.72C1359.77 1273.34 1377.05 1290.63 1377.05 1313.68V1555.67C1377.05 1578.71 1359.77 1596 1336.72 1596zM1740.04 1596H1578.71C1555.66 1596 1538.38 1578.71 1538.38 1555.67V1313.68C1538.38 1290.63 1555.66 1273.34 1578.71 1273.34H1740.04C1763.08 1273.34 1780.37 1290.63 1780.37 1313.68V1555.67C1780.37 1578.71 1763.08 1596 1740.04 1596z"
                          clipRule="evenodd"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <rect width="2950" height="2950" fill="#fff" />
                        </clipPath>
                      </defs>
                    </svg>
                    Dental Bridges
                  </button>
                </Link>
                <Link to="/services">
                  {" "}
                  <button type="button" className="serv-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      id="dentures"
                      className="offer-card-svg"
                    >
                      <path
                        fill="#db5669"
                        d="M47,14v4H1V14A6,6,0,0,1,5.37,8.23C6.51,7.9,4.05,8,41,8A6,6,0,0,1,47,14Z"
                      />
                      <path
                        fill="#f26674"
                        d="M47,14.27a5.42,5.42,0,0,0-7.14.14,6,6,0,0,0-6.32-.88c-1.39.63-.69.79-1.31.22A6,6,0,0,0,24,13.54a6,6,0,0,0-8.55.56,5.92,5.92,0,0,0-7.28.31A5.5,5.5,0,0,0,3,13.21a6,6,0,0,1,2.37-5C6.51,7.9,4.05,8,41,8A6,6,0,0,1,47,14.27Z"
                      />
                      <path
                        fill="#db5669"
                        d="M47,30c0,4,.23,5.32-.88,7.12A6,6,0,0,1,41,40H7a6,6,0,0,1-6-6V30Z"
                      />
                      <path
                        fill="#f26674"
                        d="M47,30c0,4,.23,5.32-.88,7.12-2,1.23-.51.88-37.12.88a6,6,0,0,1-6-6V30Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M32,18v4a2,2,0,0,1-2,2H26a2,2,0,0,1-2-2V18a4,4,0,0,1,8,0Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M32,18v4H28a2,2,0,0,1-2-2c0-4.09-.12-4.6.36-5.64A4,4,0,0,1,32,18Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M40,19v3a2,2,0,0,1-2,2H34a2,2,0,0,1-2-2V19a4,4,0,0,1,8,0Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M40,19v3H36a2,2,0,0,1-2-2c0-3.25-.09-3.65.36-4.64A4,4,0,0,1,40,19Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M47,18.5V22a2,2,0,0,1-2,2H42a2,2,0,0,1-2-2V18.5a3.5,3.5,0,0,1,7,0Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M47,18.5V22H44a2,2,0,0,1-2-2c0-3.67-.08-4,.24-4.76A3.5,3.5,0,0,1,47,18.5Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M24,18v4a2,2,0,0,1-2,2H18a2,2,0,0,1-2-2c0-3.71-.33-5.31,1.17-6.83A4,4,0,0,1,24,18Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M24,18v4H20a2,2,0,0,1-2-2c0-4.09-.12-4.6.36-5.64A4,4,0,0,1,24,18Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M16,19v3a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2c0-2.82-.29-4.35,1.17-5.83A4,4,0,0,1,16,19Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M16,19v3H12a2,2,0,0,1-2-2c0-3.25-.09-3.65.36-4.64A4,4,0,0,1,16,19Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M8,18.5V22a2,2,0,0,1-2,2H3a2,2,0,0,1-2-2c0-3.23-.29-4.67,1-6A3.5,3.5,0,0,1,8,18.5Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M8,18.5V22H5a2,2,0,0,1-2-2c0-3.67-.08-4,.24-4.76A3.5,3.5,0,0,1,8,18.5Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M32,26c0,3.71.33,5.31-1.17,6.83A4,4,0,0,1,24,30V26a2,2,0,0,1,2-2h4A2,2,0,0,1,32,26Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M32,26c0,2.78.4,5.67-1.28,6.93A4,4,0,0,1,26,29c0-3.93-.12-4.34.27-5H30A2,2,0,0,1,32,26Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M40,26c0,2.82.29,4.35-1.17,5.83A4,4,0,0,1,32,29V26a2,2,0,0,1,2-2h4A2,2,0,0,1,40,26Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M40,26c0,2.06.35,4.71-1.28,5.93A4,4,0,0,1,34,28c0-3.07-.09-3.39.27-4H38A2,2,0,0,1,40,26Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M47,26c0,3.23.29,4.65-1,6a3.5,3.5,0,0,1-6-2.46V26a2,2,0,0,1,2-2h3A2,2,0,0,1,47,26Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M47,26c0,3.23.29,4.65-1,6a3.49,3.49,0,0,1-4-3.46c0-3.72-.09-3.89.27-4.5H45A2,2,0,0,1,47,26Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M24,26c0,3.62.36,5.41-1.28,6.93a4,4,0,0,1-5.55-.1C15.7,31.34,16,30.06,16,26a2,2,0,0,1,2-2h4A2,2,0,0,1,24,26Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M24,26c0,3.62.36,5.41-1.28,6.93a4,4,0,0,1-3.55-1.1C17.7,30.34,18,29.06,18,25a2,2,0,0,1,.27-1H22A2,2,0,0,1,24,26Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M16,26c0,2.8.31,4.46-1.28,5.93a4,4,0,0,1-5.55-.1C7.69,30.33,8,28.77,8,26a2,2,0,0,1,2-2h4A2,2,0,0,1,16,26Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M16,26c0,2.8.31,4.46-1.28,5.93a4,4,0,0,1-3.55-1.1C9.69,29.33,10,27.77,10,25a2,2,0,0,1,.27-1H14A2,2,0,0,1,16,26Z"
                      />
                      <path
                        fill="#dad7e5"
                        d="M8,26c0,3.23.29,4.65-1,6a3.48,3.48,0,0,1-5,0c-1.35-1.33-1-2.75-1-6a2,2,0,0,1,2-2H6A2,2,0,0,1,8,26Z"
                      />
                      <path
                        fill="#edebf2"
                        d="M8,26c0,3.23.29,4.65-1,6A3.43,3.43,0,0,1,4,31c-1.35-1.33-1-2.75-1-6a2,2,0,0,1,.27-1H6A2,2,0,0,1,8,26Z"
                      />
                    </svg>
                    Aligners
                  </button>
                </Link>
                <Link to="/services">
                  <button type="button" className="serv-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 96 96"
                      id="dental-nerve"
                      className="offer-card-svg"
                    >
                      <g>
                        <path
                          fill="#ff526e"
                          d="M90.17,45.56a15.56,15.56,0,0,1-10.81-4.17,18.37,18.37,0,0,0-12.74-5.12H28.13a18.37,18.37,0,0,0-12.74,5.12A15.56,15.56,0,0,1,4.58,45.56H1.27V82.49H95.55V45.56Z"
                        />
                        <path
                          fill="#d22a69"
                          d="M95.55,45.56v2.83H83.75a6.85,6.85,0,0,0-6.52,4.78C74.85,60.66,76.37,58,67,69.1a6,6,0,0,1-10-1.46l-2.21-5.12a6.65,6.65,0,0,0-12.42.59l-1.1,3.37a6.38,6.38,0,0,1-10,3l-10-7.91c-2.09-1.65-2.46-3.18-4.57-8.12a6.43,6.43,0,0,0-5.92-3.9H1.27v-4c4.2,0,7.5.29,11.57-2a13.7,13.7,0,0,0,2.89-2.14,18.23,18.23,0,0,1,12.66-5.08H67.51a18.24,18.24,0,0,1,12.66,5.08A15.43,15.43,0,0,0,90.9,45.56Z"
                        />
                        <path
                          fill="#d22a69"
                          d="M11.82,55.59l1.4,2.3A1.13,1.13,0,0,1,13,59.34l-.7.58a2.31,2.31,0,0,1-3.44-.59l-2-3.3a1.13,1.13,0,0,1,.86-1.7l1.39-.12A2.87,2.87,0,0,1,11.82,55.59Z"
                        />
                        <path
                          fill="#ff98a0"
                          d="M95.55,71.59c-1.67-1.53-2.6-2.67-4.53-3l-2.71-.4a1.12,1.12,0,0,1-.9-1.49,2.19,2.19,0,0,1,2-1.63L92.07,65a5.08,5.08,0,0,1,3.48,1.23Z"
                        />
                        <path
                          fill="#d22a69"
                          d="M45.84,66.13l.2-.49a2.06,2.06,0,0,1,2.09-1.26l2,.19a1.08,1.08,0,0,1,1,1.26l-.12.61a1.06,1.06,0,0,1-1,.86l-3.08.31A1.07,1.07,0,0,1,45.84,66.13Z"
                        />
                        <path
                          fill="#e6ecf2"
                          d="M70.72,39.44A15.69,15.69,0,0,0,74,25.8c-1.3-5.9-6.26-10-12-11.77a12.76,12.76,0,0,0-8.88.66,14.23,14.23,0,0,1-11.14.21,15.69,15.69,0,0,0-19,23.29c.84,1.24,2.08,3.17,3.21,5a9.31,9.31,0,0,1,1.16,6.87,24.94,24.94,0,0,0-.69,4.83,22.17,22.17,0,0,0,5.53,14.74,2.11,2.11,0,0,0,1.6.71,2.16,2.16,0,0,0,2.05-2.86A16.14,16.14,0,0,1,35,62.37c0-5.27,5.54-10.82,9.19-13.9a4.71,4.71,0,0,1,6.25,0c3.66,3.08,9.21,8.63,9.21,13.9a16.14,16.14,0,0,1-.83,5.11,2.17,2.17,0,0,0,2,2.86,2.09,2.09,0,0,0,1.6-.71A22.21,22.21,0,0,0,68,54.89a26.17,26.17,0,0,0-.73-5,9.24,9.24,0,0,1,1-6.65A28,28,0,0,1,70.72,39.44Z"
                        />
                        <path
                          fill="#c3cef2"
                          d="M33.66,50.15A15.51,15.51,0,0,0,31.49,39.9C30.34,38,29,36,28.12,34.65A9.4,9.4,0,0,1,39.5,20.7a20.53,20.53,0,0,0,16-.22A6.43,6.43,0,0,1,60.08,20c4.14,1.28,7,3.94,7.73,7.11A9.37,9.37,0,0,1,65.9,35.4,33.32,33.32,0,0,0,62.79,40a15.54,15.54,0,0,0-1.92,10.08,46.27,46.27,0,0,0-6.41-6.46,11,11,0,0,0-14.36,0A47.86,47.86,0,0,0,33.66,50.15Z"
                        />
                        <path
                          fill="#ff526e"
                          d="M35.59,29.78a5.77,5.77,0,0,0-4.88,8.86q.38.59.78,1.26a15.51,15.51,0,0,1,2.17,10.25,47.86,47.86,0,0,1,6.44-6.5,11,11,0,0,1,14.36,0,46.27,46.27,0,0,1,6.41,6.46A15.54,15.54,0,0,1,62.79,40q.45-.78.87-1.44a5.76,5.76,0,0,0-4.9-8.82Z"
                        />
                        <path
                          fill="#d22a69"
                          d="M37.81 35.45c-.49 0-.66-.24-1.18-.77A1 1 0 0138 33.27l.47.47A1 1 0 0137.81 35.45zM43.1 38.43a1 1 0 01-.71-1.71l.26-.26a1 1 0 011.42 1.41C43.73 38.21 43.55 38.43 43.1 38.43zM47 35.06H46.7a1 1 0 010-2H47a1 1 0 010 2zM52.34 37.46c-.52 0-.77-.34-1.08-.66a1 1 0 111.41-1.41l.37.37A1 1 0 0152.34 37.46zM56.73 41.55A1 1 0 0156 39.84l.51-.51a1 1 0 011.42 0 1 1 0 010 1.41C57.35 41.34 57.21 41.55 56.73 41.55zM56.51 35.21a1 1 0 01-1-1v-.59a1 1 0 012 0v.59A1 1 0 0156.51 35.21zM38.47 41.29a1 1 0 01-1-1V39.6a1 1 0 112 0v.69A1 1 0 0138.47 41.29z"
                        />
                        <path
                          fill="#eb2a5f"
                          d="M36.07 51l-2 1.32c.15-.64.32-1.28.5-1.91a1 1 0 10-1.91-.57 38.06 38.06 0 00-1.48 7.88l-.61-.85A1 1 0 0029 58.06L31.07 61a46.89 46.89 0 001.32 10.85l-4.14-2.36a1 1 0 10-1 1.73l5.66 3.23.44 2.19a1 1 0 002-.4c-1.61-8-3.06-13.06-1.76-21.08l3.63-2.45a1 1 0 00.27-1.39A1 1 0 0036.07 51zM68.1 70a1 1 0 00-1.3-.57l-4.54 1.79a42.37 42.37 0 001.05-13.46L65.43 54a1 1 0 00-1.75-1l-.79 1.41a37.83 37.83 0 00-1.06-4.57 1 1 0 00-1.24-.67 1 1 0 00-.68 1.24 37.94 37.94 0 01.83 18.18l-1.53 7.61a1 1 0 002 .39l.61-3 5.74-2.26A1 1 0 0068.1 70z"
                        />
                        <path
                          fill="#ff98a0"
                          d="M82.65,70.42c-4,0-6.82-.27-10.61,1.7l-5,2.61a15.06,15.06,0,0,1-6.93,1.69H35.69a23.24,23.24,0,0,1-9.85-2.18l-7.5-3.48a23.31,23.31,0,0,0-9.85-2.18H1.27V82.49H95.55V76.42l-6.39-4.09A12.15,12.15,0,0,0,82.65,70.42Z"
                        />
                        <path
                          fill="#ffcfc3"
                          d="M1.27 76.47H18.32a20.71 20.71 0 019.26 2.19l7.6 3.83H1.27zM51.61 82.49c5.33-2.31 6.42-3 9-3 5 0 8.13.39 12.11-2 3.73-2.22 5-3.32 7.66-3.32 6.44 0 4.34-.6 15.15 6v2.31z"
                        />
                        <path
                          fill="#ff526e"
                          d="M24,44.56a1,1,0,0,1-1,1H5a16,16,0,0,0,7.84-2H23A1,1,0,0,1,24,44.56Z"
                        />
                        <path
                          fill="#ffcfc3"
                          d="M11.08,74.71H4.65a1,1,0,0,1,0-2h6.43a1,1,0,0,1,0,2Z"
                        />
                        <path
                          fill="#ff98a0"
                          d="M83.07,79.42H78.13a1,1,0,0,1,0-2h4.94a1,1,0,0,1,0,2Z"
                        />
                      </g>
                    </svg>
                    Root Canal Treatment
                  </button>
                </Link>
              </div>
            </div>
            <section className="testimonials-section">
              <h2>Happy Smiles all year round</h2>
              <p>
                We’re committed to treating patients with the compassion and
                respect they deserve while still offering fair dental pricing.
              </p>

              <div className="testimonial-container">
                <div className="testimonial">
                  <div className="stars">★★★★★</div>
                  <p>
                    It was a pleasant experience. The doctor and supporting
                    staff are very dedicated and experienced. It is quite a
                    spacious and well-equipped clinic. Very much satisfied with
                    their treatment.
                  </p>
                  <h4>Naveen Kumar</h4>
                </div>

                <div className="testimonial">
                  <div className="stars">★★★★★</div>
                  <p>
                    One of the best dental clinics that provide adequate
                    treatment. Their teamwork is professional, the staff is
                    always smiling and the doctor is very friendly. Highly
                    recommended.
                  </p>
                  <h4>Pranathi Sri</h4>
                </div>
              </div>

              <Link to="/appointment">
                <button type="button" className="appointment-btn">
                  Book an appointment today
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
