import get from './get'
import { getTime } from './date'

const baseUrl = 'http://transport.opendata.ch/v1'

export const searchStop = stop =>
  get(`${baseUrl}/locations?query=${stop}`)
    .then(res => res.stations.map(({ id, name }) => ({ id, name })))

const parseSection = ({ departure, arrival }) => ({
  departureStop: departure.station.name,
  departureTime: getTime(departure.departure),
  arrivalStop: arrival.station.name,
  arrivalTime: getTime(arrival.arrival),
})

const parseConnection = ({ from, to, sections }) => ({
  departure: getTime(from.departure),
  arrival: getTime(to.arrival),
  changes: sections.length - 1,
  details: sections.map(parseSection)
})

export const searchConnections = (from, to, date, time) => {
  const url = time
    ? `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${date}&time=${time}`
    : `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${date}`
  return get(url)
    .then(res => res.connections.map(parseConnection))
}