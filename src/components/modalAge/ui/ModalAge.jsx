import { useEffect } from "react";
import { useNavigate } from "react-router";
import age from "../../../assets/header/age.png";
import "../style/ModalAge.scss";

export const ModalAge = ({ isOlderAge, setIsOlderAge }) => {
  const navigation = useNavigate();

  const onGetAge = (state) => {
    setIsOlderAge(state);
    if (!state) {
      navigation("/politic-rules");
    }
    if (state) {
      navigation("/");
    }
  };

  useEffect(() => {
    if (isOlderAge === null) document.body.style.overflow = "hidden";
    if (isOlderAge || !isOlderAge) document.body.style.overflow = "auto";
  }, [isOlderAge]);

  return (
    <div className="fill__bg">
      <div className="modal">
        <div className="modal__container">
          <div className="modal__wrapper">
            <div className="modal__wrapper_title">
              <h3>Are you 18 years old?</h3>
              <img src={age} alt="age" loading="lazy" />
            </div>
            <div className="modal__wrapper_buttons">
              <button onClick={() => onGetAge(true)}>Yes,i'm older 18</button>
              <button onClick={() => onGetAge(false)}>No,i'm little 18</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
