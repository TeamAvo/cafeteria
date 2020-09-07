import moment from 'moment-timezone'

export const getEST = () => {
  const date = moment()
  return date.tz('America/New_York').format()
}

export const getMealType = () => {
  const date = moment()
  const hr = parseInt(date.tz('America/New_York').format('hh'))
  // breakfast = 0
  // lunch = 1
  // dinner = 2
  if (hr < 5) return 2
  else if (hr < 11) return 0
  else if (hr < 17) return 1
  else return 2
}

export const getMealName = (mt) => {
  //const mt = getMealType()
  switch (mt) {
    case 0:
      return 'Breakfast'
    case 1:
      return 'Lunch'
    case 2:
      return 'Dinner'
  }
}
