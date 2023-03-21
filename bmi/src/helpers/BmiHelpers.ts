import { OBESE_ZONE, OPTIMAL_WEIGHT_LIMIT, OPTIMAL_WEIGHT_ZONE, OVERWEIGHT_LIMIT, OVERWEIGHT_ZONE, UNDERWEIGHT_LIMIT, UNDERWEIGHT_ZONE } from "../constants/constants";

export const calculateBmi = (weight: number | null, height: number | null) => {
    if (height !== null && weight !== null) { //prevents division by 0
      const heightInMeters = height / 100; //convert cm to m
      const bmi = weight / (heightInMeters * heightInMeters);
      const bmiRounded = Math.round(bmi);
      return bmiRounded;
    }
  };
  
export const determineBmiZone = (bmi: number) => {
    if (bmi < UNDERWEIGHT_LIMIT) {
      return UNDERWEIGHT_ZONE;
    }
    if (bmi < OPTIMAL_WEIGHT_LIMIT) {
      return OPTIMAL_WEIGHT_ZONE;
    }
    if (bmi < OVERWEIGHT_LIMIT) {
      return OVERWEIGHT_ZONE;
    }
    if (bmi >= OVERWEIGHT_LIMIT) {
      return OBESE_ZONE;
    }
  };

export const validateInput = (weight: number | null, height:number | null, setError: (value: string) => void) => {
  if (weight === null) {
    return setError("Please enter your weight")
  }
  if (height === null) {
    return setError("Please enter your height")
  }
  if (weight < 40 || weight > 150) {
    return setError("Your weight exceeds the limit to calculate BMI")
  }
  if (height < 140 || height > 200) {
    return setError("Your height exceeds the limit to calculate BMI")
  }
  setError("")
}  