import { useState } from "react";
import { AppDescription } from "./components/AppDescription";
import { ResultsDisplay } from "./components/ResultsDisplay";
import { METRIC } from "./constants/constants";
import { SwitchButtons } from "./components/SwitchButtons";
import { MetricBMICalculator } from "./components/MetricBMICalculator";
import { ImperialBMICalculator } from "./components/ImperialBMICalculator";
import "./App.css";

const App = () => {
  const [newMeasurement, setNewMeasurement] = useState<string>(METRIC);
  const [bmi, setBmi] = useState<number|null|undefined>(null);
  const [error, setError] = useState<string>("");

  const handleError = (value:string) => setError(value);

  return (
    <div className="border-main">
      <div className="main">
        <h1>BMI CALCULATOR</h1>
        <AppDescription />
        <div>
          <SwitchButtons setNewMeasurement={setNewMeasurement} />
          <div className={`calculator-box ${newMeasurement}`}>
            {newMeasurement === METRIC ? (
              <MetricBMICalculator setBmi={setBmi} handleError={handleError} />
            ) : (
              <ImperialBMICalculator
                setBmi={setBmi}
                handleError={handleError}
              />
            )}
          </div>
        </div>
        {error ? (
          <label className="error">{error}</label>
        ) : bmi ? (
          <ResultsDisplay bmi={bmi} />
        ) : null}
      </div>
    </div>
  );
};

export default App;
