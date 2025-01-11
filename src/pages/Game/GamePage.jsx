import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Game } from "../../components/game";

export const GamePage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Game />
      <footer>
        <Footer />
      </footer>
    </>
  );
};
