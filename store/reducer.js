import {
  SET_LIST_CURRENT,
} from './actions.keyDown'
import {
  SET_LIST,
} from './actions'

const items = [
	{ type: 'text', label: 'One' },
	{ type: 'text', label: 'Two' },
	{ type: 'text', label: 'Three' },
]

const defaultState = {
  listCurrent: 0,
  list: items,
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action
  switch(type) {
    case SET_LIST_CURRENT: return { ...state, listCurrent: payload }
    case SET_LIST: return { ...state, list }
    default: return state
  }
}

export default reducer