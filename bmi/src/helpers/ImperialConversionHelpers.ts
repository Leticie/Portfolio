export const heightImperialToMetric = (feet:number|null, inches:number|null) => {
    if (feet !== null && inches !== null) {
        const feetToCentimeters = feet * 30.48
        const inchesToCentimeters = inches * 2.54
        const heightTotal = feetToCentimeters + inchesToCentimeters
        return heightTotal
    }
    return null
}

export const weightImperialToMetric = (weight:number|null) => {
    if (weight !== null) {
        const poundsToKilos = weight * 0.4536
        return poundsToKilos
    }
    return null
}