import axios from 'axios'
import {
  SET_CATEGORY,
  SET_DAY,
  SET_API_CALLING_STATUS,
  GET_DAILY_MEAL,
  GET_WEEKLY_MEAL,
  GET_SELECTED_PERIOD_MEAL
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

export const setDay = (index) => {
  return (dispatch) => {
    dispatch({
      type: SET_DAY,
      payload: index
    })
  }
}

export const setAPICallingStatus = (status) => {
  return (dispatch) => {
    dispatch({
      type: SET_API_CALLING_STATUS,
      payload: status
    })
  }
}

export const getDailyMeal = (date, type) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(API_URL + `${type}/${date}`)
      console.log(data)
      dispatch({
        type: GET_DAILY_MEAL,
        payload: {
          loaded: true,
          mealDate: date,
          mealType: type,
          data: data
        }
      })
    } catch (e) {
      alert('An error occurred while parsing data.\nError Info: ' + e)
    }
  }
}

export const getWeeklyMeal = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_WEEKLY_MEAL,
      payload: data
    })
  }
}

export const getSelectedPeriodMeal = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_SELECTED_PERIOD_MEAL,
      payload: data
    })
  }
}
