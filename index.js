import './style'
import { Component } from 'preact'
import { Provider, connect } from 'preact-redux'
import store from './store'
import { onKeyDown } from './store/actions.keyDown'

import PickStop from './pages/PickStop'

export default class App extends Component {
	render() {
		return (<Provider store={ store } >
			<div>
				<PickStop title="From" />
			</div>
		</Provider>);
	}
}

window.addEventListener('keydown', onKeyDown)