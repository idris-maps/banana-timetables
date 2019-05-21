import { setList, setInput } from './actions'
import { getStops } from '../utils/db'

const stopToListItem = ({ id, name }) => ({
  type: 'text',
  label: name,
  id,
})

const input = { type: 'input', onChange: e => setInput(e.target.value) }

export default () =>
  getStops()
    .then(stops => setList([ input, ...stops.map(stopToListItem) ]))


