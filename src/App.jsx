import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Public from "./containers/pages/Public";
import "./plugins";
import "./assets/styles/global.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Public />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
