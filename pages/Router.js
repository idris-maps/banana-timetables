import { h } from 'preact'
import { connect } from 'preact-redux'
import {
  PAGE_TO,
  PAGE_CHOOSE_FROM,
  PAGE_CHOOSE_TO,
  LOADING,
  PAGE_CHOOSE_DAY,
  PAGE_CONNECTIONS,
  PAGE_CONNECTION_DETAIL,
} from './names'

import PickStop from './PickStop'
import Loading from './Loading'
import Connection from './Connection'

const Router = ({ page }) => {
  switch (page) {
    case PAGE_TO: return <PickStop title="TO" />
    case LOADING: return <Loading />
    case PAGE_CHOOSE_TO: return <PickStop title="TO" />
    case PAGE_CHOOSE_FROM: return <PickStop title="FROM" />
    case PAGE_CHOOSE_DAY: return <PickStop title="DAY" />
    case PAGE_CONNECTIONS: return <PickStop title="CONNECTIONS" />
    case PAGE_CONNECTION_DETAIL: return <Connection />
    default: return <PickStop title="FROM" />
  }
}

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(Router)