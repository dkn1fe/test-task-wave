import { warningsText } from "../../../shared/utils";
import age from "../../../assets/header/age.png";
import "../style/Warning.scss";

export const Warning = ({ type }) => {

  const firstWarning = type === "first";
  const secondWarning = type === "second";

  return (
    <div className={`warning ${secondWarning && 'warning_too'}`}>
      <div className="container">
        <div className="warning__wrapper">
          {firstWarning && (
            <>
              <h2>PLAY SMART: ONLINE CASINO FUN FOR ADULTS OVER 18!</h2>
              <img src={age} />
              {warningsText.map((warning) => (
                <p key={warning.id} className={warning.class}>
                  {warning.desc}
                </p>
              ))}
            </>
          )}
          {secondWarning && (
            <>
              <h2>
                SMART GAMING FUN: ONLINE ENTERTAINMENT GAMES FOR ADULTS 18 AND
                OVER!
              </h2>
              {warningsText.map((warning) => (
                <p key={warning.id} className={warning.class}>
                  {warning.desc}
                </p>
              ))}
              <img src={age} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
