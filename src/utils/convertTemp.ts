export const convertTemp = (temp: number, toUnit: "C" | "F") => {
  switch (toUnit) {
    case "C":
      return temp - 273.15;
    case "F":
      return (temp - 273.15) * (9 / 5) + 32;
    default:
      throw new Error("Invalid value stored in temp");
  }
};
