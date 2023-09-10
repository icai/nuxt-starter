export const formatNumber = (value, isNumber, isDigit) => {
  if (isNumber) {
    value = value.replace(/[^\d]/g, '')
  } else if (isDigit) {
    value = value.replace(/[^\d.]/g, '')
  }
  return value
}
