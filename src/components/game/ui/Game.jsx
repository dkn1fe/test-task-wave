import "../style/Game.scss";

export const Game = () => {
  return (
    <div className="game">
      <iframe
        src="https://www.crazygames.com/embed/sonny-2"
        style={{ width: "100%", height: "100%", border: "0" }}
        frameBorder="0"
        allow="gamepad *;"
        allowFullScreen
      ></iframe>
    </div>
  );
};
