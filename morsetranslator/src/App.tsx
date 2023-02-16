import { useState } from "react";
import { Translation } from "./components/Translation";
import { validateLettersOnly } from "./helpers/helpers";
import "./App.css";
import { ModeSwitchButton } from "./components/ModeSwitchButton";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState("light");

  const handleErrorChange = (value: string) => setError(value);
  const handleModeChange = () => mode === "light" ? setMode("dark") : setMode("light");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateLettersOnly(event.target.value, handleErrorChange);
    setInput(event.target.value);
  };

  return (
    <div className={`app ${mode}`}>
      <ModeSwitchButton mode={mode} handleModeChange={handleModeChange} />
      <h1 className={`heading ${mode}`}>Morse Translator</h1>
      <form>
        <input className={`input`} type="text" onChange={handleChangeInput} />
      </form>
      {error && <label className={`error-message`}>{error}</label>}
      <Translation input={input} mode={mode} />
    </div>
  );
}

export default App;
