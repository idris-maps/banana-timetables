import store from './index'
import {
  setList,
  setFromStop,
  setToStop,
  goToPage,
} from './actions'
import {
  PAGE_FROM,
  LOADING,
  PAGE_CHOOSE_FROM,
  PAGE_TO,
  PAGE_CHOOSE_TO,
} from '../pages/names'
import {
  searchStop,
} from '../utils/api'
import {
  addStop,
} from '../utils/db'

export const SET_LIST_CURRENT = 'SET_LIST_CURRENT'

const onDown = (list, current = 0) => {
  if (list && list.length !== 0) {
    if (current === list.length - 1) {
      store.dispatch({ type: SET_LIST_CURRENT, payload: 0 })
    } else {
      store.dispatch({ type: SET_LIST_CURRENT, payload: current + 1 })
    }
  }
}

const onUp = (list, current = 0) => {
  if (list && list.length !== 0) {
    if (current === 0) {
      store.dispatch({ type: SET_LIST_CURRENT, payload: list.length - 1 })
    } else {
      store.dispatch({ type: SET_LIST_CURRENT, payload: current - 1 })
    }
  }
}

const onEnter = (input, listItem, page) => {
  if (page === PAGE_FROM) {
    if (listItem && listItem.type === 'input') {
      goToPage(LOADING)
      searchStop(input)
        .then(stops => goToPage(
          PAGE_CHOOSE_FROM,
          stops.map(d => ({ ...d, type: 'text', label: d.name }))
        ))
    }
    if (listItem && listItem.type === 'text') {
      return setFromStop(listItem.id)
    }
    return null
  }
  if (page === PAGE_CHOOSE_FROM) {
    if (listItem && listItem.type === 'text') {
      return addStop(listItem.id, listItem.name)
        .then(() => setFromStop(listItem.id))
    }
    return null
  }
  if (page === PAGE_TO) {
    if (listItem && listItem.type === 'input') {
      goToPage(LOADING)
      searchStop(input)
        .then(stops => goToPage(
          PAGE_CHOOSE_TO,
          stops.map(d => ({ ...d, type: 'text', label: d.name }))
        ))
    }
    if (listItem && listItem.type === 'text') {
      return setToStop(listItem.id)
    }
    return null
  }
  if (page === PAGE_CHOOSE_TO) {
    if (listItem && listItem.type === 'text') {
      return addStop(listItem.id, listItem.name)
        .then(() => setToStop(listItem.id))
    }
    return null
  }
  return null
}

export const onKeyDown = ({ key }) => {
  const { list, listCurrent, input, page } = store.getState()
  switch (key) {
    case 'ArrowDown': return onDown(list, listCurrent)
    case 'ArrowUp': return onUp(list, listCurrent)
    case 'Enter': return onEnter(input, list[listCurrent], page)
    default: return null
  }
}