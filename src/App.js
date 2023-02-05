import "./App.css";
import React, { useState } from 'react';
import StartScreen from "./components/StartScreen";
import MenuScreen from "./components/MenuScreen";
import PaymentScreen from "./components/PaymentScreen";
import PreparationScreen from "./components/PreparationScreen";
import ReadyScreen from "./components/ReadyScreen";


const App = () => {
  const [screen, setScreen] = useState('start');

  return (
    <div className="App">
      {screen === 'start' && <StartScreen setScreen={setScreen} />}
      {screen === 'menu' && <MenuScreen setScreen={setScreen} />}
      {screen === 'payment' && <PaymentScreen setScreen={setScreen} />}
      {screen === 'preparation' && <PreparationScreen setScreen={setScreen} />}
      {screen === 'ready' && <ReadyScreen setScreen={setScreen} />}
    </div>
  );
};


export default App;

