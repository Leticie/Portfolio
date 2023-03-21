import { calculateBmi } from "../helpers/BmiHelpers";
import { useState } from "react";
import { validateInput } from "../helpers/BmiHelpers";
interface MetricBMICalculatorI {
    setBmi: React.Dispatch<React.SetStateAction<number | null | undefined>>
    handleError: (value: string) => void
}

export const MetricBMICalculator = ({setBmi, handleError}:MetricBMICalculatorI) => {
    const [weightKg, setWeightKg] = useState<number|null>(null);
    const [heightCm, setHeightCm] = useState<number|null>(null);

    const handleChangeWeightKg = (event) => setWeightKg(event.target.value);
    const handleChangeHeightCm = (event) => setHeightCm(event.target.value);

    const handleClick = (event) => {
        event.preventDefault();
        validateInput(weightKg, heightCm, handleError)
        setBmi(calculateBmi(weightKg, heightCm))
    }

    return (
        <div>
            <form>
                <h3>Weight</h3>
                <input className="input" type="number" onChange={handleChangeWeightKg}></input> kg
                <h3>Height</h3>
                <input className="input" type="number" onChange={handleChangeHeightCm}></input> cm
            </form>
            <button className={"submit-button"} onClick={handleClick}>submit</button>
        </div>
    )

}