import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { reduxDispatch, reduxState } from "../../../../helpers/reduxHelper";
function TypeTwo({
  known,
  keys,
  id,
  hint,
  choice,
  answare,
  setItem,
  ...props
}) {

  const [isCheck, setIsCheck] = useState(false);
  const [active, setActive] = useState("");

  const handleOnFocus = (event) => {
    const { name } = event.currentTarget;
    setActive(name);
    setIsCheck(false);
  };
  const handleOnClickButton = (value) => {
    if (active === "") {
      alert("Silahkan Pilih Input Jawaban");
    } else {
      let _answare = { ...answare };
      _answare["ids=" + id] = {
        ..._answare["ids=" + id],
        [active]: value,
      };

      setItem({
        name: "answare",
        value: _answare,
      });
    }
  };

  const handleOnCheck = () => {
    setIsCheck(true);
  };
  return (
    <div className="col-12 bg-white rounded  p-3">
      <div className="col-12 d-flex justify-content-center align-items-center flex-column">
        <div className="col-md-8 col-12 rounded bg-light border p-3 text-center">
          {known.map((i, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: i }}></p>
          ))}
        </div>
        <div className="col-12 rounded p-1 border align-items-center text-center flex-wrap mt-4 d-flex gap-2 justify-content-around">
          {hint.map((i, index) => (
            <Fragment key={index}>
              {index !== 0 && index !== hint.lenght - 1 && (
                <div
                  className="position-relative"
                  style={{ width: "70px", height: "30px" }}
                >
                  {isCheck &&
                    answare["ids=" + id] &&
                    answare["ids=" + id]["answare-" + index] !== undefined &&
                    answare["ids=" + id]["answare-" + index] !== null && (
                      <div
                        style={{ right: "0px" }}
                        className="position-absolute"
                      >
                        {answare["ids=" + id]["answare-" + index] ===
                        keys[index - 1] ? (
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
                    style={{ height: "30px" }}
                    onChange={() => {}}
                    name={"answare-" + index}
                    autoComplete="off"
                    onFocus={handleOnFocus}
                    value={
                      answare["ids=" + id] === undefined
                        ? ""
                        : answare["ids=" + id]["answare-" + index] ===
                            undefined ||
                          answare["ids=" + id]["answare-" + index] === null
                        ? ""
                        : answare["ids=" + id]["answare-" + index]
                    }
                  />
                </div>
              )}
              <div className="col-md-2 col-4 bg-light p-2 border shadow-sm rounded">
                {i}
              </div>
            </Fragment>
          ))}
        </div>
        <div className="col-12 border p-2 rounded mt-4 d-flex justify-content-between">
          {choice.map((i, index) => (
            <button
              onClick={() => handleOnClickButton(i)}
              key={index}
              className="btn-symbol"
            >
              {i}
            </button>
          ))}
        </div>

        <div className="col-12 border mt-4 rounded p-2 d-flex justify-content-center">
          <button onClick={handleOnCheck} className="btn btn-success">
            check
          </button>
        </div>
      </div>
    </div>
  );
}
export default connect(reduxState, reduxDispatch)(TypeTwo);
