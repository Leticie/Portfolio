import { buttonText } from "../helpers/helpers";
import "./SwitchButton.css";

interface SwitchButtonI {
  mode: string;
  handleModeChange: () => void;
}

export const SwitchButton = ({ mode, handleModeChange }: SwitchButtonI) => (
  <div className="button-container">
    <button className={`button ${mode}`} onClick={handleModeChange}>
      {buttonText(mode)}
    </button>
  </div>
);
