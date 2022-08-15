import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState } from "react";
import { connect } from "react-redux";
import { reduxDispatch, reduxState } from "../../../../helpers/reduxHelper";

function TypeOne({ choice, keys, id, answare, setItem, ...props }) {
  const [insideAnsware, setInsideAnsware] = useState(
    answare["ids=" + id] === undefined ? {} : { ...answare["ids=" + id] }
  );
  const [checkState, setCheckState] = useState([
    ...Array(choice.length).map((_) => false),
  ]);
  const handleOnChange = (event, index) => {
    const { name, value } = event.currentTarget;

    if (checkState[index]) {
      let temp = [...checkState];
      temp[index] = false;
      setCheckState(temp);
    }
    let _answare = { ...answare };
    _answare["ids=" + id] = {
      ..._answare["ids=" + id],
      [name]: value,
    };
    setInsideAnsware(() => ({
      ..._answare["ids=" + id],
      [name]: value,
    }));
    setItem({
      name: "answare",
      value: _answare,
    });
  };

  const checkAnsware = (index, name) => {
    if (insideAnsware[name] !== undefined && insideAnsware[name] !== null) {
      let temp = [...checkState];
      temp[index] = true;
      setCheckState(temp);
    }
  };
  return (
    <div className="col-12 bg-light p-4 rounded border">
      {choice.map((i, index) => (
        <div className="col-12 d-flex align-items-center gap-4" key={index}>
          <div className="d-flex mb-4 align-items-xl-center gap-3">
            <span
              className="fs-6"
              dangerouslySetInnerHTML={{ __html: i.text }}
            ></span>
            <input
              style={{
                width: "80px",
                borderRadius: "100px",
                textAlign: "center",
              }}
              className="form-control"
              type="text"
              name={"answare-" + index}
              onChange={(e) => handleOnChange(e, index)}
              value={
                answare["ids=" + id] === undefined ? "" :
                answare["ids=" + id]["answare-" + index] === undefined ||
                answare["ids=" + id]["answare-" + index] === null
                  ? ""
                  : answare["ids=" + id]["answare-" + index] 
              }
            />
            <span>{i.unit}</span>
          </div>
          {insideAnsware["answare-" + index] === undefined ||
          insideAnsware["answare-" + index] === null ||
          !checkState[index] ? (
            ""
          ) : insideAnsware["answare-" + index] === keys[index] ? (
            <FontAwesomeIcon
              className="fs-3 text-success mb-4"
              icon={"check-circle"}
            />
          ) : (
            <FontAwesomeIcon
              className="fs-3 text-danger mb-4"
              icon={"times-circle"}
            />
          )}
          <button
            onClick={() => checkAnsware(index, "answare-" + index)}
            className="btn btn-success rounded-pill ms-auto">
            check
          </button>
        </div>
      ))}
    </div>
  );
}


export default connect(reduxState, reduxDispatch)(TypeOne);
