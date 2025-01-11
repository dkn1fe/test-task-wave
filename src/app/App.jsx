import { Routes, Route } from "react-router";
import { HomePage } from "../pages";
import { PoliticPage } from "../pages/";
import { GamePage } from "../pages";
import "./App.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/politic-rules" element={<PoliticPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
};
