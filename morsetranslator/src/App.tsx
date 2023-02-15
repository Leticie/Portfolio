import { useState } from "react";
import { Translation } from "./components/Translation";
import { lettersOnly } from "./helpers/helpers";
import "./App.css" 
import { SwitchButton } from "./components/SwitchButton";


function App() {
  const [searched, setSearched] = useState("")
  const [error, setError] = useState(false)
  const [mode, setMode] = useState("light")
  
  const handleErrorChange = (value) => {
    setError(value)
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    lettersOnly(event.target.value, handleErrorChange)
    setSearched(event.target.value)
  }

  const handleModeChange = () => {
    if (mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }  
  }


  return (
    <div className={`main-app-${mode}`}>
      <SwitchButton mode={mode} handleModeChange={handleModeChange}/>
      <h1 className={`heading-${mode}`}>Morse Translator</h1>
      <form>
        <input className={`input-${mode}`} type="text" onChange={handleChangeInput} />
      </form>
      {error?
        <label className={`error-message-${mode}`}>Enter only letters and spaces</label>:""
        } 
      <Translation searched={searched} mode={mode}/> 
    </div>
  );
}

export default App;
