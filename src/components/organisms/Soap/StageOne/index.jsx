import React, { useState } from "react";
import { connect } from "react-redux";
import Constant from "../../../../constants";
import { buildClass } from "../../../../helpers/classHelper";
import { reduxDispatch, reduxState } from "../../../../helpers/reduxHelper";
const method = [
  {
    name: "Water Only",
    image: Constant.METHOD_WATER,
    imageActive: Constant.METHOD_WATER_RED,
    type: Constant.METHOD_TEXT_WATER,
  },
  {
    name: "Antiseptic Soap + Water",
    image: Constant.METHOD_SOAP,
    imageActive: Constant.METHOD_SOAP_REd,
    type: Constant.METHOD_TEXT_SOAP,
  },
];
const duration = [10, 20, 30];
function StageOne({ changeStage,setItem,...props }) {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedDuration, setSelectedDuration] = useState(0);
  return (
    <div className="holder-absolute-soap">
      <h3 className="fs-3 text-center text-white">
        Select Method and Duration of Hand Washing and then press Submit
      </h3>
      <div className="col-12 d-flex mt-5 gap-3 px-3 px-md-0 justify-content-center flex-column flex-md-row">
        <div className="col-md-5 col-12 bg-white rounded shadow-sm p-3">
          <h3 className="fs-3 text-secondary">Method for hand washing</h3>
          <div className="mt-5">
            {method.map((item, index) => (
              <div
                onClick={() => {
                  setSelectedMethod(item.type);
                }}
                key={index}
                role={"button"}
                className={buildClass({
                  "soap-method-choice mt-3 shadow-sm rounded-pill": true,
                  active: item.type === selectedMethod,
                })}
              >
                <div className="soap-method-image">
                  <img
                    src={
                      item.type === selectedMethod
                        ? item.imageActive
                        : item.image
                    }
                    alt=""
                  />
                </div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-5 col-12 bg-white rounded shadow-sm p-3">
          <h3 className="fs-3 text-secondary">Duration of hand washing</h3>
            <div className="mt-5">
                {duration.map((item, index)=>(
                    <div
                    onClick={() => {
                      setSelectedDuration(item);
                    }}
                    key={index}
                    role={"button"}
                    className={buildClass({
                      "soap-method-choice mt-3 p-3 shadow-sm rounded-pill d-flex justify-content-center": true,
                      active: item === selectedDuration,
                    })}
                  >
                    <h5 className="fs-5">{item}</h5>
                  </div>
                ))}
            </div>
        </div>
      </div>
      <div className="d-flex mt-5 justify-content-center">
          <button onClick={()=>{
              if(selectedDuration !== 0 && selectedMethod !== ""){
                var flow = []
                
                if(selectedMethod === Constant.METHOD_TEXT_SOAP){
                  if(selectedDuration === 10){
                    flow = Constant.FLOW_SOAP_10
                  }else if(selectedDuration === 20){
                    flow = Constant.FLOW_SOAP_20
                  }else{
                    flow = Constant.FLOW_SOAP_30
                  }
                }else{
                  if(selectedDuration === 10){
                    flow = Constant.FLOW_WATER_10
                  }else if(selectedDuration === 20){
                    flow = Constant.FLOW_WATER_20
                  }else{
                    flow = Constant.FLOW_WATER_30
                  }
                }
                
                setItem({
                      name: "selectedSoap", value: {
                        method: selectedMethod,
                        duration: selectedDuration,
                        flow: flow,
                    }
                  })
                  changeStage(2)
              }
          }} className="btn btn-success px-5 py-2" disabled={selectedDuration === 0 || selectedMethod === ""}>
              Submit
          </button>
      </div>
    </div>
  );
}

export default connect(reduxState, reduxDispatch)(StageOne);
