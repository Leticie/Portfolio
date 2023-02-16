import { translationKeys } from "./translationKeys";

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
  const letters = /^[A-Za-z\s]+$/;
  if (input === "" || letters.test(input)) {
    return true;
  }
  return false;
};

const validateInputLength = (input: string) => {
  if (input.length <= 15) {
    return true;
  }
  return false;
};

export const validateInput = (
  input: string,
  handleErrorChange: (value: string) => void
) => {
  if (!validateInputLength(input)) {
    handleErrorChange("You have exceeded the maximum number of characters");
  } else if (!validateLettersOnly(input)) {
    handleErrorChange("Enter only letters and spaces");
  } else {
    handleErrorChange("");
  }
};

export const buttonText = (mode: string) => {
  if (mode === "dark") {
    return "light";
  }
  return "dark";
};
