import { translationKeys } from "./translationKeys";
import { MAX_CHARACTERS } from "../constants/constants";
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

const validateLettersOnly = (input: string) => {
  if (input === "" || LETTERS_REGEX.test(input)) {
    return true;
  }
  return false;
};

const validateInputLength = (input: string) => {
  if (input.length <= MAX_CHARACTERS) {
    return true;
  }
  return false;
};

export const validateInput = (input: string, handleErrorChange: (value: string) => void) => {
  if (!validateInputLength(input)) {
    handleErrorChange("You have exceeded the maximum number of characters");
  } else if (!validateLettersOnly(input)) {
    handleErrorChange("Enter only letters and spaces");
  } else {
    handleErrorChange("");
  }
};

export const buttonText = (mode: string) => mode === "dark" ? "light" : "dark";
