import React from "react";
import GlobalStyles from "./styles/global";
import Navbar from "./components/Navbar";
import StockOptions from "./pages/StockOptions";

const App: React.FC = () => (
  <main>
    <GlobalStyles />
    <Navbar />
    <StockOptions />
  </main>
);

export default App;
