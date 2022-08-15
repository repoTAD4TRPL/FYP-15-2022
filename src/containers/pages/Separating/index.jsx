import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Constant from "../../../constants";
import { buildClass } from "../../../helpers/classHelper";
function Separating(props) {
  const [selectedSeparating, setSelectedSeparating] = useState([
    null,
    null,
    null,
  ]);
  const [currentPlay, setCurrentPlay] = useState(0);
  const [choiceItem, setChoiceItem] = useState([
    { ...Constant.METHOD_SEPARATING_DISSOLVING },
    { ...Constant.METHOD_SEPARATING_FILTRATION },
    { ...Constant.METHOD_SEPARATING_EVAPORATION },
  ]);
  const [isPlay, setIsPlay] = useState(false);
  const [lastInserted, setLastInserted] = useState([]);

  const handleOnDrop = (event, index) => {
    let item = event.dataTransfer.getData("item");
    if (selectedSeparating[index] === null) {
      let choice = [...choiceItem];
      let foundIndex = choice.findIndex((i) => i.text === item);
      var temp = [...selectedSeparating];
      temp[index] = {
        text: choice[foundIndex].text,
        video: choice[foundIndex].video,
      };
      setSelectedSeparating(temp);
      var tempLast = [...lastInserted];
      tempLast.push({ item: choice[foundIndex], index: index });
      setLastInserted(tempLast);
      choice.splice(foundIndex, 1);
      setChoiceItem(choice);
    }
  };

  const handleBackButton = () => {
    let tempLast = [...lastInserted];
    let tempChoice = [...choiceItem];
    let tempSelected = [...selectedSeparating];
    let remove = tempLast.pop();

    tempChoice.push(remove.item);

    tempSelected[remove.index] = null;

    setLastInserted(tempLast);
    setChoiceItem(tempChoice);
    setSelectedSeparating(tempSelected);
  };
  const videoRef = useRef();
  const handleNextButton = () => {
    setIsPlay(true);
  };

  const handleVideoEnded = () => {
    if (currentPlay !== 2) {
      let next = currentPlay + 1;
      let media = document.getElementById("videoMedia");
      media.src = selectedSeparating[next].video;

      setCurrentPlay(next);
    }
  };

  const handleResetButton = () => {
    setSelectedSeparating([null, null, null]);
    setIsPlay(false);
    setChoiceItem([
      { ...Constant.METHOD_SEPARATING_DISSOLVING },
      { ...Constant.METHOD_SEPARATING_FILTRATION },
      { ...Constant.METHOD_SEPARATING_EVAPORATION },
    ]);
    setLastInserted([]);
    setCurrentPlay(0);
  };

  useEffect(() => {
    if (isPlay) {
      let media = document.getElementById("videoMedia");
      media.src = selectedSeparating[currentPlay].video;
    }
  }, [isPlay, selectedSeparating, choiceItem, currentPlay]);

  return (
    <div className="separating">
      <h3 className="fs-3 text-center">Separating Mixture Salt and Rice Grains</h3>
      <div className="container-fluid">
        <div className="col-12 mt-5 d-flex gap-3 flex-md-row flex-column justify-content-center align-items-center">
          {selectedSeparating.map((item, index) => (
            <Fragment key={index}>
              {index === 1 && (
                <FontAwesomeIcon
                  className="fs-4 text-white rotate-on-mobile"
                  icon={"arrow-right"}
                />
              )}
              <div
                className={buildClass({
                  "col-md-3 col-9 col-lg-2 selected-separating": true,
                  active: item !== null,
                })}
              >
                <div
                  className={buildClass({
                    "number shadow-sm": true,
                    "animated-blink": isPlay && currentPlay === index,
                  })}
                >
                  {index + 1}
                </div>
                <div
                  onDrop={(event) => {
                    handleOnDrop(event, index);
                  }}
                  onDragOver={(event) => {
                    event.preventDefault();
                  }}
                  className={buildClass({
                    "text  shadow-sm rounded-pill": true,
                    "animated-blink": isPlay && currentPlay === index,
                  })}
                >
                  {item && item.text}
                </div>
              </div>
              {index === 1 && (
                <FontAwesomeIcon
                  className="fs-4 text-white rotate-on-mobile"
                  icon={"arrow-right"}
                />
              )}
            </Fragment>
          ))}
        </div>

        <div
          className={buildClass({
            "col-12 video-holder d-flex mt-5 justify-content-center": true,
            "justify-content-md-start": !isPlay,
            "justify-content-md-center": isPlay,
          })}
        >
          {!isPlay && (
            <div className="choice justify-self-start shadow col-md-3 col-9 col-lg-2">
              <h6 className="fs-6 text-white text-center">
                Click and drag the choice
              </h6>
              <div className="choice-item-temp">
                {choiceItem.map((item, index) => (
                  <div
                    onDragStart={(event) => {
                      event.dataTransfer.setData("item", item.text);
                    }}
                    key={index}
                    draggable
                    role={"button"}
                    className="choice-item shadow mb-3 rounded-pill d-flex align-items-center justify-content-center"
                  >
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {isPlay && (
            <video
              ref={videoRef}
              onLoadedData={() => {
                videoRef.current.muted = true;
                videoRef.current.play().then(() => {
                  videoRef.current.muted = false;
                });
              }}
              onEnded={handleVideoEnded}
              id="videoMedia"
              src=""
              controls
            ></video>
          )}
        </div>

        <div className="d-flex mt-md-3 mt-5">
          {lastInserted.length > 0 && !isPlay && (
            <button
              onClick={handleBackButton}
              className="btn btn-secondary px-5"
            >
              Back
            </button>
          )}

          {lastInserted.length === 3 && !isPlay && (
            <button
              onClick={handleNextButton}
              className="btn btn-secondary px-5 ms-auto"
            >
              Next
            </button>
          )}

          {currentPlay > 0 && currentPlay <= 2 && isPlay && (
            <button
              onClick={() => {
                let media = document.getElementById("videoMedia");
                media.src = selectedSeparating[currentPlay - 1].video;
                setCurrentPlay(currentPlay - 1);
              }}
              className="btn btn-secondary px-5"
            >
              Back
            </button>
          )}

          {currentPlay < 2 && currentPlay >= 0 && isPlay && (
            <button
              onClick={() => {
                let media = document.getElementById("videoMedia");
                media.src = selectedSeparating[currentPlay + 1].video;
                setCurrentPlay(currentPlay + 1);
              }}
              className="btn btn-secondary px-5 ms-auto"
            >
              Next
            </button>
          )}
          {currentPlay === 2 && isPlay && (
            <button
              onClick={handleResetButton}
              className="btn btn-secondary px-5 ms-auto"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Separating;
