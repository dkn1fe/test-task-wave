import { cardInfo } from "../../../shared/utils";
import "../style/GameCard.scss";

export const GameCard = () => {
  return (
    <div className="game__card">
      <div className="container">
        <div className="game__card__title">
          <h3>
            TEST YOUR CASINO EXPERIENCE ON OUR INTERACTIVE GAMING PLATFORM:
            ENJOY THE GAME AND WIN!
          </h3>
        </div>
        <div className="game__card__list">
          {cardInfo.map((card) => (
            <div key={card.id} className="game__card__list_item">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
