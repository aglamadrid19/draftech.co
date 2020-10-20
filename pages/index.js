import React, { useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";


export default function Index() {
  return (
    <>
      <Navbar />
      <main id="hero">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(" + require("assets/img/hero.png") + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div>
                  {/* <img src={require("assets/img/logo.svg")} style={{margin: `1em`}}></img> */}
                  <h1 className="text-white font-semibold text-4xl">
                    Changing Telecom Infrastructure one design at a time.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Draftech International
                  </p>
                  <div className="mt-10">
                    <Link 
                      to="contact"
                      spy={true}
                      smooth={true}
                    >
                      <a href="" style={{backgroundColor: `#44d9e6`}} class="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">Contact Us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="services" className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div style={{width: `5em`, height: `5em`}} className="text-white p-1 text-center inline-flex items-center justify-center mb-5 shadow-lg rounded-full">
                      <img src={require("assets/img/autocad.svg")}></img>
                    </div>
                    <h6 className="text-xl font-semibold">AutoCAD Design</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      This is the industry standard for
                      drafting and design services across the globe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div style={{width: `5em`, height: `5em`, padding: `0.5em`}} className="text-white p-1 text-center inline-flex items-center justify-center mb-5 shadow-lg rounded-full">
                      <img src={require("assets/img/att.svg")}></img>
                    </div>
                    <h6 className="text-xl font-semibold">G - Technology</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Our team of professionals have years of
                      experience using this proprietary software
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div style={{width: `5em`, height: `5em`}} className="text-white p-1 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                      <img src={require("assets/img/gis.svg")}></img>
                    </div>
                    <h6 className="text-xl font-semibold">GIS</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      We can transition our designs to GIS software
                      therefore provide a one stop solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div> */}
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
                  Mission
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  We realized there was a lot of inefficiencies in the telecom design industry and set out to provide a solution.
                  
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                We have leveraged our team of telecom experts positioned all over to world to bring together world class experience as well as a team that works around the clock in order to complete projects efficiently and quickly.
                </p>
                {/* <Link href="/">
                  <a href="#pablo" className="font-bold text-gray-800 mt-8">
                    Check Notus NextJS!
                  </a>
                </Link> */}
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/why.png")}
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/how.png")}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 mt-6 shadow-lg rounded-full bg-gray-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div> */}
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  </p>
                  <h3 className="text-3xl font-semibold">Why us?</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  </p>
                  <ul className="list-none ml-auto">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-edit"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            We use the latest design techniques
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-smile"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Satisfaction is our priority
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-drafting-compass"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Commitment to detail</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-2xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 mr-3">
                            <i className="fas fa-coffee"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">24 Hour Work Days</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-12 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Stay in touch with us
                </h2>
                {/* <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap mt-12 mb-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Have Questions?
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  <a href="mailto: Info@draftech.co">
                    Info@draftech.co
                  </a>
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Call us
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                <a href="tel:+1 305-306-7407">
                  +1 305-306-7407
                </a>
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-address-card text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Address
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  <a href="https://www.google.com/maps/place/14160+Palmetto+Frontage+Rd,+Miami+Lakes,+FL+33016/@25.9022621,-80.3312458,17z/data=!4m13!1m7!3m6!1s0x88d9bb2c37bbf103:0x2765d2631acd2ed3!2s14160+Palmetto+Frontage+Rd,+Miami+Lakes,+FL+33016!3b1!8m2!3d25.9022621!4d-80.3290571!3m4!1s0x88d9bb2c37bbf103:0x2765d2631acd2ed3!8m2!3d25.9022621!4d-80.3290571">
                    14160 Palmetto Frontage Rd, Miami Lakes, FL 33016
                  </a>                  
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      
                    <form
                      action="https://formspree.io/f/xleobrwp"
                      method="POST"
                    >

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Your email:
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        name="emailFrom"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                        name="message"
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
