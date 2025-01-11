import { UseCookies } from "../../shared/UseCookie";
import { Footer } from "../../components/footer";
import { GameBanner } from "../../components/game";
import { GameCard } from "../../components/game";
import { Header } from "../../components/header";
import { Warning } from "../../components/warning";
import { CookieModal } from "../../components/cookieModal";
import { WinText } from "../../components/winText";
import { ModalAge } from "../../components/modalAge";
import "./HomePage.scss";

export const HomePage = () => {
  const { onSetAgeCookie, getCookieAge, onSetAcceptCookie, getAcceptCookie } = UseCookies();
  const isOlderAge = getCookieAge();
  const isAcceptCookie = getAcceptCookie();

  return (
    <>
      {isOlderAge === null && (
        <ModalAge isOlderAge={isOlderAge} setIsOlderAge={onSetAgeCookie} />
      )}
      {isAcceptCookie === null && isOlderAge && (
        <CookieModal setAcceptCookie={onSetAcceptCookie} />
      )}
      <header>
        <Header />
      </header>
      <Warning type="first" />
      <WinText />
      <GameBanner />
      <GameCard />
      <Warning type="second" />
      <footer>
        <Footer />
      </footer>
    </>
  );
};
