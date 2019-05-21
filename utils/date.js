export const addDays = (date, days) => {
  let result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export const dateToYYYYMMDD = date =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

export const toWeekDayName = date => {
  const weekDay = date.getDay()
  switch (weekDay) {
    case 0: return 'Sunday'
    case 1: return 'Monday'
    case 2: return 'Tuesday'
    case 3: return 'Wednesday'
    case 4: return 'Thursday'
    case 5: return 'Friday'
    case 6: return 'Saturday'
  }
}