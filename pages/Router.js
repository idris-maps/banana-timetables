import { h } from 'preact'
import { connect } from 'preact-redux'
import {
  PAGE_TO,
} from './names'

import PickStop from './PickStop'

const Router = ({ page }) => {
  if (page === PAGE_TO) {
    return <PickStop title="TO" />
  }
  return <PickStop title="FROM" />
}

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(Router)