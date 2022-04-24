import weatherIcons from "$utils/weather-icons.json";

export const getWeatherIcon = (code: number) => {
  if (typeof code === "number") {
    const prefix = "wi wi-";
    let icon = weatherIcons[code].icon;

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = "day-" + icon;
    }

    // Finally tack on the prefix.
    return prefix + icon;
  }
  return null;
};
