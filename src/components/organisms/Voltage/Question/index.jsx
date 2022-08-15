import React from "react";
import {
  TYPE_QUESTION_ONE,
  TYPE_QUESTION_THREE,
  TYPE_QUESTION_TWO,
} from "../../../../constants";
import TypeOne from "../TypeOne";
import TypeThree from "../TypeThree";
import TypeTwo from "../TypeTwo";


function Question({ question, changeAnsware, ...props }) {
  return (
    <div className="d-flex gap-3 p-3 align-items-center justify-content-center flex-md-row-reverse flex-wrap flex-column">
      <div className="col-12">
        <div className="row">
          <div className="col-2 col-md-1 rounded shadow-sm bg-circuit text-white py-4 px-2 d-flex align-items-center justify-content-center">
            {question.name}
          </div>
          <div className="col-10 col-md-11 rounded shadow-sm bg-light ps-3 py-4 px-2">
            <div className="col-12">{question.question}</div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex mt-md-3 mt-5 flex-column flex-md-row flex-wrap align-items-center justify-content-center flex-wrap gap-3">
        {question.addition.map((i, index) => (
          <div
            className={
              question.additionWide.includes(index)
                ? "image-holder wide"
                : "image-holder"
            }
            key={index}
          >
            {question.additionType[index] === "video" ? (
              <video src={i} controls></video>
            ) : (
              <img src={i} alt="" />
            )}
          </div>
        ))}

        <div
          className={
            question.additionWide.length > 0
              ? "col-lg-4 col-12"
              : "col-lg-7 col-12"
          }
        >
          {TYPE_QUESTION_ONE === question.type && (
            <TypeOne
              choice={question.choice}
              keys={question.key}
              id={question.id}
            />
          )}

          {TYPE_QUESTION_TWO === question.type && (
            <TypeTwo
              known={question.known}
              hint={question.hint}
              choice={question.choice}
              keys={question.key}
              id={question.id}
            />
          )}

          {TYPE_QUESTION_THREE === question.type && (
            <TypeThree
              hint={question.hint}
              choice={question.choice}
              keys={question.key}
              id={question.id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
