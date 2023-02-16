import { textToMorse } from "../helpers/helpers";
import "./Translation.css";

interface TranslationI {
  input: string;
  mode: string;
}

export const Translation = ({ input, mode }: TranslationI) => {
  const morse: Array<string> = textToMorse(input);

  return (
    <div className={`Translation ${mode}`}>
      <p>{morse.join(" | ")}</p>
    </div>
  );
};
