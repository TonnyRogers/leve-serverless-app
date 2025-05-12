export function isDateValid(dateString: string) {
  return !isNaN(Date.parse(dateString))
}