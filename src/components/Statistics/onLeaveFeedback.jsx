import React from "react";
const LeaveFeedback = ({ Good, Neutral, Bad, Total, Percentage }) => (
  <div>
    <p>
      Good: <span>{Good}</span>
    </p>
    <p>
      Neutral: <span>{Neutral}</span>
    </p>
    <p>
      Bad: <span>{Bad}</span>
    </p>
    <p>
      Total: <span>{Total}</span>
    </p>
    <p>
      Percentage: <span>{Percentage}%</span>
    </p>
  </div>
);

export default LeaveFeedback;