import React, { useState } from "react";
import StageOne from "../../../components/organisms/Soap/StageOne";
import StageTwo from "../../../components/organisms/Soap/StageTwo";

function Soap() {
  const [stage, setStage] = useState(1);
  const changeStage = (stage) => {
    setStage(stage);
  };
  return (
    <div className="soap">
      <h3 className="fs-3 text-center">Staying Healthy - Effect of Soap</h3>
      {stage === 1 ? (
        <StageOne changeStage={changeStage} />
      ) : (
        <StageTwo changeStage={changeStage} />
      )}
    </div>
  );
}

export default Soap;
