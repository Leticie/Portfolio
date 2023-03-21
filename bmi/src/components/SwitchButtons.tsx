import "./SwitchButtons.css";
import { IMPERIAL, METRIC } from "../constants/constants";

interface SwitchButtonsI {
  setNewMeasurement: React.Dispatch<React.SetStateAction<string>>
}

export const SwitchButtons = ({ setNewMeasurement }:SwitchButtonsI) => {
  return (
    <div className="switch-buttons-box">
      <button
        className="switch-button metric-button"
        onClick={() => setNewMeasurement(METRIC)}
      >
        Metric
      </button>
      <button
        className="switch-button imperial-button"
        onClick={() => setNewMeasurement(IMPERIAL)}
      >
        Imperial
      </button>
    </div>
  );
};
