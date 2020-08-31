import {
  SET_CATEGORY,
  SET_DATE,
  SET_DAY_OF_WEEK,
  SET_DAY_OF_MONTH,
  SET_API_CALLING_STATUS,
  GET_WEEK_MEAL,
  SET_GOOGLE_INFO,
  SET_VOTE_INFO,
  GET_VOTE_INFO,
  GET_COMMENT_DATA
} from './types.js'

var today = new Date()

const initialState = {
  status: {
    category: 2,
    date: today,
    dayOfWeek: today.getDay(),
    callingAPI: false,
    voteInfo: {
      isLoaded: false,
      info: null
    },
    commentData: {
      isLoaded: false,
      data: null
    }
  },
  mealWeek: {
    isLoaded: false,
    breakfast: '',
    lunch: '',
    dinner: ''
  },
  googleData: {
    isAOF: false,
    data: null
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
    case SET_DATE:
      return {
        ...state,
        status: {
          ...state.status,
          date: action.payload
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
    case SET_API_CALLING_STATUS:
      return {
        ...state,
        status: {
          ...state.status,
          callingAPI: action.payload
        }
      }
    case GET_WEEK_MEAL:
      return {
        ...state,
        mealWeek: action.payload
      }
    case SET_GOOGLE_INFO:
      return {
        ...state,
        googleData: action.payload
      }
    case SET_VOTE_INFO:
      return {
        ...state,
        status: {
          ...state.status,
          voteInfo: {
            ...state.status.voteInfo,
            isLoaded: action.payload
          }
        }
      }
    case GET_VOTE_INFO:
      return {
        ...state,
        status: {
          ...state.status,
          voteInfo: action.payload
        }
      }
    case GET_COMMENT_DATA:
      return {
        ...state,
        status: {
          ...state.status,
          commentData: action.payload
        }
      }
    default:
      return state
  }
}
