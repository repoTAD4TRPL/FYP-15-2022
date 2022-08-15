import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxDispatch, reduxState } from "../../../../helpers/reduxHelper";

function TypeThree({
  hint,
  id,
  choice,
  keys,
  answare,
  setItem,
  ...props
}) {
  const [isCheck, setIsCheck] = useState(false);

  const handleOnClickButton = (value) => {
    setIsCheck(false);
    let _answare = { ...answare };
    _answare["ids=" + id] = {
      ..._answare["ids=" + id],
      "answare-0": value,
    };

    setItem({
      name: "answare",
      value: _answare,
    });
  };

  const handleButtonCheck = () => {
    setIsCheck(true);
  };
  return (
    <div className="col-12 bg-white rounded p-3">
      <div className="col-12 d-flex justify-content-center align-items-center flex-column">
        <div className="col-md-11 col-12 align-items-center flex-column justify-content-center d-flex rounded bg-light border p-3">
          {hint.map((i, index) => (
            <div
              className="col-12 text-center mb-2"
              key={index}
              dangerouslySetInnerHTML={{ __html: i }}
            ></div>
          ))}

          <div className="col-md-8 col-12 position-relative">
            {isCheck &&
              answare["ids=" + id] &&
              answare["ids=" + id]["answare-" + 0] !== undefined &&
              answare["ids=" + id]["answare-" + 0] !== null && (
                <div style={{ right: "0px" }} className="position-absolute">
                  {answare["ids=" + id]["answare-" + 0] === keys ? (
                    <FontAwesomeIcon
                      className="fs-4 text-success"
                      icon={"check-circle"}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="fs-4 text-danger"
                      icon={"times-circle"}
                    />
                  )}
                </div>
              )}
            <input
              className="form-control text-center"
              type="text"
              name="answare-0"
              onChange={() => {}}
              value={
                answare["ids=" + id] === undefined
                  ? ""
                  : answare["ids=" + id]["answare-" + 0] === undefined ||
                    answare["ids=" + id]["answare-" + 0] === null
                  ? ""
                  : answare["ids=" + id]["answare-" + 0]
              }
            />
          </div>
        </div>
      </div>
      <div className="col-12 mt-4 rounded p-2 border d-flex gap-4 justify-content-center">
        {choice.map((i, index) => (
          <button
            onClick={() => handleOnClickButton(i)}
            className="btn-comp"
            key={index}
          >
            {i}
          </button>
        ))}
      </div>

      <div className="col-12 mt-4 rounded p-2 border d-flex gap-4 justify-content-center">
        <button onClick={handleButtonCheck} className="btn btn-success ">
          Check
        </button>
      </div>
    </div>
  );
}
export default connect(reduxState, reduxDispatch)(TypeThree);
