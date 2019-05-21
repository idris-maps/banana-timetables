import { h } from 'preact'
import { connect } from 'preact-redux'
import {
  PAGE_TO,
  PAGE_CHOOSE_FROM,
  PAGE_CHOOSE_TO,
  LOADING,
} from './names'

import PickStop from './PickStop'
import Loading from './Loading'

const Router = ({ page }) => {
  switch (page) {
    case PAGE_TO: return <PickStop title="TO" />
    case LOADING: return <Loading />
    case PAGE_CHOOSE_TO: return <PickStop title="TO" />
    case PAGE_CHOOSE_FROM: return <PickStop title="FROM" />
    default: return <PickStop title="FROM" />
  }
}

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(Router)