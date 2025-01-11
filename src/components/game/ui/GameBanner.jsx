import {Link} from 'react-router'
import "../style/GameBanner.scss";

export const GameBanner = () => {
  return (
    <div className="game__banner">
      <div className="container">
        <div className="game__banner__wrapper">
          <h3>
            DIVE INTO THE WORLD OF FISHING WITH FISH SLOT: TRY YOUR LUCK NOW!
          </h3>
          <p>
            Dive into the exciting world of the deep ocean with our new Fish
            Slot game. Join the team of experienced fishermen and go hunting for
            big fish. The game impresses with beautiful 3D graphics, exciting
            bonus rounds and numerous game options completely free of charge.
          </p>
          <Link to = '/game'>
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};
