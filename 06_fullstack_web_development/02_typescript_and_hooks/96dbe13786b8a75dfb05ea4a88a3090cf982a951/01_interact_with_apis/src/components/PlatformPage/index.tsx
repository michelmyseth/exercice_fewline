import React from "react";
import { Platform } from "../../types/Platform";
import { Game } from "../../types/Platform";

const PlatformPage: React.FC = (): JSX.Element => {
  const [onPlatform, setPlatform] = React.useState<Platform[]>([]);
  const [onGame, setGame] = React.useState<Platform[]>([]);
  const [litsen, onClick] = React.useState<string>("");

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", {
      headers: { accept: "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setPlatform(result);
      });
    fetch(`https://videogames-sparta.herokuapp.com/platforms/${litsen}`, {
      headers: { accept: "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setGame(result);
      });
  }, [litsen]);

  console.log(onGame);

  return (
    <>
      <select
        onChange={(event): void => {
          onClick(event.target.value);
        }}
      >
        {onPlatform.map((platform) => (
          <option key={platform.name}>{platform.slug}</option>
        ))}
      </select>
      <ul className="list-group">
        {onGame.map((game) =>
          game.games.map((jeu) => {
            return (
              <li key={jeu.name} className="list-group-item">
                {jeu.name}
              </li>
            );
          }),
        )}
      </ul>
    </>
  );
};

export default PlatformPage;
