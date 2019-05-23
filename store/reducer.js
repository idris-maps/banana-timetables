import {
  SET_LIST_CURRENT,
} from './actions.keyDown'
import {
  RESET,
  SET_CONNECTIONS,
  SET_CONNECTION_INDEX,
  SET_DAY,
  SET_FROM,
  SET_INPUT,
  SET_LIST,
  SET_PAGE,
  SET_TIME,
  SET_TO,
} from './actions'
import {
  PAGE_FROM,
} from '../pages/names'

const defaultState = {
  listCurrent: 0,
  list: [],
  input: null,
  page: PAGE_FROM,
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action
  switch(type) {
    case SET_LIST_CURRENT: return { ...state, listCurrent: payload }
    case SET_LIST: return { ...state, list: payload }
    case SET_INPUT: return { ...state, input: payload }
    case SET_PAGE: return {
      ...state,
      page: payload.page,
      list: payload.list,
      listCurrent: 0,
      input: null,
    }
    case SET_FROM: return { ...state, from: payload }
    case SET_TO: return { ...state, to: payload }
    case SET_DAY: return { ...state, day: payload }
    case SET_TIME: return { ...state, time: payload }
    case SET_CONNECTIONS: return { ...state, connections: payload }
    case SET_CONNECTION_INDEX: return { ...state, connectionIndex: state.listCurrent || 0 }
    case RESET: return defaultState
    default: return state
  }
}

export default reducer