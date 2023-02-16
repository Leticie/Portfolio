import { buttonText } from "../helpers/helpers";
import "./ModeSwitchButton.css";

interface ModeSwitchButtonI {
  mode: string;
  handleModeChange: () => void;
}

export const ModeSwitchButton = ({ mode, handleModeChange }: ModeSwitchButtonI) => (
  <div className="button-container">
    <button className={`button ${mode}`} onClick={handleModeChange}>
      {buttonText(mode)}
    </button>
  </div>
);
