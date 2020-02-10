import React from 'react';

export const ScoreCard = (props) => {
  return(
    <div className="row">
      <div className="col">
        <div className="nes-container is-centered is-rounded mb-3">
          <p className="">Round 1 of 10</p>
          <progress className="m-0 nes-progress is-success" value="20" max="100" style={{height: "1em"}}></progress>
        </div>
      </div>
    </div>
  );
}
