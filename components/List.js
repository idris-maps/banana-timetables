import { h, Component } from 'preact'

class TextItem extends Component {
  componentDidMount() { if (this.el && this.props.focused) { this.el.focus() } }
  componentDidUpdate() { if (this.el && this.props.focused) { this.el.focus() } }
  render() {
    return <div class="list-item" ref={ el => this.el = el } tabIndex="1">
      <p>{ this.props.label }</p>
    </div>
  }
}

class InputItem extends Component {
  componentDidMount() { if (this.el && this.props.focused) { this.el.focus() } }
  componentDidUpdate() { if (this.el && this.props.focused) { this.el.focus() } }
  render() {
    return <input class="list-item" ref={ el => this.el = el } onInput={ this.props.onChange } tabIndex="1"/>
  }
}

const Item = ({ item, focused }) => {
  const { type } = item
  switch (type) {
    case 'text': return <TextItem label={ item.label } focused={ focused }/>
    case 'input': return <InputItem onChange={ item.onChange } focused={ focused }/>
    default: return null
  }
}

const List = ({ items, current }) =>
  <div class="list">
    { items.map((item, i) => <Item item={item} focused={ i === current} />) }
  </div>

export default List