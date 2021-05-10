import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [display, setUse] = React.useState(true);
  return (
    <div>
      {display ? <p>test</p> : null}
      <button onClick={() => setUse(!display)}> {display}</button>
    </div>
  );
};
