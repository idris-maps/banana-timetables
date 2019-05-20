import { h } from 'preact'

export default () =>
  <footer>
    <div class="footer-left">{ this.props.left || ''}</div>
    <div class="footer-center">{ this.props.center || ''}</div>
    <div class="footer-right">{ this.props.right || ''}</div>
  </footer>