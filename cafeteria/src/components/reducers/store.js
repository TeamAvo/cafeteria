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
  GET_COMMENT_DATA
} from './types.js'

var today = new Date('2020/03/01')

const initialState = {
  status: {
    category: 0,
    date: today,
    dayOfWeek: today.getDay(),
    callingAPI: false,
    commentUpVote: null,
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
    id:
      '340618285609-r6colaj22eh4tn822j4723t8bolhsobb.apps.googleusercontent.com',
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
    case SET_UPVOTE:
      return {
        ...state,
        status: {
          ...state.status,
          commentUpVote: action.payload
        }
      }
    case GET_WEEK_MEAL:
      return {
        ...state,
        mealWeek: action.payload
      }
    case GET_GOOGLE_INFO:
      return {
        ...state,
        googleData: action.payload
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
