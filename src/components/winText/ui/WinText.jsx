import winImg from "../../../assets/winText/winIchigo.png";
import "../style/WinText.scss";

export const WinText = () => {
  return (
    <div className="wintext">
      <div className="wintext__block_first" />

      <div className="wintext__block__second">
        <div className="wintext__wrapper">
          <img src={winImg} alt="Picture" />
          <div className="wintext__wrapper_text">
            <h3>
            Join us today and build your way to victory for free!
            </h3>
            <p>
              We invite you on a thrilling journey in our social online casino,
              where endless opportunities for excitement and incredible winnings
              await you. Immerse yourself in the emotional atmosphere of the
              game, feel the adrenaline rush and enjoy every moment of this
              exciting journey! See for yourself that winnings in our casino are
              a reality waiting for you!
            </p>
          </div>
        </div>
      </div>

      <div className="wintext__block__third" />
    </div>
  );
};
