import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Constant from "../../../constants";
import { buildClass } from "../../../helpers/classHelper";
import { reduxDispatch, reduxState } from "../../../helpers/reduxHelper";
import { Container, Nav, Navbar as NavbarB } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
/**
 *
 * @param {{
 * navbar: [{
 * name: string, link: string}], props: any}} param0
 * @returns
 */
function Navbar({ navbar, isTransparent, ...props }) {
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const [bgWhite, setBgWhite] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleWindowScroll = (event) => {
      if (event.target.documentElement.scrollTop > 200) {
        setBgWhite(true);
      } else {
        setBgWhite(false);
      }
    };
    window.addEventListener("scroll", handleWindowScroll, false);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [key, bgWhite]);

  return (
    <div>
      <NavbarB
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={buildClass({
          "shadow-sm bg-white": !(location.pathname === "/"),
          "bg-white": location.pathname === "/" && bgWhite,
        })}
      >
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
            <div className="d-flex gap-2 align-items-center">
              <div className="navbar-icon rounded-circle">
                <img src={Constant.LOGO} alt="" />
              </div>
              <h3 className={buildClass({" fs-3 text-bold":true,"text-black":location.pathname === "/" && bgWhite,"text-white":location.pathname === "/" && !bgWhite})}>E-Learning</h3>
            </div>
          </Link>
          <NavbarB.Toggle aria-controls="basic-navbar-nav" />

          <NavbarB.Collapse id="basic-navbar-nav">
            <Nav className=" mt-md-0 ms-auto mt-3 d-flex gap-3">
              {navbar.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className={buildClass({
                    "navbar-link navbar-top-link": true,
                    active: location.pathname === item.link,
                    "text-white":
                      location.pathname === "/" &&
                      !bgWhite &&
                      location.pathname === item.link,
                  })}
                >
                  {item.name}
                </Link>
              ))}
            </Nav>
            <div className="d-flex ms-3 align-items-center">
              {(location.pathname === "/" ||
                location.pathname.includes("/search/")) && (
                <form
                  action=""
                  onSubmit={(event) => {
                    event.preventDefault();
                    console.log(key);
                    navigate(`/search/${key}`);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div className="form-group">
                      <input
                        placeholder="Search course here.."
                        className="form-control"
                        onChange={(event) => {
                          setKey(event.currentTarget.value);
                        }}
                        type="text"
                        name=""
                        value={key}
                        id=""
                      />
                    </div>
                    <button className="btn btn-success" type="submit">
                      <FontAwesomeIcon icon={"search"} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </NavbarB.Collapse>
        </Container>
      </NavbarB>
      <div style={{ height: "75px" }}></div>
    </div>
  );
}

export default connect(reduxState, reduxDispatch)(Navbar);
