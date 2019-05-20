import get from './get'

const baseUrl = 'http://transport.opendata.ch/v1'

export const searchStop = stop =>
  get(`${baseUrl}/locations?query=${stop}`)
    .then(res => res.stations.map(({ id, name }) => ({ id, name })))