import { h } from 'preact'
import { connect } from 'preact-redux'

import List from '../components/List'
import Footer from '../components/Footer'
import Header from '../components/Header'

const currentIsInput = (list, listCurrent) => {
  const current = list[listCurrent]
  return current && current.type === 'input'
}

const RenderFooter = ({ currentIsInput }) =>
  currentIsInput
    ? <Footer center="Search" />
    : <Footer center="Select" />

const PickStop = ({
  list,
  listCurrent,
  title,
}) =>
  <div>
    <Header title={ title } />
    <List items={ list } current={ listCurrent } />
    <RenderFooter currentIsInput={ currentIsInput(list, listCurrent) } />
  </div>

const mapStateToProps = (({
  list,
  listCurrent,
}) => ({
  list,
  listCurrent,
}))

export default connect(mapStateToProps)(PickStop)