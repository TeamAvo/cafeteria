import axios from 'axios'
import moment from 'moment-timezone'
import * as func from '../Functions.js'
import {
  SET_CATEGORY,
  SET_DATE,
  SET_DAY_OF_WEEK,
  SET_DAY_OF_MONTH,
  SET_API_CALLING_STATUS,
  GET_WEEK_MEAL,
  SET_UPVOTE,
  GET_GOOGLE_INFO,
  GET_VOTE_INFO,
  GET_COMMENT_DATA,
  GOOGLE_LOGOUT
} from './types.js'

const API_URL =
  'https://cors-anywhere.herokuapp.com/https://avonoldfarms.flikisdining.com/menu/api/weeks/school/avon-old-farms/menu-type/'

//const BACKEND_URL = 'https://cryptic-reaches-78660.herokuapp.com/'
const BACKEND_URL = 'http://localhost:6969/'

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

export const setCommentVote = (bool) => {
  return (dispatch) => {
    dispatch({
      type: SET_UPVOTE,
      payload: bool
    })
  }
}

export const getWeekMeal = (newDate) => {
  return async (dispatch) => {
    console.log('Calling API...')
    setCallingStatus(true)
    var date = moment(newDate)
    var d = date.format('YYYY/MM/DD')

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

export const getVote = (date) => {
  return async (dispatch) => {
    console.log('Get Vote Info...')
    const d1 = moment(date).tz('America/New_York').startOf('day').format()
    const d2 = moment(date)
      .add(1, 'd')
      .tz('America/New_York')
      .endOf('day')
      .format()
    try {
      const data = {
        date1: d1,
        date2: d2
      }
      console.log(data)
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
  return async (dispatch) => {
    try {
      console.log('Post Vote Data to API Server...')
      console.log(data)
      const rsp = await axios.post(BACKEND_URL + 'vote/', data)
      console.log(rsp)
      dispatch(await getVote(func.getEST()))

      alert('Your vote has been successfully submitted!')
    } catch {
      alert(
        'You already voted on this poll. You can only vote once for each meal.'
      )
    }
  }
}

export const postComment = (data) => {
  return async (dispatch) => {
    if (data == null) return

    try {
      console.log('Post Comment Data to API Server...')
      console.log(data)
      const rsp = await axios.post(BACKEND_URL + 'comment/', data)
      console.log(rsp)
      dispatch(await getComment({ date: func.getEST() }))
      alert('Your comment has been successfully submitted!')
    } catch {
      alert(
        'You already submitted on this meal. You can only vote once for each meal.'
      )
    }
  }
}

export const deleteComment = (data) => {
  return async (dispatch) => {
    try {
      console.log('Request delete comment from the database...')
      console.log(data)
      const rsp = await axios.post(BACKEND_URL + 'delete_comment/', data)
      console.log(rsp)
      dispatch(await getComment({ date: func.getEST() }))
      alert('Your comment has been successfully removed!')
    } catch {
      alert('Incorrect password')
    }
  }
}

export const getComment = (date) => {
  return async (dispatch) => {
    console.log('Request comment data from the database...')
    const d = moment(date)
    try {
      const data = {
        date1: d.startOf('day'),
        date2: d.endOf('day')
      }
      const rsp = await axios.get(BACKEND_URL + 'comment/', data)
      console.log(rsp)
      dispatch({
        type: GET_COMMENT_DATA,
        payload: {
          isLoaded: true,
          data: rsp
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getGoogleID = (gData) => {
  return async (dispatch) => {
    if (gData != null) {
      if (gData.profileObj.email.endsWith('@avonoldfarms.com')) {
        dispatch({
          type: GET_GOOGLE_INFO,
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

export const googleLogout = () => {
  return (dispatch) => {
    dispatch({
      type: GOOGLE_LOGOUT,
      payload: {
        isAOF: false,
        data: null
      }
    })
  }
}
