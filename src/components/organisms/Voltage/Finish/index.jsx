import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import constants from "../../../../constants";

function Finish({handleBack, handleRestart,...props}) {
  return (
    <div className="d-flex gap-3 align-items-center justify-content-center flex-md-row-reverse flex-wrap flex-column-reverse">
      <div>
        <h1 className="fs-2 fw-bold">Voltage in a paralel Circuit</h1>
        <div className="d-flex gap-3 mt-3">
          <button onClick={handleBack} className="btn btn-secondary">
            <FontAwesomeIcon icon="arrow-left"/> 
            </button>
          <button onClick={handleRestart} className="btn btn-secondary" style={{ width: "100px" }}>
            Restart
          </button>
        </div>
      </div>
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <img src={constants.END_VOLTAGE} alt="" width={"100%"} />
      </div>
    </div>
  );
}

export default Finish;
