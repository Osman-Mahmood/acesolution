import React from "react";
import "../components/Styles/AboutUsStyles.css";

const About = () => {
  return (
    <React.Fragment>
      <h1 className="text-dark padding-top mb-2 mt-3 pb-4 text-center">
        ABOUT US
      </h1>
      <div className="container-fluid img">
        <div className="row align-items-center" id="about-sec1">
          <div className="w-75 me-auto ms-auto">
            <h2 className="text-center fs-48 text-white mt-5">Mission</h2>
            <p className="text-white text-center mt-5 mb-4 mission">
              Our mission is to develop innovative and AI powered software
              solutions that enhance business stability and gain a reliable
              competitive advantage in the marketplace. We are endeavoring with
              a rationale to be one of the top-tier software development
              companies around the globe.
            </p>
          </div>
        </div>
      </div>

      <div className="container-xl mt-5">
        <div className="row mt-61 mb-60 align-items-center">
          <div className="col-sm-6">
            <h3 className="fs-48 vision text-center">Vision</h3>
            <p className="mt-4 fs-22 fw-3">
              To bring out the revolutionary services in the market by becoming
              a supreme software solution providing company for all businesses
              around the globe. ACE Technologies focuses on developing software
              solutions for companies and individuals to satisfy their demands
              and give them a long-term competitive advantage. ACE prefers to
              employ modern technology in order to enable business towards
              digital transformation.
            </p>
          </div>
          <div className="col-sm-6 bg-col2 pe-0">
            <img
              className="img-responsive w-100 float-end"
              src={require("../assets/images/vision_img.png")}
              alt="ACE Techbologie's vision"
              height="350px"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid img mt-5">
        <div
          className="row align-items-center justify-content-center"
          id="about-sec2"
        >
          <div className="col-sm-10">
            <h3 className="fs-48 text-center text-white mt-5">What is ACE?</h3>
            <p className="text-center fs-24 text-white pt-3">
              ACE stands for Zone of Advance Platforms and Tech Applications.
              ACE Technologies produces high-quality, scalable, secure, and
              cost-effective holistic lifecycle solutions to satisfy the needs
              of our clients. ACE Technologies has a dedicated team that are
              experienced in offering long-term solutions for the difficulties
              that our clients encounter across all areas. Our development team
              consists of Technology Specialists, UI Designers, UX Engineers,
              Programmers, Devops Experts, Business Analysts, Software
              Architects, QA Engineers, and Project Managers. As a software
              development company, ACE offers revolutionary applications and
              systematic services that span across a wide range of industries
              and geographical areas.
            </p>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="row mt-101 mb-57">
          <div className="col-sm-12">
            <h2 className="mt-5 text-center">What We Do</h2>
            <p className="fs-22 pt-3">
              ACE Technologies is one of the leading companies that completely
              understand and deliver the best solutions to the issues that
              businesses come across. We offer the best quality support services
              24 hours a day, seven days a week, including comprehensive
              business solutions with end-to-end support and monitoring. Our
              teams are top-notch professionals who understand the core
              technicalities of modern IT advancements and deliver optimized
              software for the customers to boost their businesses. We believe
              in personalizing our services to our customers' specific
              requirements. We optimize the use of technology combined with
              human potential with the primary goal of serving the world.
            </p>
          </div>
        </div>
        <div className="row mt-5" id="best-bg">
          <div className="col-md-4 mb-3">
            <div className="card whatwedo-card h-100 w-100">
              <div className="card-body">
                <h5 className="card-title whatwedo-title text-center mb-4">
                  Striving for Excellence
                </h5>
                <p className="card-text text-center whatwedo-text">
                  ACE Technologies Enabling Organizations to Digital
                  Transformation. Our professionals ensure that each of their
                  customers receives a unique and tailored solution that will
                  help them to flourish economically.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card whatwedo-card h-100 w-100">
              <div className="card-body">
                <h5 className="card-title whatwedo-title text-center mb-4">
                  High Ownership Susceptibility
                </h5>
                <p className="card-text text-center whatwedo-text">
                  We maintain that every employee must have an ownership
                  quotient in order to have a participatory attitude. Our highly
                  educated and experienced BPO experts provide an immediate
                  boost to your personnel by delivering high-quality results
                  on-time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card whatwedo-card h-100 w-100">
              <div className="card-body">
                <h5 className="card-title whatwedo-title text-center mb-4">
                  Influential
                  <br />
                  Leadership
                </h5>
                <p className="card-text text-center whatwedo-text">
                  We emphasize achieving successful outcomes. To get efficient
                  results, we combine deep functional expertise, worldwide
                  benchmarks, and integrated personnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h3 className="fs-36 fw-5">ACE Clients</h3>
            <p className="client-msg">
              We deal with clients all over the globe, including the United
              Kingdom, the United States, France, Belgium, Australia, Saudi
              Arabia, and the United Arab Emirates (UAE). We collaborate with
              other businesses and individual contractors. We also offer
              pre-built state-of-the-art software solutions with a user-centric
              design and architecture. Our clients benefit from a wide talent
              pool, specialists in trending technologies, and a ready
              infrastructure and software solutions.
            </p>
          </div>
          <div className="col-sm-6">
            <div id="clients_map"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
