import React from "react";
import constants from "../../../../constants";
function Start(props) {
  const handleOnClickStart = ()=>{
    props.onStart()
  }
  return (
    <div className="d-flex gap-3 align-items-center justify-content-center flex-md-row flex-wrap flex-column-reverse">
      <div>
        <h1 className="fs-2 fw-bold">Voltage in a paralel Circuit</h1>
        <button onClick={handleOnClickStart} className="btn btn-success mt-3" style={{width: "100px"}}>Start</button>
      </div>
      <div style={{maxWidth: "500px", width: "100%"}}>
          <img src={constants.START_VOLTAGE} alt="" width={"100%"} />
      </div>
    </div>
  );
}

export default Start;
