import { textToMorse } from "./helpers"

describe("properly traslating text to morse", () => {
    test("hello to morse", () => {
        expect(textToMorse("hello")).toEqual(["....", ".", ".-..", ".-..", "---"])
    })
    
    test("handling space", () => {
        expect(textToMorse(" ")).toEqual([" "])
    })

    test("handling banned characters", () => {
        expect(textToMorse("/")).toEqual([undefined])
    })
       
})