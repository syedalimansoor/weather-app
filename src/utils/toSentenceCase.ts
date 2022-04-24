export const toSentenceCase = (sentence: string): string => {
  return sentence[0].toUpperCase + sentence.substring(1)
}