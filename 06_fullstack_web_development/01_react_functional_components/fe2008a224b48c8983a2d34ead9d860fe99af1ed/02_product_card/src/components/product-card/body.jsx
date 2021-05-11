import React from "react";

const CardBody = (props) => {
  const { slug } = props;
  const [display, setUse] = React.useState(true);

  return (
    <>
      <img src={slug.cover.url} />
      <p>{slug.first_release_date}</p>
      <p>{slug.genres.map((genre) => genre.name)}</p>
      <p>{slug.summary}</p>
      {display
        ? slug.screenshots
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
