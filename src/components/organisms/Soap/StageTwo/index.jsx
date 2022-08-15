import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { reduxDispatch, reduxState } from "../../../../helpers/reduxHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buildClass } from "../../../../helpers/classHelper";
function StageTwo({ selectedSoap, changeStage, ...props }) {
  const [selectedFlow, setSelectedFlow] = useState(selectedSoap.flow['A']);
  const [currentFlow, setCurrentFlow] = useState("A");

  const handleOnEndVideo =()=>{
    if(currentFlow !== "E"){
      setCurrentFlow(String.fromCharCode(currentFlow.charCodeAt(0) + 1))
      setSelectedFlow(selectedSoap.flow[String.fromCharCode(currentFlow.charCodeAt(0) + 1)]);
    }
  }

  return (
    <div className="container-fluid mt-5">
      <div className="d-flex justify-content-center gap-5 align-items-center flex-md-row flex-column">
        <h2 className="text-white fs-2 text-center">
          Method of hand washing is {selectedSoap.method} with duration{" "}
          {selectedSoap.duration} s
        </h2>
        <button onClick={()=>{
            changeStage(1)
        }} className="btn btn-secondary col-3 col-md-1 ">Back</button>
      </div>

      <div className="col-12 mt-5 d-flex align-items-center align-items-md-stretch flex-column flex-md-row gap-3 justify-content-center">
        {selectedSoap.flow &&
          Object.keys(selectedSoap.flow).map((item, index) => {
            if ((index + 1) % 2 === 0) {
              return (
                <Fragment key={index}>
                  <FontAwesomeIcon
                    className="align-self-center rotate-on-mobile fs-4 mb-3 mb-md-0 text-white"
                    icon={"arrow-right"}
                  />
                  <div
                  onClick={()=>{
                    setSelectedFlow(selectedSoap.flow[item])
                    setCurrentFlow(item)
                  }}
                    role={"button"}
                    className={buildClass({
                        "col-md-2 mt-md-0 mt-3 mb-md-0 mb-3 col-5 rounded shadow-sm col-lg-1 px-2 py-3 flow-choice": true,
                        "bg-secondary" : selectedFlow === null ? false : selectedFlow.description === selectedSoap.flow[item].description,
                        "bg-info" : !(selectedFlow === null ? false : selectedFlow.description === selectedSoap.flow[item].description)
                    })}
                  >
                    <div className="flow-name">
                      <span>{item}</span>
                    </div>
                    <p className="text-white">{selectedSoap.flow[item].description}</p>
                  </div>
                  <FontAwesomeIcon
                    className="align-self-center fs-4 mb-3 mb-md-0 text-white rotate-on-mobile"
                    icon={"arrow-right"}
                  />
                </Fragment>
              );
            } else {
              return (
                <div
                onClick={()=>{
                    setSelectedFlow(selectedSoap.flow[item])
                    setCurrentFlow("A")
                }}
                  role={"button"}
                  key={index}
                  className={buildClass({
                    "col-md-2 mt-md-0 mt-3 mb-md-0 mb-3 col-5 rounded shadow-sm col-lg-1 px-2 py-3 flow-choice": true,
                    "bg-secondary" : selectedFlow === null ? false : selectedFlow.description === selectedSoap.flow[item].description,
                    "bg-info" : !(selectedFlow === null ? false : selectedFlow.description === selectedSoap.flow[item].description)
                })}
                >
                  <div className="flow-name">
                    <span>{item}</span>
                  </div>
                  <p className="text-white">{selectedSoap.flow[item].description}</p>
                </div>
              );
            }
          })}
      </div>

      <div className="d-flex justify-content-center mt-5">
          <div className="col-12 col-md-6 ">
              <div className="holder-media rounded shadow">
              {selectedFlow && selectedFlow.type === "video" && (
                  <video src={selectedFlow.url} onEnded={handleOnEndVideo} autoPlay></video>
              )}
              {selectedFlow && selectedFlow.type === "image" && (
                  <img src={selectedFlow.url} alt="" />
              )}
              </div>
          </div>
      </div>
    </div>
  );
}

export default connect(reduxState, reduxDispatch)(StageTwo);
