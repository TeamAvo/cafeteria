// https://dev.to/hudsonmc/redux-cheatsheet-4i43

import { SET_CATEGORY, SET_DAY } from './types.js'

// today: 0
// thisWeek: 1
// selectedPeriod: 2
// vote: 3
// info: 4

const initialState = {
  category: 0,
  day: 1,
  today: 0
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
    default:
      return state
  }
}
