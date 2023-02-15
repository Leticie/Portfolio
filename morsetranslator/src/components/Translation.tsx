import { textToMorse } from "../helpers/helpers"
import './Translation.css'; 
interface searchedI { searched:string }

export const Translation = ({searched}:searchedI) => {
    const morse:Array<string> = textToMorse(searched)

    console.log(morse)

    return (
        <div className="Translation">
            <p>{morse.join(" | ")}</p>
        </div>
    )
}