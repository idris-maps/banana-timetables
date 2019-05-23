import store from './index'
import {
  LOADING,
  PAGE_TO,
  PAGE_CHOOSE_DAY,
  PAGE_CHOOSE_TIME,
  PAGE_CONNECTIONS,
  PAGE_CONNECTION_DETAIL,
} from '../pages/names'
import { searchStop, searchConnections } from '../utils/api'
import { getStops, deleteStop } from '../utils/db'
import { getDaysList } from '../utils/date'

const stopToListItem = ({ id, name }) => ({
  type: 'text',
  label: name,
  id,
})

const connectionToListItem = d => ({
  ...d,
  type: 'text',
  label: `${d.departure} - ${d.arrival} ${d.change > 0 ? 'changes: ' + d.change : ''}`,
})

const input = { type: 'input', onChange: e => setInput(e.target.value) }

export const SET_LIST = 'SET_LIST'
export const setList = items =>
  store.dispatch({ type: SET_LIST, payload: items })

export const SET_INPUT = 'SET_INPUT'
export const setInput = value =>
  store.dispatch({ type: SET_INPUT, payload: value })

export const SET_PAGE = 'SET_PAGE'
export const goToPage = (page, list = []) =>
  store.dispatch({ type: SET_PAGE, payload: { page, list } })

export const SET_FROM = 'SET_FROM'
export const setFromStop = stopId => {
  store.dispatch({ type: SET_FROM, payload: stopId })
  getStops()
    .then(stops => stops.map(stopToListItem))
    .then(stops => goToPage(PAGE_TO, [input, ...stops.filter(d => d.id !== stopId)]))
}

export const SET_TO = 'SET_TO'
export const setToStop = stopId => {
  store.dispatch({ type: SET_TO, payload: stopId })
  goToPage(PAGE_CHOOSE_DAY, getDaysList())
}

export const SET_DAY = 'SET_DAY'
export const setDay = day => {
  store.dispatch({ type: SET_DAY, payload: day })
  goToPage(PAGE_CHOOSE_TIME, [{ type: 'text', label: 'Now' }, input])
}

export const SET_TIME = 'SET_TIME'
export const setTime = time => {
  const [h1, h2, m1, m2] = Array.from(time)
  store.dispatch({ type: SET_TIME, payload: `${h1}${h2}:${m1}${m2}` })
}

export const SET_CONNECTIONS = 'SET_CONNECTIONS'
export const setConnections = connections =>
  store.dispatch({ type: SET_CONNECTIONS, payload: connections })

export const SET_CONNECTION_INDEX = 'SET_CONNECTION_INDEX'
export const setConnectionIndex = () => {
  store.dispatch({ type: SET_CONNECTION_INDEX })
  goToPage(PAGE_CONNECTION_DETAIL)
}

export const findStop = nextPage => {
  const search = store.getState().input
  goToPage(LOADING)
  searchStop(search)
    .then(stops => goToPage(
      nextPage,
      stops.map(d => ({ ...d, type: 'text', label: d.name }))
    ))
}

export const findConnections = () => {
  const { from, to, day, time } = store.getState()
  goToPage(LOADING)
  searchConnections(from, to, day, time)
    .then(connections => {
      setConnections(connections)
      goToPage(PAGE_CONNECTIONS, connections.map(connectionToListItem))
    })
}

export const goBackToConnections = () =>  {
  const { connections } = store.getState()
  goToPage(PAGE_CONNECTIONS, connections.map(connectionToListItem))
}

export const deleteCachedStop = (page, { id }) => {
  goToPage(LOADING)
  deleteStop(id)
    .then(stops => goToPage(page, [input, ...stops.map(stopToListItem)]))
    .catch(err => {
      console.log(err)
      return getStops()
      .then(stops => stops.map(stopToListItem))
      .then(stops => goToPage(page, [input, ...stops.filter(d => d.id !== stopId)]))
    })
}