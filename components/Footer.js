import { h } from 'preact'

export default ({ left, center, right }) =>
  <footer>
    <div class="footer-left">{ left || ''}</div>
    <div class="footer-center">{ center || ''}</div>
    <div class="footer-right">{ right || ''}</div>
  </footer>