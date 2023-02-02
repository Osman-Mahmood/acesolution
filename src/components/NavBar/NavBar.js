import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { mySliceActions } from "../../store/Slice";
import Particals from "../../UI/Particals";
import "./NavStyle.css";

const NavBar = () => {
  const [navShow, setNavShow] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [particals, setParticals] = useState(true);

  const location = useLocation();

  const dispatch = useDispatch();
  const NavData = useSelector((state) => state.slice.navbar);

  
  const handleIsActive = (index) => {
    dispatch(mySliceActions.handelNavBarRouting(index));
  };

  const handleLocation = () => {
    const activeTabIndex = NavData.findIndex(
      (data) => data.LinkTo === location.pathname
    );
    handleIsActive(activeTabIndex);
  };


  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 70;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 500;
      if (scrollCheck !== scroll) {
        setParticals(scrollCheck);
      }
    });
    handleLocation()
    window.scrollTo(0 , 0);
  }, [scroll, location]);


  
  return (
    <React.Fragment>
      <nav
        className={
          scroll && NavData[0].isActive !== false
            ? "actech-nav pt-1"
            : "actech-nav-scroll pt-1"
        }
      >
        <h1>
          <Link to={"/"} className="d-flex mt-3">
            <img
              className=""
              src={
                scroll && NavData[0].isActive !== false
                  ? require("../../assets/images/logo.png")
                  : require("../../assets/images/logo3.png")
              }
              alt="ACE Techbologie's vision"
              style={{ width: "130px", height: "50px" }}
            />
          </Link>
        </h1>
        <ul className="d-flex flex-row display-none mt-3">
          {NavData.map((data, index) => (
            <li className={`list-styles ${data.class}`} key={index}>
              <Link
                id={data.id}
                className={
                  !data.isActive
                    ? `text-decoration-none ${
                        scroll && NavData[0].isActive !== false
                          ? "text-light link-hover"
                          : "text-blue link-hover-dark"
                      } `
                    : `text-decoration-none ${
                        scroll && NavData[0].isActive !== false
                          ? "text-light link-active"
                          : "text-blue link-active-dark"
                      }`
                }
                to={data.LinkTo}
                onClick={() => handleIsActive(index)}
              >
                {data.NavLink}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={
            scroll && NavData[0].isActive !== false
              ? "btn btn-book display-none"
              : "btn btn-book-scroll display-none"
          }
        >
          Book a call
        </button>
        <button
          className="btn btn-menue transform-icon"
          data-bs-toggle="offcanvas"
          href="/offcanvasExample"
          aria-controls="offcanvasExample"
          onClick={() => setNavShow(!navShow)}
        >
          {/* Bars here */}
          <div
            htmlFor="menu_checkbox"
            className={
              scroll && NavData[0].isActive !== false
                ? "menue-bars"
                : "menue-bars-responsive"
            }
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </nav>

      {/* Partical JS is added here */}
      {NavData[0].isActive !== false && (
        <div className="background-image">
          {particals && NavData[0].isActive !== false && (
            <div>
              <Particals />
            </div>
          )}
          <h2 className="main-heading text-center">
            We Build Digital Solutions <br />
            With The Best User Experience.
          </h2>
        </div>
      )}

      {/* Nav Menue for small screen */}

      <div
        className="offcanvas offcanvas-start w-100"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasExampleLabel">
            <Link to={"/"} className="d-flex">
              <img
                className=""
                src={require("../../assets/images/logo3.png")}
                alt="ACE Techbologie's vision"
                style={{ width: "130px", height: "50px" }}
              />
            </Link>
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="p-0">
            {NavData.map((data, index) => (
              <li key={index} className="list-style-none list-responsive">
                <Link
                  className="nav-responsive-link text-blue"
                  to={data.LinkTo}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={() => handleIsActive(index)}
                >
                  {data.NavLink}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center">
            <button className="btn btn-book-scroll">Book a call</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
