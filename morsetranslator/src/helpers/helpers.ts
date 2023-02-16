import { translationKeys } from "./translationKeys";
import { LETTERS_REGEX } from "../constants/constants";

export const textToMorse = (searched: string) => {
  const chars = searched.split("");
  const translatedText: Array<string> = [];

  chars.forEach((char) => {
    if (char === " ") {
      translatedText.push(" ");
    } else {
      translatedText.push(translationKeys[char.toUpperCase()]);
    }
  });

  return translatedText;
};

export const validateLettersOnly = (input: string,  handleErrorChange: (value: string) => void) => {
  if (input === "" || LETTERS_REGEX.test(input)) {
    handleErrorChange("");
  } else {
    handleErrorChange("Enter only letters and spaces");
  }  
};

export const buttonText = (mode: string) => mode === "dark" ? "light" : "dark";
