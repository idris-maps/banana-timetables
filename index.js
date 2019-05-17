import './style'
import { Component } from 'preact'
import { Provider, connect } from 'preact-redux'
import store from './store'
import { onKeyDown } from './store/actions.keyDown'

import List from './components/List'

const items = [
	{ type: 'text', label: 'One' },
	{ type: 'text', label: 'Two' },
	{ type: 'text', label: 'Three' },
]

const Xx = ({ list, listCurrent }) =>
	<List items={ list } current={ listCurrent } />

const Test = connect(s => s)(Xx)

export default class App extends Component {
	render() {
		return (<Provider store={ store } >
			<div>
				<Test />
			</div>
		</Provider>);
	}
}

window.addEventListener('keydown', onKeyDown)