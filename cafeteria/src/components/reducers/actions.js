import { SET_CATEGORY, SET_DAY } from './types.js'

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
