import {
  SET_LIST_CURRENT,
} from './actions.keyDown'
import {
  SET_LIST,
  SET_INPUT,
  SET_PAGE,
  setInput,
} from './actions'
import {
  PAGE_FROM,
} from './pages'

const defaultState = {
  listCurrent: 0,
  list: [],
  input: null,
  page: PAGE_FROM,
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action
  console.log({ type, payload })
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
    default: return state
  }
}

export default reducer