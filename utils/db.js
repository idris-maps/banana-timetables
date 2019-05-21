import localforage from 'localforage'

const defaultStops = [
  { id: '8500010', name: 'Basel SBB' },
  { id: '8501008', name: 'Genève' }
]

const setStops = (stops = []) =>
  localforage.setItem('stops', stops)

const setDefault = () =>
  setStops(defaultStops)
    .then(() => defaultStops)

export const getStops = () =>
  localforage.getItem('stops')
    .then(stops => {
      if (!stops) { return setDefault() }
      return stops
    })

export const addStop = (id, name) =>
  getStops()
    .then(stops => setStops([...stops, { id, name }]))
    .then(() => getStops())

export const deleteStop = id =>
  getStops()
    .then(stops => setStops(stops.filter(d => d.id !== id)))