const getReadableNumber = async (number: number) => {
  const stringifiedNumber: string = number.toString()
  , length = stringifiedNumber.length

  , round = async (number: number, decimalPlaces: number) => {
    return Number(Math.round(Number(number + 'e' + decimalPlaces)) + 'e' + -decimalPlaces)
  }

  if (length >= 4 && length < 7)
    return `${await round(number / 1000, 2)} K`

  if (length >= 7 && length < 10)
    return `${await round(number / 1000000, 2)} M`

  if (length >= 10 && length < 13)
    return `${await round(number / 1000000000, 2)} B`

  if (length >= 13)
    return `${await round(number / 1000000000, 2)} T`

  return stringifiedNumber
}

export default getReadableNumber
