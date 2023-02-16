import { textToMorse } from "../helpers/helpers";
import "./Translation.css";

interface searchedI {
  searched: string;
  mode: string;
}

export const Translation = ({ searched, mode }: searchedI) => {
  const morse: Array<string> = textToMorse(searched);

  return (
    <div className={`Translation ${mode}`}>
      <p>{morse.join(" | ")}</p>
    </div>
  );
};
