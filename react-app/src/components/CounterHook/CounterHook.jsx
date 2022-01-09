import React, { useState } from "react";

// destructuring of props
export const CounterHook = ({ initialNrOfClicks, buttonLabel }) => {
  const [nrOfClicks, setNrOfClicks] = useState(initialNrOfClicks || 0);

  return (
    <div className="counter">
      <button onClick={() => setNrOfClicks(nrOfClicks + 1)}>
        {buttonLabel || "Press Me"}
      </button>
      <p>Number of clicks {nrOfClicks}</p>
    </div>
  );
};
