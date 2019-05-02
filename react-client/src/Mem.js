import React from "react";
import drawCircle from "./utilities/canvasLoadAnimation";

function Mem(props) {
  const { totalMem, usedMem, memUsage, freeMem } = props.memData;
  const canvas = document.querySelector(".memCanvas");
  drawCircle(canvas, memUsage * 100);
  console.log(memUsage);
  return (
    <div className="col-sm-3 mem">
      <h3>medm!</h3>
      <div className="canvas-wrapper">
        <canvas className="memCanvas" width="200" height="200" />
      </div>
    </div>
  );
}

export default Mem;
