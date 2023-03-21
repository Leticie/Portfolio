import { heightImperialToMetric, weightImperialToMetric } from "./ImperialConversionHelpers";

describe("properly converting imperial measurement (height)", () => {
    test("converts ft and in to m", () => {
        expect(heightImperialToMetric(5, 11)).toEqual(180.34)
    })

    test("returning null when no inches entered", () => {
        expect(heightImperialToMetric(5, null)).toEqual(null)
    })
})

describe("properly converting imperial measurement (weight)", () => {
    test("converts lbs to kg", () => {
        expect(weightImperialToMetric(168)).toEqual(76.2048)
    })

    test("returning null when no pounds entered", () => {
        expect(weightImperialToMetric(null)).toEqual(null)
    })
})