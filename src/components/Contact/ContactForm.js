import React from "react";
import "./ContactStyle.css";

const ContactForm = () => {
  return (
    <div className="container-fluid p-lg-5 p-md-5 p-sm-5 py-5 main">
      <div className="row" id="Call_book">
        <div className="col-12">
          <h2 className="text-center" style={{marginTop:'-50px'}}>
            Talk to us and get your project moving!
          </h2>
          <p className="text-center pt-2">
            Contact us for free Consultation,time &amp; cost for your Projects
          </p>
        </div>
      </div>
      <div className="background">
        <div className="container-fluid new_bg transit">
          <div className="row ms-2">
            <div className="col-md-6 spcl_mb mt-5">
              <div className="row">
                <div className="col-sm-12 mb-4 text-left" id="home_img">
                  <div className="pb-4 ms-2">
                    <h4 className="text-white">Pakistan office</h4>
                    <div className="address">
                      <div className=" contact-footer text-white">
                        <h6 className="fs-14">Mughalpura Lahore, Pakistan</h6>
                      </div>
                    </div>
                    <a className="address text-decoration-none" href="/">
                      <div className=" contact-footer text-white">
                        <h6 className="fs-14">Info.pk@acesolution.com</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col fd_3 mb-3" id="karachi_img">
                  <div className="pb-4 ms-2">
                    <h4 className="text-white">UAE Office</h4>
                    <div className="address">
                      <div className="contact-footer">
                        <h6 className="fs-14 text-white">
                          Q09, France cluster, international city Dubai, united
                          Arab emirates
                        </h6>
                      </div>
                    </div>
                    <a className="address text-decoration-none" href="/">
                      <div className=" contact-footer">
                        <h6 className="fs-14 text-white ">
                          info.uae@acesolution.com
                        </h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col" id="capital_img">
                  <div className="pb-4 ms-2">
                    <h4 className="text-white">UK Office</h4>
                    <div className="address">
                      <div className="contact-footer">
                        <h6 className="fs-14 text-white">
                          West Tower, 371 Deansgate, Manchester M15 4UP, United
                          Kingdom
                        </h6>
                      </div>
                    </div>
                    <a className="address text-decoration-none" href="/">
                      <div className=" contact-footer">
                        <h6 className="fs-14 text-white">
                          info.uk@acesolution.com
                        </h6>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-5" id="Booking-form">
              <div className="fdms-5">
                <form className="row g-3 needs-validation">
                  <div className="col-md-6">
                    <label
                      htmlFor="First-Name"
                      className="form-label zepta-label text-dark"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      className="form-control zepta-control text-dark"
                      placeholder="Example: John"
                      aria-label="First name"
                      id="First-Name"
                      required
                      name="name"
                    />
                    <div className="invalid-feedback">
                      {" "}
                      Please enter a valid username.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="Email"
                      className="form-label zepta-label text-dark"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control zepta-control"
                      id="Email"
                      placeholder="Example: Johndoe@gmail.com"
                      required=""
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <div className="invalid-feedback">
                      {" "}
                      Please enter a valid email.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4">
                      <label
                        htmlFor="text-msg"
                        className="form-label zepta-label text-dark"
                      >
                        Your Message *
                      </label>
                      <textarea
                        className="form-control zepta-control"
                        id="text-msg"
                        placeholder="Tell us a little bit your requirements"
                        rows="5"
                        required=""
                        name="message"
                      ></textarea>
                      <div className="invalid-feedback">
                        {" "}
                        Please enter your message.
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary book-call-btn call"
                    >
                      Book a call
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
