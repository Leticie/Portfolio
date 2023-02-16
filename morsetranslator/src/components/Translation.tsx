import { textToMorse } from "../helpers/helpers";
import "./Translation.css";

interface TranslationI {
  input: string;
  mode: string;
}

export const Translation = ({ input, mode }: TranslationI) => (
  <div className={`Translation ${mode}`}>
    <p>{textToMorse(input).join(" | ")}</p>
  </div>
);
