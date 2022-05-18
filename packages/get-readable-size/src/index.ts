const getReadableSize = async (size: number) => {
  const stringifiedSize: string = size.toString()
  , length = stringifiedSize.length
  
  , round = async (number: number, decimalPlaces: number) => {
    return Number(Math.round(Number(number + 'e' + decimalPlaces)) + 'e' + -decimalPlaces)
  }

  if (length >= 4 && length < 7)
    return `${await round(size / 1000, 2)} KB`

  if (length >= 7 && length < 10)
    return `${await round(size / 1000000, 2)} MB`

  if (length >= 10 && length < 13)
    return `${await round(size / 1000000000, 2)} GB`

  if (length >= 13 && length < 16)
    return `${await round(size / 1000000000, 2)} TB`

  if (length >= 16)
    return `${await round(size / 1000000000000, 2)} PB`

  return `${size} B`
}

export default getReadableSize
