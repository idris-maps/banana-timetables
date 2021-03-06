import store from './index'
import {
  deleteCachedStop,
  findConnections,
  findStop,
  goBackToConnections,
  setConnectionIndex,
  setDay,
  setFromStop,
  setTime,
  setToStop,
  reset,
} from './actions'
import {
  PAGE_CHOOSE_DAY,
  PAGE_CHOOSE_FROM,
  PAGE_CHOOSE_TIME,
  PAGE_CHOOSE_TO,
  PAGE_CONNECTIONS,
  PAGE_CONNECTION_DETAIL,
  PAGE_FROM,
  PAGE_TO,
} from '../pages/names'
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
      findStop(PAGE_CHOOSE_FROM)
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
      findStop(PAGE_CHOOSE_TO)
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
  if (page === PAGE_CHOOSE_DAY) {
    if (listItem && listItem.type === 'text') {
      return setDay(listItem.day)
    }
  }
  if (page === PAGE_CHOOSE_TIME) {
    if (listItem && listItem.type === 'text') {
      return findConnections()
    }
    if (listItem && listItem.type === 'input') {
      if (/^([0-9]|0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/.test(input)) {
        setTime(input)
        return findConnections()
      }
    }
    return null
  }
  if (page === PAGE_CONNECTIONS) {
    if (listItem && listItem.type === 'text') {
      return setConnectionIndex()
    }
    return null
  }
  if (page === PAGE_CONNECTION_DETAIL) {
    return goBackToConnections()
  }
  return null
}

const onSoftLeft = (listItem, page) => {
  if (page === PAGE_FROM || page === PAGE_TO) {
    if (listItem && listItem.type === 'text') {
      return deleteCachedStop(page, listItem)
    }
  }
  if (page === PAGE_CONNECTIONS) {
    return reset()
  }
}

export const onKeyDown = ({ key }) => {
  const { list, listCurrent, input, page } = store.getState()
  switch (key) {
    case 'ArrowDown': return onDown(list, listCurrent)
    case 'ArrowUp': return onUp(list, listCurrent)
    case 'Enter': return onEnter(input, list[listCurrent], page)
    case 'SoftLeft': return onSoftLeft(list[listCurrent], page)
    case '§': return onSoftLeft(list[listCurrent], page) // for dev
    default: return null
  }
}