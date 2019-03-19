import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import ZeroButton from './components/ButtonComponents/ZeroButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const numButtons =   [
  {
    numButton: 9,
    buttonStyle: 'numButton'
  },
  {
    numButton: 8,
    buttonStyle: 'numButton'
  },
  {
    numButton: 7,
    buttonStyle: 'numButton'
  },
  {
    numButton: 6,
    buttonStyle: 'numButton'
  },
  {
    numButton: 5,
    buttonStyle: 'numButton'
  },
  {
    numButton: 4,
    buttonStyle: 'numButton'
  },
  {
    numButton: 3,
    buttonStyle: 'numButton'
  },
  {
    numButton: 2,
    buttonStyle: 'numButton'
  },
  {
    numButton: 1,
    buttonStyle: 'numButton'
  },
]

let clButton = {text: 'clear'}

let zrButton = {num: '0'}

const actButtons = [
  {
    actButton: '\xF7', 
    buttonStyle: 'actButton'
  },
  {
    actButton: 'x',
    buttonStyle: 'actButton'
  },
  {
    actButton: '-',
    buttonStyle: 'actButton'
  },
  {
    actButton: '+',
    buttonStyle: 'actButton'
  },
  {
    actButton: '=',
    buttonStyle: 'actButton'
  }
]

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay/>
      <div className="numAndAct">
        <div className="leftButtons">
          <ClearButton obj={clButton}/> 
          <div className="numberButtonsContainer">
            {numButtons.map(objFromArray => (
              <NumberButton obj={objFromArray}/>
            ))}
          </div>
          <ZeroButton obj={zrButton}/>
        </div>
        <div className="actionButtonsContainer">
          {actButtons.map(objFromArray => (
            <ActionButton obj={objFromArray}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
