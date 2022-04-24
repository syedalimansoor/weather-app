export const toSentenceCase = (sentence: string): string => {
  if (typeof sentence === "string") {
    return sentence[0].toUpperCase() + sentence.substring(1);
  }
  return null;
};
