import React, { useState } from "react";


function App() {
  const [waga, setWaga] = useState(70)
  const [wzrost, setWzrost] = useState(170)

  function calculate() {
    const bmi = waga / (wzrost*wzrost) * 10000
    if(bmi < 18.5) {
      return bmi + " niedowaga"
    } else if(bmi >= 18.5 && bmi <= 24.9) {
      return bmi + " prawidłowa waga"
    } else if(bmi >= 25 && bmi <=29.9) {
      return bmi + " nadwaga"
    } 
    
    return bmi + " otyłość"
    
    
  }
  
  const result = calculate()
  return (
    <div className="App">
      <div>
    WAGA<input value={waga} onChange={e =>setWaga(e.target.value)}/>
    <br />
    WZROST<input value={wzrost} onChange={e =>setWzrost(e.target.value)}/>
    <br />
    <button onClick={calculate}>OBLICZ</button>
    <div>{waga}</div>
    <div>{wzrost}</div>
    {result}
    </div>
    </div>
  );
}

export default App;
