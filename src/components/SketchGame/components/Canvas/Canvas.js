import React from "react";
import { useEffect, useState } from "react";

export const Canvas = React.forwardRef((props, ref) => {

  // had to use state in order not to lose the mousedown when parent re-renders
  let [ mouseDown, setMouseDown ] = useState(false);
  
  let lastX;
  let lastY;

  function drawLine(canvas, x, y, lastX, lastY) {
    let context = canvas.getContext("2d");

    context.strokeStyle = "#000000";
    context.lineWidth = 12;
    context.lineJoin = "round";

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();

    return [x, y];
  }

  const handleMouseup = () => {
    setMouseDown(false);
    [lastX, lastY] = [undefined, undefined];
  };

  const handleMousemove = e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (mouseDown) {
      [lastX, lastY] = drawLine(e.target, x, y, lastX, lastY);
    }
  };

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.height, canvas.width);

  }, [ref]);

  return (
    <canvas
      height={ 300 }
      width={ 300 }
      ref={ ref }
      onMouseDown={ () => setMouseDown(true) }
      onMouseUp = { handleMouseup }
      onMouseMove = { e => handleMousemove(e) }
    />
  );
});

export const clearCanvas = (ref) => {
  const canvas = ref.current;
  const ctx = canvas.getContext("2d");
  ctx.fillRect(0, 0, canvas.height, canvas.width);
}
