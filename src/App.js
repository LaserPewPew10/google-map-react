import React from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Results />
    </div>
  );
}

export default App;
