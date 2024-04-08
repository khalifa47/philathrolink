export const formatNumber = (num: number, locale: string = "en-US") => {
  return new Intl.NumberFormat(locale).format(num);
};

export const formatNumberWithAbbr = (num: number) => {
  let absNum = Math.abs(num);
  const abbrev = ["", "K", "M", "B", "T"]; // Define the abbreviations for thousands, millions, billions, and so on.
  const step = 1000; // Step size for each abbreviation

  // Find the appropriate abbreviation
  let i = 0;
  while (absNum >= step && i < abbrev.length - 1) {
    absNum /= step;
    i++;
  }

  // Round to 1 decimal place if greater than 10
  const roundedNum = absNum >= 10 ? absNum.toFixed(0) : absNum.toFixed(1);

  // Return the formatted string
  return num >= 0 ? `${roundedNum}${abbrev[i]}` : `-${roundedNum}${abbrev[i]}`;
};
