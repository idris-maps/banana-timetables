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
const items = [
	{ type: 'text', label: 'One' },
	{ type: 'text', label: 'Two' },
  { type: 'text', label: 'Three' },
  { type: 'input', onChange: e => setInput(e.target.value) },
]

const defaultState = {
  listCurrent: 0,
  list: items,
  input: null,
  page: PAGE_FROM,
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action
  console.log({ type, payload })
  switch(type) {
    case SET_LIST_CURRENT: return { ...state, listCurrent: payload }
    case SET_LIST: return { ...state, list }
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