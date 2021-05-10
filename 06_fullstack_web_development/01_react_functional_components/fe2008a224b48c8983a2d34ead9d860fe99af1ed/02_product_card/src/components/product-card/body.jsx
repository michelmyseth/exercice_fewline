import React from "react";
import zelda from "../../../data/zelda";

const CardBody = () => {
  const [display, setUse] = React.useState(true);

  return (
    <>
      <img src={zelda.cover.url} />
      <p>{zelda.first_release_date}</p>
      <p>{zelda.genres.map((genre) => genre.name)}</p>
      <p>{zelda.summary}</p>
      {display
        ? zelda.screenshots
            .map((screenshot, index) => {
              return (
                <div key={index}>
                  <img src={screenshot.url} />
                </div>
              );
            })
            .slice(0, 1)
        : null}
      ;<button onClick={() => setUse(!display)}>{display}</button>
    </>
  );
};

export default CardBody;
