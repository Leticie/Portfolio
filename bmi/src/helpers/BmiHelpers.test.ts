import { calculateBmi, determineBmiZone } from "./BmiHelpers";

describe("properly calculating bmi from height and weight", () => {
    test("bmi calculation 1", () => {
        expect(calculateBmi(80, 180)).toEqual(25)
    })

    test("bmi calculation 2", () => {
        expect(calculateBmi(105, 169)).toEqual(37)
    })
})

describe("properly determining bmi zone", () => {
    test("determine zone 1", () => {
        expect(determineBmiZone(25)).toEqual(3)
    })

    test("determine zone", () => {
        expect(determineBmiZone(38)).toEqual(4)
    })
})

