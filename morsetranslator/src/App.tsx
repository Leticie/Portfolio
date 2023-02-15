import { useState } from "react";
import { Translation } from "./components/Translation";


function App() {
  const [searched, setSearched] = useState("")
  
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearched(event.target.value)
  }

  return (
    <div>
      <h1>Morse Translator</h1>
      <form>
        <input onChange={handleChangeInput} />
      </form>
      <Translation searched={searched} />
    </div>
  );
}

export default App;
