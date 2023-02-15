import { buttonText } from "../helpers/helpers"
import "./SwitchButton.css"

export const SwitchButton = ({mode, handleModeChange}) => (
  <div>
    <button className={`button-${mode}`} onClick={handleModeChange}>{buttonText(mode)}</button>
  </div>
)