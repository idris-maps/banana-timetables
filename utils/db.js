import localforage from 'localforage'

export const getStops = () =>
  localforage.getItem('stops')
    .then(stops => stops ? stops : [])

export const addStop = (id, name) =>
  getStops()
    .then(stops => localforage.setItem('stops', [...stops, { id, name }]))
    .then(() => getStops())