import axios from 'axios'
import {
  SET_CATEGORY,
  SET_DATE,
  SET_DAY_OF_WEEK,
  SET_DAY_OF_MONTH,
  SET_API_CALLING_STATUS,
  GET_WEEK_MEAL,
  SET_GOOGLE_INFO,
  SET_VOTE_INFO,
  GET_VOTE_INFO
} from './types.js'

const API_URL =
  'https://cors-anywhere.herokuapp.com/https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/'

const BACKEND_URL = 'https://cryptic-reaches-78660.herokuapp.com/'
//const BACKEND_URL = 'http://localhost:6969/'

export const setCategory = (index) => {
  return (dispatch) => {
    dispatch({
      type: SET_CATEGORY,
      payload: index
    })
  }
}

export const setDate = (date) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE,
      payload: date
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

export const setCallingStatus = (bool) => {
  return (dispatch) => {
    dispatch({
      type: SET_API_CALLING_STATUS,
      payload: bool
    })
  }
}

export const getWeekMeal = (newDate) => {
  return async (dispatch) => {
    console.log('Calling API...')
    setCallingStatus(true)
    var date = new Date(newDate)
    var d =
      date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()

    try {
      const breakfast = await axios.get(API_URL + `breakfast/${d}`)
      const lunch = await axios.get(API_URL + `lunch/${d}`)
      const dinner = await axios.get(API_URL + `dinner/${d}`)
      const data = {
        isLoaded: true,
        breakfast: breakfast,
        lunch: lunch,
        dinner: dinner
      }

      console.log(`API Request finished, date:${date}`)
      console.log(data)

      dispatch({
        type: GET_WEEK_MEAL,
        payload: data
      })
    } catch (e) {
      console.log(e)
      alert('An error occurred while parsing data.')
      return null
    }
    setCallingStatus(false)
  }
}

export const setVote = (bool) => {
  return (dispatch) => {
    dispatch({
      type: SET_VOTE_INFO,
      payload: bool
    })
  }
}

export const getVote = (data) => {
  return async (dispatch) => {
    console.log('Get Vote Info...')
    try {
      const rsp = await axios.get(BACKEND_URL + 'vote/', { params: data })
      console.log(rsp)
      dispatch({
        type: GET_VOTE_INFO,
        payload: {
          isLoaded: true,
          info: rsp
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const postVote = (data) => {
  return async () => {
    console.log('Post Vote Data to API Server...')
    console.log(data)
    const rsp = await axios.post(BACKEND_URL + 'vote/', data)
    console.log(rsp)
  }
}

export const postComment = (data) => {
  return async () => {
    console.log('Post Comment Data to API Server...')
    console.log(data)
    const rsp = await axios.post(BACKEND_URL + 'comment/', data)
    console.log(rsp)
  }
}

export const deleteComment = (data) => {
  return async () => {
    console.log('Request delete comment from the database...')
    console.log(data)
    const rsp = await axios.post(BACKEND_URL + 'delete_comment/', data)
    console.log(rsp)
  }
}

export const getGoogleID = (gData) => {
  return async (dispatch) => {
    if (gData != null) {
      if (gData.profileObj.email.endsWith('@avonoldfarms.com')) {
        dispatch({
          type: SET_GOOGLE_INFO,
          payload: {
            isAOF: true,
            data: gData
          }
        })
      } else {
        alert(
          "You are not an Avon student. To prevent duplicate vote, please login with your Avon Old Farms School's google account."
        )
      }
    } else {
      alert('Google Login Error')
    }
  }
}
