import React, { Component } from "react";
import { connect } from "react-redux";

import constants from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reduxDispatch, reduxState } from "../../../helpers/reduxHelper";
import Question from "../../../components/organisms/Voltage/Question";
import Finish from "../../../components/organisms/Voltage/Finish";
import Start from "../../../components/organisms/Voltage/Start";

class VolatageInPararel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [...constants.QUESTIONS],
      answare: {},
      position: 0,
    };
  }

  handleOnStart = (event) => {
    this.setState((state) => ({
      ...state,
      answare: {},
      position: 1,
    }));
  };
  handleOnClickNext = (event) => {
    if (this.state.position !== -1) {
      if (this.state.position !== this.state.questions.length) {
        this.setState((state) => ({
          ...state,
          position: this.state.position + 1,
        }));
      } else {
        this.setState((state) => ({
          ...state,
          position: -1,
        }));
      }
    }
  };
  handleOnClickBack = (event) => {
    if (this.state.position !== 0) {
      this.setState((state) => ({
        ...state,
        position: this.state.position - 1,
      }));
    }
  };

  changeAnsware = (newAnsware, id) => {
    let _temp = { ...this.state.answare };
    _temp[id] = newAnsware;
    this.setState((state) => ({ ...state, answare: _temp }));
  };
  handleClickReset = () => {
    let position = this.state.position - 1;
    let temp = { ...this.props.answare };
    temp["ids=" + this.state.questions[position].id] = {};
    this.props.setItem({
      name: "answare",
      value: temp,
    });
  };
  handleRestart = () => {
    this.setState((state) => ({
      ...state,
      position: 0,
    }));

    this.props.setItem({
      name: "answare",
      value: {},
    });
  };
  handleBack = () => {
    this.setState((state) => ({
      ...state,
      position: this.state.questions.length,
    }));
  };
  render() {
    return (
      <div className="voltage">
        
        <div className="container temp-voltage">
         <h3 className="fs-3 text-center">Voltage in a paralel Circuit</h3>
         <div className="bg-white rounded border shadow-sm mt-5 p-3">
         {this.state.position === 0 && <Start onStart={this.handleOnStart} />}
          {this.state.position >= 1 &&
            this.state.position <= this.state.questions.length && (
              <Question
                changeAnsware={this.changeAnsware}
                question={this.state.questions[this.state.position - 1]}
                answare={this.state.answare[this.state.position - 1] ?? {}}
              />
            )}
          {this.state.position === -1 && (
            <Finish
              handleBack={this.handleBack}
              handleRestart={this.handleRestart}
            />
          )}

          {this.state.position >= 1 &&
            this.state.position <= this.state.questions.length && (
              <div className="col-12 d-flex mt-5">
                <button onClick={this.handleOnClickBack} className="btn-back">
                  <FontAwesomeIcon icon={"arrow-left"} />
                </button>
                <button
                  onClick={this.handleClickReset}
                  className="ms-auto btn-reset rounded-pill"
                >
                  Reset
                </button>
                <button
                  onClick={this.handleOnClickNext}
                  className="ms-auto btn-next"
                >
                  <FontAwesomeIcon icon={"arrow-right"} />
                </button>
              </div>
            )}
         </div>
        </div>
      </div>
    );
  }
}

export default connect(reduxState, reduxDispatch)(VolatageInPararel);
