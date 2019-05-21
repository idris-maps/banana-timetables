import { h } from 'preact'

import Loader from '../components/Loader'
import Header from '../components/Header'

export default ({ title }) =>
  <div>
    <Header title={ title || 'Loading' } />
    <Loader />
  </div>