import React from "react";
import FormQuestionnaire from './components/FormQuestionnaire/FormQuestionnaire.jsx'

import './App.css'

 class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="title">Создание анкеты</div>
        <FormQuestionnaire/>
      </div>
    );
  }
}

export default App;
