import { h } from 'preact'
import { connect } from 'preact-redux'

import ConnectionDetails from '../components/ConnectionDetails'
import Footer from '../components/Footer'
import Header from '../components/Header'

const getDetails = (connections, index) => {
  const connection = connections[index]
  return connection ? connection.details : []
}

const Connection = ({
  connections,
  connectionIndex,
}) => 
  <div>
    <Header title="DETAILS" />
    <ConnectionDetails details={ getDetails(connections, connectionIndex) } />
    <Footer center="Back" />
  </div>

const mapStateToProps = (({
  connections,
  connectionIndex,
}) => ({
  connections,
  connectionIndex,
}))

export default connect(mapStateToProps)(Connection)