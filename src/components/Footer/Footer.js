import React from "react";
import "./footerStyle.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer-container">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mt-5">
              <div>
                <h3 className="color">ACE Solution</h3>
                <p className="mb-30 footer-desc pt-3">
                  We are registered with the Security Exchange Commission of
                  Pakistan (SECP), Pakistan Software Export Board (PSEB) and
                  Federal Board of Revenue (FBR). We maintain all standards,
                  legislation, and protocols for all of our products and
                  services in compliance with ISO and IEEE standards.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-6 mt-5 mx-3 service">
              <div>
                <h4>Services</h4>
                <ul className="list-unstyled pt-3">
                  <li>
                    <a href="/" className="text-decoration-none pt-3 pb-5">
                      UI/UX
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      Software Quality Assurance
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      Business Intelligence
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      WordPress Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mt-5 mx-4 service">
              <div className="">
                <h4>Quick Link</h4>
                <ul className="list-quik-link list-unstyled pt-3">
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none pt-3">
                      FAQS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 mt-5 service">
              <div>
                <h4>Contact Info</h4>
                <ul className="list-unstyled pt-1">
                  <li className="d-flex pt-3">
                    <i className="bi bi-geo-alt"></i>
                    <p className="mx-2 text-wrap text-start area">
                      240 FF, DHA Phase 4, Lahore, Pakistan
                    </p>
                  </li>
                  <li className="d-flex">
                    <i className="bi bi-telephone"></i>
                    <p className="mx-2 area">+923234307323</p>
                  </li>
                  <li className="d-flex">
                    <i className="bi bi-envelope"></i>
                    <p className="mx-2 area">
                      <a href="/mailto:business@acesolution.com">
                        business@acesolution.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <h3 className="color">Newsletter</h3>
                    <p>Subscribe our Newsletters.</p>
                    <div className="input-group mb-3 pt-2">
                      <input
                        id="sub_email"
                        type="text"
                        className="form-control Newsletter-from"
                        placeholder="Your email address"
                        aria-label="Recipient's username"
                      />
                      <button
                        className="btn-round btn-outline-secondary"
                        type="button"
                        id="Newsletter-btn"
                        aria-label="Right Align"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 54 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d)">
                            <circle
                              cx="27"
                              cy="27"
                              r="23"
                              transform="rotate(-90 27 27)"
                              fill="white"
                            ></circle>
                          </g>
                          <path
                            d="M36.8488 21.9417C36.7787 21.8172 36.6744 21.7152 36.5484 21.6478C36.4223 21.5804 36.2796 21.5504 36.137 21.5612L18.6087 22.8405C18.4569 22.8537 18.3128 22.9127 18.1954 23.0097C18.078 23.1067 17.993 23.237 17.9516 23.3835C17.9102 23.5299 17.9144 23.6855 17.9636 23.8296C18.0128 23.9736 18.1047 24.0994 18.2271 24.1901L23.734 28.4201L29.6126 25.1254L30.3437 26.431L24.4414 29.7268L25.1744 36.6287C25.19 36.7781 25.2501 36.9195 25.347 37.0344C25.4439 37.1493 25.5731 37.2326 25.7178 37.2734C25.8647 37.3116 26.0197 37.3046 26.1624 37.2531C26.3051 37.2016 26.4288 37.1081 26.5172 36.985L36.7863 22.7423C36.8716 22.6286 36.9228 22.4929 36.9338 22.3512C36.9449 22.2094 36.9154 22.0674 36.8488 21.9417Z"
                            fill="#21212B"
                          ></path>
                          <defs>
                            <filter
                              id="filter0_d"
                              x="0"
                              y="0"
                              width="54"
                              height="54"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              ></feFlood>
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              ></feColorMatrix>
                              <feOffset></feOffset>
                              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow"
                                result="shape"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="d-flex justify-content-center">
  
        <div className="copyright">
          <p>Developed and maintained by <a href="/" target="_blank">company</a></p>
        </div>
      </div> */}
          <div className="container-fluid" id="services2-footer-end">
            <div className="container-xl">
              <div className="row">
                <div className="col-lg-6 col-xm-12 text-white pt-4 term">
                  <p className="text-white fs-14">
                    © 2021 ACE Technologies. All Rights Reserved.
                  </p>
                </div>
                <div
                  className="col-lg-6 col-xm-12 float-end pt-4 pb-3 term"
                  id="Scroller_btn"
                >
                  <div className="d-flex float-end">
                    <a href="/" className="text-decoration-none">
                      <div className="text-white me-5 fs-14">
                        Terms &amp; Services
                      </div>
                    </a>
                    <a href="/" className="text-decoration-none">
                      <div className="text-white me-5 fs-14">
                        Privacy Policy
                      </div>
                    </a>
                    <div>
                      <a
                        href="/"
                        className="float-end top"
                        id="web-scroller-btn"
                        aria-label="ZAPTA Technologies web-scroller button"
                      >
                        <div className="white-circle position-relative">
                          <div className="position-absolute top-50 start-50 translate-middle">
                            <svg
                              width="18"
                              height="10"
                              viewBox="0 0 18 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7738e-05 8.34077C-0.000564575 8.12731 0.0418243 7.9164 0.124138 7.72354C0.206453 7.53068 0.326603 7.36076 0.475758 7.22628L8.18931 0.325041C8.41935 0.114887 8.70789 0 9.00567 0C9.30344 0 9.59198 0.114887 9.82202 0.325041L17.5356 7.46918C17.7981 7.71171 17.9632 8.06022 17.9946 8.43804C18.0259 8.81586 17.9209 9.19204 17.7027 9.48383C17.4845 9.77562 17.1709 9.95912 16.831 9.99395C16.491 10.0288 16.1526 9.91211 15.89 9.66958L8.99924 3.28272L2.10846 9.45526C1.91975 9.62998 1.68997 9.74096 1.44628 9.77508C1.2026 9.8092 0.955223 9.76503 0.733421 9.64779C0.511621 9.53054 0.324682 9.34514 0.194721 9.11351C0.0647602 8.88188 -0.00278091 8.61372 8.7738e-05 8.34077Z"
                                fill="#21212B"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
