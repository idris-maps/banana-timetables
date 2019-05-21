import { h } from 'preact'
import { connect } from 'preact-redux'
import {
  PAGE_TO,
} from './names'

import PickStop from './PickStop'

const Router = ({ page }) => {
  if (page === PAGE_TO) {
    return <PickStop title="to" />
  }
  return <PickStop title="From" />
}

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(Router)