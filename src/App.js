import React from 'react';
import Header from "./components/Header/Header";
import LearningPaths from "./components/LearningPaths/LearningPaths";
import Bootcamps from "./components/Bootcamps/Bootcamps";
import Contribute from "./components/Contribute/Contribute";

function App() {
  return (
    <div className="App">
      <Header />
      <LearningPaths />
      <Bootcamps />
      <Contribute />
    </div>
  );
}

export default App;
