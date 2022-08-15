import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../../components/organisms/Navbar";
import { buildClass } from "../../../helpers/classHelper";
import Home from "../Home";
import SearchPage from "../Search";
import Separating from "../Separating";
import Soap from "../Soap";
import Voltage from "../Voltage";

const navbar = [
  {
    name: "Home",
    link: "/",
  },
  // {
  //   name: "Separating",
  //   link: "/separating",
  // },
  // {
  //   name: "Soap",
  //   link: "/soap",
  // },
  // {
  //   name: "Voltage",
  //   link: "/voltage",
  // },
];

function Public(props) {
  return (
    <div className={buildClass({})}>
      <Navbar navbar={navbar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/separating" element={<Separating />} />
        <Route path="/soap" element={<Soap />} />
        <Route path="/voltage" element={<Voltage />} />
        <Route path="/search/:key" element={<SearchPage />} />
      </Routes>
      <div className="footer col-12 bg-secondary py-2 mt-4">
        <h6 className="text-white text-center">
          Created By TA-15 &copy; 2022
        </h6>
      </div>
    </div>
  );
}

export default Public;
