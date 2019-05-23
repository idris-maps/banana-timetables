import { h } from 'preact'
import { connect } from 'preact-redux'

import List from '../components/List'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Spacer from '../components/Spacer'

const Pick = ({
  list,
  listCurrent,
  title,
  linkNewSearch,
}) =>
  <div>
    <Header title={ title } />
    <List items={ list } current={ listCurrent } />
    <Spacer height="3em" />
    <Footer left={ linkNewSearch ? 'New' : '' } center="Select" />
  </div>

const mapStateToProps = (({
  list,
  listCurrent,
}) => ({
  list,
  listCurrent,
}))

export default connect(mapStateToProps)(Pick)