import moment from 'moment-timezone'
import GoogleImage from './tabs/module/GoogleImage'

export const getEST = () => {
  return moment().tz('America/New_York').format()
}

export const getMealType = () => {
  const hr = parseInt(moment().tz('America/New_York').hour())
  // breakfast = 0
  // lunch = 1
  // dinner = 2
  if (hr < 11) return 0
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

export const test = () => {
  GoogleImage.searchImage("cat")
    .then((res) => {
      console.log(res);
    })
}