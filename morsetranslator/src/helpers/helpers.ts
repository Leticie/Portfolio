import { translationKeys } from "../translationKeys"

export const textToMorse = (searched) => {
    const chars = searched.split('');
    const translatedText:Array<string> = []

    chars.forEach(char =>
        translatedText.push(translationKeys[char.toUpperCase()])
    )

    return translatedText
}

export const lettersOnly = (input, handleErrorChange) => {
    const letters = /^[A-Za-z]+$/;
    if (input === "" || letters.test(input)) {
        handleErrorChange(false)
    } else {
        handleErrorChange(true)
    }
}
