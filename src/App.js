import { useState } from "react";
import "./styles/app.css"

function App() {
  const [value, setValue] = useState('')
  const [preVal, setPreVal] = useState('')
  const [postVal, setPostVal] = useState('')

  // whenever click button of digit
  const handleClick = (val) => {
    if (val == '=') {
      let statement = '';
      const fSatetement = statement + value;

      // for percentage
      if (fSatetement.includes('%')) {
        const pre = fSatetement.split('%')[0]
        const post = fSatetement.split('%')[1]
        const calc = Number(pre) * (Number(post) / 100);
        setValue(calc);
      } else { // for normal calculation
        setValue(eval(fSatetement))
      }
    } else {
      let num = `${value}` + val
      setValue(num)
    }
  }

  // clear function
  const handleClear = () => {
    setValue('')
  }
  // delete function
  const handleDelete = () => {
    if (value) {
      setValue(value.slice(0, (value.length - 1)))
    }
  }

  return (
    <div className="calculator">
      <div className="calculator-main-body">
        <div className="calculator--header">
          <h1>Simple Calculator</h1>
        </div>
        <div className="calculator--body">
          <div className="calculator--body--display">
            <input value={value} />
          </div>
          <div className="calculator--body--keypad">
            <div className="row">
              <button onClick={() => handleClear('AC')} disabled={!value} className="btn">AC</button>
              <button onClick={() => handleDelete('x')} disabled={!value} className="btn">x</button>
              <button onClick={() => handleClick('%')} className="btn">%</button>
              <button onClick={() => handleClick('/')} className="btn">/</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick(7)} className="btn">7</button>
              <button onClick={() => handleClick(8)} className="btn">8</button>
              <button onClick={() => handleClick(9)} className="btn">9</button>
              <button onClick={() => handleClick('*')} className="btn">X</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick(4)} className="btn">4</button>
              <button onClick={() => handleClick(5)} className="btn">5</button>
              <button onClick={() => handleClick(6)} className="btn">6</button>
              <button onClick={() => handleClick('-')} className="btn">-</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick(1)} className="btn">1</button>
              <button onClick={() => handleClick(2)} className="btn">2</button>
              <button onClick={() => handleClick(3)} className="btn">3</button>
              <button onClick={() => handleClick('+')} className="btn">+</button>
            </div>
            <div className="row">
              <button onClick={() => handleClick('//')} className="btn">\\</button>
              <button onClick={() => handleClick(0)} className="btn">0</button>
              <button onClick={() => handleClick('.')} className="btn">.</button>
              <button onClick={() => handleClick('=')} className="btn">=</button>
            </div>
          </div>
        </div>
      </div>
      <div className="calculator--footer">
        <p> Copyright &copy; Najmul Islam - {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
