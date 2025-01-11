import { politicRules } from "../../../shared/utils";
import "../style/PoliticRules.scss";

export const PoliticRules = () => {
  return (
    <div className="politic__rules">
      <div className="container">
        <div className="politic__rules__title">
          <h2>Politic Rules</h2>
          <div className="politic__rules__list">
            {politicRules.map((rules) => (
              <div key={rules.id} className="politic__rules__list_item">
                <h3>{rules.title}</h3>
                <p>{rules.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
