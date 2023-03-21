import { useState } from "react"
import { calculateBmi } from "../helpers/BmiHelpers"
import { validateInput } from "../helpers/BmiHelpers"
import { weightImperialToMetric, heightImperialToMetric } from "../helpers/ImperialConversionHelpers"
interface ImperialBMICalculatorI {
    setBmi: React.Dispatch<React.SetStateAction<number | null | undefined>>
    handleError: (value: string) => void
}

export const ImperialBMICalculator = ({setBmi, handleError}:ImperialBMICalculatorI) => {
    const [heightFeet, setHeightFeet] = useState<number|null>(null)
    const [heightInches, setHeightInches] = useState<number|null>(null)
    const [weightPounds, setWeightPounds] = useState<number|null>(null)

    const handleWeightPoundsChange = (event) => setWeightPounds(event.target.value)
    const handleHeightFeetChange = (event) => setHeightFeet(event.target.value)
    const handleHeightInchesChange = (event) => setHeightInches(event.target.value)


    const handleClick = (event) => {
        event.preventDefault()
        const weightKg = weightImperialToMetric(weightPounds)
        const heightCm = heightImperialToMetric(heightFeet, heightInches)
        validateInput(weightKg, heightCm, handleError)
        setBmi(calculateBmi(weightKg, heightCm))
    }

    return (
        <div>
            <form>
                <h3>Weight</h3>
                <input className="input" type="number" onChange={handleWeightPoundsChange}></input> lbs
                <h3>Height</h3>
                <div>
                    <input className="input" type="number" onChange={handleHeightFeetChange}></input> ft
                </div>
                <div>
                    <input className="input" type="number" onChange={handleHeightInchesChange}></input> in
                </div>
            </form>
            <button className={"submit-button"} onClick={handleClick}>submit</button>
        </div>
    )

}