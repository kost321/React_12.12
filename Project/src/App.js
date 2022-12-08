import React from "react";
import FormQuestionnaire from "./components/form/FormQuestionnaire";

import './App.css'

 class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>Creating a questionnaire</div>
        <FormQuestionnaire/>
      </div>
    );
  }
}

export default App;
