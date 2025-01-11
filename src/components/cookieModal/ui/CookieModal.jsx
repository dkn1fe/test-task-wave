import "../style/CookieModal.scss";

export const CookieModal = ({setAcceptCookie}) => {

  return (
    <div className="cookie-modal-overlay">
      <div className="cookie-modal-background"></div>
      <div className="cookie-modal">
        <h3 className="cookie-modal__title">We use cookies</h3>
        <p className="cookie-modal__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          exercitationem vitae. Natus quaerat laborum cupiditate veniam quo
          voluptate omnis dolor mollitia, impedit esse! Quas consequuntur cum in
          repellat, obcaecati nulla illo eius eligendi vitae ad ipsa aperiam
          adipisci? Facere, magnam.
        </p>
        <div className="cookie-modal__buttons">
          <button
            onClick={() => setAcceptCookie(true)}
            className="cookie-modal__button cookie-modal__accept"
          >
            Accept
          </button>
          <button
            onClick={() => setAcceptCookie(true)}
            className="cookie-modal__button cookie-modal__decline"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
