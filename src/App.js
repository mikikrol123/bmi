import React, { useState } from "react";


function App() {
  const [waga, setWaga] = useState(0)
  const [wzrost, setWzrost] = useState(0)

  function oblicz() {
    
    const bmi = waga / (wzrost*wzrost) * 10000
    console.log(bmi)
  }
  return (
    <div className="App">
      <div>
    WAGA<input value={waga} onChange={e =>setWaga(e.target.value)}/>
    <br />
    WZROST<input value={wzrost} onChange={e =>setWzrost(e.target.value)}/>
    <br />
    <button onClick={oblicz}>OBLICZ</button>
    
    </div>
    </div>
  );
}

export default App;
