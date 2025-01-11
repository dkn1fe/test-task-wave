import { Header } from "../../components/header";
import { Warning } from "../../components/warning";
import { Footer } from "../../components/footer";
import { PoliticRules } from "../../components/politicRules";

export const PoliticPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <PoliticRules />
      <Warning type = 'second' />
      <footer>
        <Footer />
      </footer>
    </>
  );
};
