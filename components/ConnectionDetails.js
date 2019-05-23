import { h } from 'preact'

const Section = ({ section }) =>
  <div class="section">
    <p>
      <span class="section-description">{section.description}</span>
      <br/>
      <span class="section-time">{section.departureTime} - {section.arrivalTime}</span>
      <br/>
      <span class="section-stop">{section.departureStop} - {section.arrivalStop}</span>
    </p>
    <hr/>
  </div>

export default ({ details }) =>
  <div>
    { details.map(section => <Section section={section} />) }
  </div>
