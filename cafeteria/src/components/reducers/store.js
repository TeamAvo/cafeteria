// https://dev.to/hudsonmc/redux-cheatsheet-4i43

import {
  SET_CATEGORY,
  SET_DAY,
  SET_API_CALLING_STATUS,
  GET_DAILY_MEAL,
  GET_SELECTED_PERIOD_MEAL
} from './types.js'

var today = new Date()
var date =
  today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate()

const initialState = {
  category: 0,
  day: today.getDay(),
  today: today.getDay(),
  date: date,
  callingAPI: false,
  mealDaily: {
    loaded: false,
    mealDate: '',
    mealType: 'null',
    data: null
  },
  mealSelected: {
    mealDate: '',
    mealType: null,
    data: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case SET_DAY:
      return {
        ...state,
        day: action.payload
      }
    case SET_API_CALLING_STATUS:
      return {
        ...state,
        callingAPI: action.payload
      }
    case GET_DAILY_MEAL:
      return {
        ...state,
        mealDaily: action.payload
      }
    case GET_SELECTED_PERIOD_MEAL:
      return {
        ...state,
        mealSelected: action.payload
      }
    default:
      return state
  }
}
