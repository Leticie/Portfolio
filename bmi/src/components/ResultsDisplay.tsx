import { BmiZoneInfo } from "./BmiZoneInfo";
import "./ResultsDisplay.css"
import { determineBmiZone } from "../helpers/BmiHelpers";
interface ResultsDisplayI {
  bmi:number
}

const BmiDisplay = ({ bmi }:ResultsDisplayI) => (
    <div>
      <p>BMI: {bmi}</p>
    </div>
  );

const BmiZoneDisplay = ({ bmi }:ResultsDisplayI) => (
    <div>
      <p>Zone: {determineBmiZone(bmi)}</p>
    </div>
  );
  
export const ResultsDisplay = ({ bmi }:ResultsDisplayI) => (
    <>
      <div className="description-box bmi-results">
        <BmiDisplay bmi={bmi} />
      </div>
      <div className="zone-results">
        <BmiZoneDisplay bmi={bmi} />
        <BmiZoneInfo bmi={bmi} />
      </div>      
    </>  

  );