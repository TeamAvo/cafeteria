// https://dev.to/hudsonmc/redux-cheatsheet-4i43

import {
  SET_CATEGORY,
  SET_DAY_OF_WEEK,
  SET_DAY_OF_MONTH,
  GET_WEEK_MEAL,
  GET_MONTHLY_MEAL
} from './types.js'

var today = new Date()

const initialState = {
  status: {
    today: today.getDay(),
    date: today,
    category: 0,
    dayOfWeek: today.getDay(),
    dayOfMonth: 0
  },
  mealWeek: {
    loaded: false,
    mealDate: '',
    data: {
      breakfast: '',
      lunch: '',
      dinner: ''
    }
  },
  mealMonthly: {
    loaded: false,
    mealMonth: '',
    data: {
      week1: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      week2: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      week3: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      week4: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      week5: {
        breakfast: '',
        lunch: '',
        dinner: ''
      }
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        status: {
          ...state.status,
          category: action.payload
        }
      }
    case SET_DAY_OF_WEEK:
      return {
        ...state,
        status: {
          ...state.status,
          dayOfWeek: action.payload
        }
      }
    case SET_DAY_OF_MONTH:
      return {
        ...state,
        status: {
          ...state.status,
          dayOfMonth: action.payload
        }
      }
    case GET_WEEK_MEAL:
      return {
        ...state,
        mealWeek: action.payload
      }
    case GET_MONTHLY_MEAL:
      return {
        ...state,
        mealMonthly: action.payload
      }
    default:
      return state
  }
}
