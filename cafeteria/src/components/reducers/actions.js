import axios from 'axios'
import {
  SET_CATEGORY,
  SET_DAY_OF_WEEK,
  SET_DAY_OF_MONTH,
  GET_WEEK_MEAL,
  GET_MONTHLY_MEAL
} from './types.js'

const API_URL =
  'https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/'

export const setCategory = (index) => {
  return (dispatch) => {
    dispatch({
      type: SET_CATEGORY,
      payload: index
    })
  }
}

export const setDayOfWeek = (day) => {
  return (dispatch) => {
    dispatch({
      type: SET_DAY_OF_WEEK,
      payload: day
    })
  }
}

export const setDayOfMonth = (day) => {
  return (dispatch) => {
    dispatch({
      type: SET_DAY_OF_MONTH,
      payload: day
    })
  }
}

export const getWeekMeal = (date) => {
  return async (dispatch) => {
    console.log('Calling API...')
    const data = await getWeekData(date)
    if (data != null) {
      console.log(`API Request finished, date:${date}`)
      dispatch({
        type: GET_WEEK_MEAL,
        isLoaded: true,
        payload: data
      })
    } else {
      alert('An error occurred while parsing data.')
    }
  }
}

export const getMonthlyMeal = (year, month) => {
  return async (dispatch) => {
    var ym = `${year}/${month}`
    console.log('Calling API...')
    console.log(new Date(`${ym}/1`).getFullYear)
    const week1 = getWeekData(new Date(`${ym}/1`))
    const week2 = getWeekData(new Date(`${ym}/8`))
    const week3 = getWeekData(new Date(`${ym}/15`))
    const week4 = getWeekData(new Date(`${ym}/22`))
    const week5 = getWeekData(new Date(`${ym}/29`))
    if (
      week1 != null &&
      week2 != null &&
      week3 != null &&
      week4 != null &&
      week5 != null
    ) {
      console.log(`API Request finished, Monthly: ${ym}`)
      dispatch({
        type: GET_MONTHLY_MEAL,
        payload: {
          loaded: true,
          mealDate: new Date(`${ym}/1`),
          data: {
            week1: week1,
            week2: week2,
            week3: week3,
            week4: week4,
            week5: week5
          }
        }
      })
    } else {
      alert('An error occurred while parsing data.')
    }
  }
}

async function getWeekData(newDate) {
  var date = new Date(newDate) // This code is necessary
  var d =
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  try {
    const breakfast = await axios.get(API_URL + `breakfast/${d}`)
    const lunch = await axios.get(API_URL + `lunch/${d}`)
    const dinner = await axios.get(API_URL + `dinner/${d}`)
    const data = {
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner
    }
    console.log(data)
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}
