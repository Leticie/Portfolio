import { useState } from "react";
import { Translation } from "./components/Translation";
import { lettersOnly } from "./helpers/helpers";
import "./App.css" 


function App() {
  const [searched, setSearched] = useState("")
  const [error, setError] = useState(false)
  
  const handleErrorChange = (value) => {
    setError(value)
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    lettersOnly(event.target.value, handleErrorChange)
    setSearched(event.target.value)
  }


  return (
    <div className="main-app">
      <h1>Morse Translator</h1>
      <form>
        <input type="text" onChange={handleChangeInput} />
      </form>
      {error?
        <label className="error-message">Only letters might be entered</label>:""
        } 
      <Translation searched={searched} /> 
    </div>
  );
}

export default App;
