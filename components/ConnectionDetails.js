import { h } from 'preact'

const Section = ({ section }) =>
  <div>
    <p>
      <span class="section-time">{section.departureTime}</span>
      <br/>
      <span class="section-stop">{section.departureStop}</span>
    </p>
    <p>
      <span class="section-time">{section.arrivalTime}</span>
      <br/>
      <span class="section-stop">{section.arrivalStop}</span>
    </p>
    <hr/>
  </div>

export default ({ details }) =>
  <div>
    { details.map(section => <Section section={section} />) }
  </div>
