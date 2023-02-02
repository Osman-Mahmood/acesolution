import React from "react";
import "../components/Styles/Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="container-xl">
        <div className="row pt-40">
          <div className="col-12">
            <h1 className="fs-mob text-center mb-0 mt-5">
              BLOGS
            </h1>
            <p className="text-center pt-40 mt-3">
              Diving deep into the ocean of technology
            </p>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="row mt-3">
          <div className="col-md-8">
            <div className="row mb-28">
              <div className="col-12">
                <div className="blog-style">
                  <div className="card blogs-card">
                    <img
                      src="https://zaptatech.com/public/uploads/img/1618165512.jpg"
                      className="img-responsive w-100 rounded"
                      alt="Here is a blog img"
                    />
                    <div className="card-img-overlay">
                      <div className="position-absolute bottom-0 end-0">
                        <div className="_mt-50">
                          <span className="badge blog-pill">UX UI Design </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a className="no-under text-decoration-none" href="/">
                          <h3 className="">
                            Why ACE Technologies is the best UIUX design
                            company in Pakistan?
                          </h3>
                        </a>
                      </div>
                      <div className="text-center">
                        <a
                          className="no-style text-decoration-none"
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#social-media"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M23.9918 11.9936L13.0541 0V7.18433H11.7836C8.63617 7.18433 5.677 8.41003 3.45135 10.6357C1.22571 12.8613 0 15.8205 0 18.9681V24L2.09912 21.7C4.90704 18.6237 8.89288 16.8441 13.0541 16.8036V23.9874L23.9918 11.9936ZM1.40643 20.3844V18.9681C1.40643 16.1962 2.48584 13.5901 4.4458 11.6301C6.40576 9.67016 9.01172 8.59076 11.7836 8.59076H14.4604V3.62933L22.0886 11.9936L14.4604 20.358V15.3966H13.1986C8.7594 15.3966 4.49048 17.2084 1.40643 20.3844Z"
                                fill="#324894"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <h6 className="fs-12 fw-4 mb-0 text-center">Share</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="d-flex">
                        <div className="_mt-5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                              fill="#324894"
                            ></path>
                            <path
                              d="M11.9 1.40001H11.2V3.50001C11.2 3.68566 11.1263 3.86371 10.995 3.99498C10.8637 4.12626 10.6857 4.20001 10.5 4.20001C10.3143 4.20001 10.1363 4.12626 10.005 3.99498C9.87375 3.86371 9.8 3.68566 9.8 3.50001V1.40001H4.2V3.50001C4.2 3.68566 4.12625 3.86371 3.99497 3.99498C3.8637 4.12626 3.68565 4.20001 3.5 4.20001C3.31435 4.20001 3.1363 4.12626 3.00503 3.99498C2.87375 3.86371 2.8 3.68566 2.8 3.50001V1.40001H2.1C1.54305 1.40001 1.0089 1.62126 0.615076 2.01509C0.221249 2.40891 0 2.94305 0 3.50001V5.60001H14V3.50001C14 2.94305 13.7788 2.40891 13.3849 2.01509C12.9911 1.62126 12.457 1.40001 11.9 1.40001Z"
                              fill="#324894"
                            ></path>
                          </svg>
                        </div>
                        <div className="ps-3">
                          <h6 className="fs-14">Posted on: 2021-04-11</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex left_ps ps-40">
                        <div className="d-flex">
                          <div className="_mt-5">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 0C7.6575 0 9 1.3425 9 3C9 4.6575 7.6575 6 6 6C4.3425 6 3 4.6575 3 3C3 1.3425 4.3425 0 6 0ZM6 12C6 12 12 12 12 10.5C12 8.7 9.075 6.75 6 6.75C2.925 6.75 0 8.7 0 10.5C0 12 6 12 6 12Z"
                                fill="#324894"
                              ></path>
                            </svg>
                          </div>
                          <div className="ps-3">
                            <h6 className="fs-14">Admin</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="pt-2"></p>
                  <p>
                    When it comes to UI/UX design, ACE Technologies is the best
                    UI/UX design company in Pakistan. We specialize in design,
                    strategy and development to develop an intriguing
                    interfzapta.
                  </p>
                  <p></p>
                  <div className="d-flex">
                    <div>
                      <a
                        className="text-decoration-none"
                        href="/"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="fs-14">Read More</span>
                        <svg
                          width="22"
                          height="17"
                          viewBox="0 0 10 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 1L9 4.5L5.5 8"
                            stroke="#324894"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M9 4.5H1"
                            stroke="#324894"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-28">
              <div className="col-12">
                <div className="blog-style">
                  <div className="card blogs-card">
                    <img
                      src="https://zaptatech.com/public/uploads/img/1618164088.jpg"
                      className="img-responsive w-100 rounded"
                      alt="Here is a blog img"
                    />
                    <div className="card-img-overlay">
                      <div className="position-absolute bottom-0 end-0">
                        <div className="_mt-50">
                          <span className="badge blog-pill">Outsourcing </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a className="no-under text-decoration-none" href="/">
                          <h3 className="">
                            The Best outsourcing countries for software
                            development in 2021
                          </h3>
                        </a>
                      </div>
                      <div className="text-center">
                        <a
                          className="no-style text-decoration-none"
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#social-media"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M23.9918 11.9936L13.0541 0V7.18433H11.7836C8.63617 7.18433 5.677 8.41003 3.45135 10.6357C1.22571 12.8613 0 15.8205 0 18.9681V24L2.09912 21.7C4.90704 18.6237 8.89288 16.8441 13.0541 16.8036V23.9874L23.9918 11.9936ZM1.40643 20.3844V18.9681C1.40643 16.1962 2.48584 13.5901 4.4458 11.6301C6.40576 9.67016 9.01172 8.59076 11.7836 8.59076H14.4604V3.62933L22.0886 11.9936L14.4604 20.358V15.3966H13.1986C8.7594 15.3966 4.49048 17.2084 1.40643 20.3844Z"
                                fill="#324894"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <h6 className="fs-12 fw-4 mb-0 text-center">Share</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="d-flex">
                        <div className="_mt-5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                              fill="#324894"
                            ></path>
                            <path
                              d="M11.9 1.40001H11.2V3.50001C11.2 3.68566 11.1263 3.86371 10.995 3.99498C10.8637 4.12626 10.6857 4.20001 10.5 4.20001C10.3143 4.20001 10.1363 4.12626 10.005 3.99498C9.87375 3.86371 9.8 3.68566 9.8 3.50001V1.40001H4.2V3.50001C4.2 3.68566 4.12625 3.86371 3.99497 3.99498C3.8637 4.12626 3.68565 4.20001 3.5 4.20001C3.31435 4.20001 3.1363 4.12626 3.00503 3.99498C2.87375 3.86371 2.8 3.68566 2.8 3.50001V1.40001H2.1C1.54305 1.40001 1.0089 1.62126 0.615076 2.01509C0.221249 2.40891 0 2.94305 0 3.50001V5.60001H14V3.50001C14 2.94305 13.7788 2.40891 13.3849 2.01509C12.9911 1.62126 12.457 1.40001 11.9 1.40001Z"
                              fill="#324894"
                            ></path>
                          </svg>
                        </div>
                        <div className="ps-3">
                          <h6 className="fs-14">Posted on: 2021-04-11</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex left_ps ps-40">
                        <div className="d-flex">
                          <div className="_mt-5">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 0C7.6575 0 9 1.3425 9 3C9 4.6575 7.6575 6 6 6C4.3425 6 3 4.6575 3 3C3 1.3425 4.3425 0 6 0ZM6 12C6 12 12 12 12 10.5C12 8.7 9.075 6.75 6 6.75C2.925 6.75 0 8.7 0 10.5C0 12 6 12 6 12Z"
                                fill="#324894"
                              ></path>
                            </svg>
                          </div>
                          <div className="ps-3">
                            <h6 className="fs-14">Admin</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="pt-2"></p>
                  <p>
                    China, Pakistan, and India, three of Asia's largest software
                    development countries, are among the top seven outsourcing
                    countries for software development in 2021.
                  </p>
                  <p></p>
                  <div className="d-flex">
                    <div>
                      <a
                        className="text-decoration-none"
                        href="/"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="fs-14">Read More</span>
                        <svg
                          width="22"
                          height="17"
                          viewBox="0 0 10 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 1L9 4.5L5.5 8"
                            stroke="#324894"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M9 4.5H1"
                            stroke="#324894"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-28">
              <div className="col-12">
                <div className="blog-style">
                  <div className="card blogs-card">
                    <img
                      src="https://zaptatech.com/public/uploads/img/1618385988.jpg"
                      className="img-responsive w-100 rounded"
                      alt="Here is a blog img"
                    />
                    <div className="card-img-overlay">
                      <div className="position-absolute bottom-0 end-0">
                        <div className="_mt-50">
                          <span className="badge blog-pill">
                            ACE Technologies{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a className="no-under text-decoration-none" href="/">
                          <h3 className="">
                            ACE TECHNOLOGIES (PRIVATE) LIMITED – EVERYTHING YOU
                            NEED TO KNOW ABOUT zapta
                          </h3>
                        </a>
                      </div>
                      <div className="text-center">
                        <a
                          className="no-style text-decoration-none"
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#social-media"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M23.9918 11.9936L13.0541 0V7.18433H11.7836C8.63617 7.18433 5.677 8.41003 3.45135 10.6357C1.22571 12.8613 0 15.8205 0 18.9681V24L2.09912 21.7C4.90704 18.6237 8.89288 16.8441 13.0541 16.8036V23.9874L23.9918 11.9936ZM1.40643 20.3844V18.9681C1.40643 16.1962 2.48584 13.5901 4.4458 11.6301C6.40576 9.67016 9.01172 8.59076 11.7836 8.59076H14.4604V3.62933L22.0886 11.9936L14.4604 20.358V15.3966H13.1986C8.7594 15.3966 4.49048 17.2084 1.40643 20.3844Z"
                                fill="#324894"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <h6 className="fs-12 fw-4 mb-0 text-center">Share</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="d-flex">
                        <div className="_mt-5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                              fill="#324894"
                            ></path>
                            <path
                              d="M11.9 1.40001H11.2V3.50001C11.2 3.68566 11.1263 3.86371 10.995 3.99498C10.8637 4.12626 10.6857 4.20001 10.5 4.20001C10.3143 4.20001 10.1363 4.12626 10.005 3.99498C9.87375 3.86371 9.8 3.68566 9.8 3.50001V1.40001H4.2V3.50001C4.2 3.68566 4.12625 3.86371 3.99497 3.99498C3.8637 4.12626 3.68565 4.20001 3.5 4.20001C3.31435 4.20001 3.1363 4.12626 3.00503 3.99498C2.87375 3.86371 2.8 3.68566 2.8 3.50001V1.40001H2.1C1.54305 1.40001 1.0089 1.62126 0.615076 2.01509C0.221249 2.40891 0 2.94305 0 3.50001V5.60001H14V3.50001C14 2.94305 13.7788 2.40891 13.3849 2.01509C12.9911 1.62126 12.457 1.40001 11.9 1.40001Z"
                              fill="#324894"
                            ></path>
                          </svg>
                        </div>
                        <div className="ps-3">
                          <h6 className="fs-14">Posted on: 2021-04-11</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex left_ps ps-40">
                        <div className="d-flex">
                          <div className="_mt-5">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 0C7.6575 0 9 1.3425 9 3C9 4.6575 7.6575 6 6 6C4.3425 6 3 4.6575 3 3C3 1.3425 4.3425 0 6 0ZM6 12C6 12 12 12 12 10.5C12 8.7 9.075 6.75 6 6.75C2.925 6.75 0 8.7 0 10.5C0 12 6 12 6 12Z"
                                fill="#324894"
                              ></path>
                            </svg>
                          </div>
                          <div className="ps-3">
                            <h6 className="fs-14">Admin</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="pt-2"></p>
                  <p>
                    The ACE team helps businesses hailing from a diverse range
                    of industries. We partner with them and build strong
                    relationships using the latest technologies and best
                    practices.
                  </p>
                  <p></p>
                  <div className="d-flex">
                    <div>
                      <a
                        className="text-decoration-none"
                        href="/"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="fs-14">Read More</span>
                        <svg
                          width="22"
                          height="17"
                          viewBox="0 0 10 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 1L9 4.5L5.5 8"
                            stroke="#324894"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M9 4.5H1"
                            stroke="#324894"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-28">
              <div className="col-12">
                <div className="blog-style">
                  <div className="card blogs-card">
                    <img
                      src="https://zaptatech.com/public/uploads/img/1667480600.png"
                      className="img-responsive w-100 rounded"
                      alt="Here is a blog img"
                    />
                    <div className="card-img-overlay">
                      <div className="position-absolute bottom-0 end-0">
                        <div className="_mt-50">
                          <span className="badge blog-pill">
                            Software Development{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a className="no-under text-decoration-none" href="/">
                          <h3 className="">
                            ACE Technologies Hailed by Clutch as a 2022 Leading
                            Software Developer in Pakistan
                          </h3>
                        </a>
                      </div>
                      <div className="text-center">
                        <a
                          className="no-style text-decoration-none"
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#social-media"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M23.9918 11.9936L13.0541 0V7.18433H11.7836C8.63617 7.18433 5.677 8.41003 3.45135 10.6357C1.22571 12.8613 0 15.8205 0 18.9681V24L2.09912 21.7C4.90704 18.6237 8.89288 16.8441 13.0541 16.8036V23.9874L23.9918 11.9936ZM1.40643 20.3844V18.9681C1.40643 16.1962 2.48584 13.5901 4.4458 11.6301C6.40576 9.67016 9.01172 8.59076 11.7836 8.59076H14.4604V3.62933L22.0886 11.9936L14.4604 20.358V15.3966H13.1986C8.7594 15.3966 4.49048 17.2084 1.40643 20.3844Z"
                                fill="#324894"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <h6 className="fs-12 fw-4 mb-0 text-center">Share</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <div className="d-flex">
                        <div className="_mt-5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                              fill="#324894"
                            ></path>
                            <path
                              d="M11.9 1.40001H11.2V3.50001C11.2 3.68566 11.1263 3.86371 10.995 3.99498C10.8637 4.12626 10.6857 4.20001 10.5 4.20001C10.3143 4.20001 10.1363 4.12626 10.005 3.99498C9.87375 3.86371 9.8 3.68566 9.8 3.50001V1.40001H4.2V3.50001C4.2 3.68566 4.12625 3.86371 3.99497 3.99498C3.8637 4.12626 3.68565 4.20001 3.5 4.20001C3.31435 4.20001 3.1363 4.12626 3.00503 3.99498C2.87375 3.86371 2.8 3.68566 2.8 3.50001V1.40001H2.1C1.54305 1.40001 1.0089 1.62126 0.615076 2.01509C0.221249 2.40891 0 2.94305 0 3.50001V5.60001H14V3.50001C14 2.94305 13.7788 2.40891 13.3849 2.01509C12.9911 1.62126 12.457 1.40001 11.9 1.40001Z"
                              fill="#324894"
                            ></path>
                          </svg>
                        </div>
                        <div className="ps-3">
                          <h6 className="fs-14">Posted on: 2022-09-28</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex left_ps ps-40">
                        <div className="d-flex">
                          <div className="_mt-5">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 0C7.6575 0 9 1.3425 9 3C9 4.6575 7.6575 6 6 6C4.3425 6 3 4.6575 3 3C3 1.3425 4.3425 0 6 0ZM6 12C6 12 12 12 12 10.5C12 8.7 9.075 6.75 6 6.75C2.925 6.75 0 8.7 0 10.5C0 12 6 12 6 12Z"
                                fill="#324894"
                              ></path>
                            </svg>
                          </div>
                          <div className="ps-3">
                            <h6 className="fs-14">Usman</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="pt-2"></p>
                  <p>
                    ACE Technologies is a mission-driven software development
                    company. We help organizations tackle their experience{" "}
                    <a href="/https://clutch.co/directory/mobile-application-developers/packages">
                      development
                    </a>{" "}
                    challenges with the power of modern technologies. We deliver
                    end-to-end services tailored to your business needs. Our
                    focus on quality means we provide support even after project
                    completion.
                  </p>

                  <p>&nbsp;</p>

                  <p>
                    Today, we’re delighted to share that we’ve been included in
                    the{" "}
                    <a href="/https://clutch.co/pk/developers">2022 list of</a>{" "}
                    leaders on Clutch. The B2B platform named us among the top
                    software developers in Pakistan this year!
                  </p>
                  <p></p>
                  <div className="d-flex">
                    <div>
                      <a
                        className="text-decoration-none"
                        href="/"
                        style={{ textDecoration: "none" }}
                      >
                        <span className="fs-14">Read More</span>
                        <svg
                          width="22"
                          height="17"
                          viewBox="0 0 10 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 1L9 4.5L5.5 8"
                            stroke="#324894"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M9 4.5H1"
                            stroke="#324894"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row blog-row2">
              <div className="blog-style">
                <div className="input-group">
                  <input
                    className="form-control blogs-saerch"
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                </div>
              </div>
            </div>

            <div className="row blog-row2 pt-20">
              <div className="blog-style">
                <h1 className="fs-20 fw-bold">Recent Posts</h1>
                <div className="line"></div>
                <div className="list-group">
                  <div className="list-group-item blogs-item d-flex">
                    <div>
                      <a href="/" className="text-decoration-none">
                        <div>
                          <img
                            src="https://zaptatech.com/public/assets/images/Recent-Blog1.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <div className="ms-3">
                      <a className="recent-blogs text-decoration-none" href="/">
                        <h6 className="fw-5 fs-14">
                          Why ACE Technologies is the best UIUX design company
                          in Pakistan?
                        </h6>
                      </a>
                      <div className="d-flex">
                        <div className="_mt-5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                              fill="#324894"
                            ></path>
                            <path
                              d="M11.9 1.40001H11.2V3.50001C11.2 3.68566 11.1263 3.86371 10.995 3.99498C10.8637 4.12626 10.6857 4.20001 10.5 4.20001C10.3143 4.20001 10.1363 4.12626 10.005 3.99498C9.87375 3.86371 9.8 3.68566 9.8 3.50001V1.40001H4.2V3.50001C4.2 3.68566 4.12625 3.86371 3.99497 3.99498C3.8637 4.12626 3.68565 4.20001 3.5 4.20001C3.31435 4.20001 3.1363 4.12626 3.00503 3.99498C2.87375 3.86371 2.8 3.68566 2.8 3.50001V1.40001H2.1C1.54305 1.40001 1.0089 1.62126 0.615076 2.01509C0.221249 2.40891 0 2.94305 0 3.50001V5.60001H14V3.50001C14 2.94305 13.7788 2.40891 13.3849 2.01509C12.9911 1.62126 12.457 1.40001 11.9 1.40001Z"
                              fill="#324894"
                            ></path>
                          </svg>
                        </div>
                        <div className="ps-1">
                          <h6 className="fs-14 fw-4">2021-04-11</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="list-group-item blogs-item d-flex">
                    <div>
                      <a className="text-decoration-none" href="/">
                        <div>
                          <img
                            src="https://zaptatech.com/public/assets/images/Recent-Blog1.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <div className="ms-3">
                      <a className="recent-blogs text-decoration-none" href="/">
                        <h6 className="fw-5 fs-14">
                          The Best outsourcing countries for software
                          development in 2021
                        </h6>
                      </a>
                      <div className="d-flex">
                        <div className="_mt-5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                              fill="#324894"
                            ></path>
                            <path
                              d="M11.9 1.40001H11.2V3.50001C11.2 3.68566 11.1263 3.86371 10.995 3.99498C10.8637 4.12626 10.6857 4.20001 10.5 4.20001C10.3143 4.20001 10.1363 4.12626 10.005 3.99498C9.87375 3.86371 9.8 3.68566 9.8 3.50001V1.40001H4.2V3.50001C4.2 3.68566 4.12625 3.86371 3.99497 3.99498C3.8637 4.12626 3.68565 4.20001 3.5 4.20001C3.31435 4.20001 3.1363 4.12626 3.00503 3.99498C2.87375 3.86371 2.8 3.68566 2.8 3.50001V1.40001H2.1C1.54305 1.40001 1.0089 1.62126 0.615076 2.01509C0.221249 2.40891 0 2.94305 0 3.50001V5.60001H14V3.50001C14 2.94305 13.7788 2.40891 13.3849 2.01509C12.9911 1.62126 12.457 1.40001 11.9 1.40001Z"
                              fill="#324894"
                            ></path>
                          </svg>
                        </div>
                        <div className="ps-1">
                          <h6 className="fs-14 fw-4">2021-04-11</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="list-group-item blogs-item d-flex">
                    <div>
                      <a className="text-decoration-none" href="/">
                        <div>
                          <img
                            src="https://zaptatech.com/public/assets/images/Recent-Blog1.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <div className="ms-3">
                      <a className="recent-blogs text-decoration-none" href="/">
                        <h6 className="fw-5 fs-14">
                          ACE TECHNOLOGIES (PRIVATE) LIMITED – EVERYTHING YOU
                          NEED TO KNOW ABOUT zapta
                        </h6>
                      </a>
                      <div className="d-flex">
                        <div className="_mt-5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                              fill="#324894"
                            ></path>
                            <path
                              d="M11.9 1.40001H11.2V3.50001C11.2 3.68566 11.1263 3.86371 10.995 3.99498C10.8637 4.12626 10.6857 4.20001 10.5 4.20001C10.3143 4.20001 10.1363 4.12626 10.005 3.99498C9.87375 3.86371 9.8 3.68566 9.8 3.50001V1.40001H4.2V3.50001C4.2 3.68566 4.12625 3.86371 3.99497 3.99498C3.8637 4.12626 3.68565 4.20001 3.5 4.20001C3.31435 4.20001 3.1363 4.12626 3.00503 3.99498C2.87375 3.86371 2.8 3.68566 2.8 3.50001V1.40001H2.1C1.54305 1.40001 1.0089 1.62126 0.615076 2.01509C0.221249 2.40891 0 2.94305 0 3.50001V5.60001H14V3.50001C14 2.94305 13.7788 2.40891 13.3849 2.01509C12.9911 1.62126 12.457 1.40001 11.9 1.40001Z"
                              fill="#324894"
                            ></path>
                          </svg>
                        </div>
                        <div className="ps-1">
                          <h6 className="fs-14 fw-4">2021-04-11</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="list-group-item blogs-item d-flex">
                    <div>
                      <a className="text-decoration-none" href="/">
                        <div>
                          <img
                            src="https://zaptatech.com/public/assets/images/Recent-Blog1.png"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <div className="ms-3">
                      <a className="recent-blogs text-decoration-none" href="/">
                        <h6 className="fw-5 fs-14">
                          ACE Technologies Hailed by Clutch as a 2022 Leading
                          Software Developer in Pakistan
                        </h6>
                      </a>
                      <div className="d-flex">
                        <div className="_mt-5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                              fill="#324894"
                            ></path>
                            <path
                              d="M11.9 1.40001H11.2V3.50001C11.2 3.68566 11.1263 3.86371 10.995 3.99498C10.8637 4.12626 10.6857 4.20001 10.5 4.20001C10.3143 4.20001 10.1363 4.12626 10.005 3.99498C9.87375 3.86371 9.8 3.68566 9.8 3.50001V1.40001H4.2V3.50001C4.2 3.68566 4.12625 3.86371 3.99497 3.99498C3.8637 4.12626 3.68565 4.20001 3.5 4.20001C3.31435 4.20001 3.1363 4.12626 3.00503 3.99498C2.87375 3.86371 2.8 3.68566 2.8 3.50001V1.40001H2.1C1.54305 1.40001 1.0089 1.62126 0.615076 2.01509C0.221249 2.40891 0 2.94305 0 3.50001V5.60001H14V3.50001C14 2.94305 13.7788 2.40891 13.3849 2.01509C12.9911 1.62126 12.457 1.40001 11.9 1.40001Z"
                              fill="#324894"
                            ></path>
                          </svg>
                        </div>
                        <div className="ps-1">
                          <h6 className="fs-14 fw-4">2022-09-28</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row blog-row2 pt-20">
              <div className="blog-style">
                <h1 className="fs-20 fw-bold">Categories</h1>
                <div className="line"></div>
                <div className="list-group">
                  <div className="list-group-item blog-category">
                    <h6 className="fw-4 fs-16">IT Services</h6>
                  </div>

                  <div className="list-group-item blog-category">
                    <h6 className="fw-4 fs-16">Software Development</h6>
                  </div>

                  <div className="list-group-item blog-category">
                    <h6 className="fw-4 fs-16">Outsourcing</h6>
                  </div>

                  <div className="list-group-item blog-category">
                    <h6 className="fw-4 fs-16">UX UI Design</h6>
                  </div>

                  <div className="list-group-item blog-category">
                    <h6 className="fw-4 fs-16">ACE Technologies</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
