import './style'
import { Component } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'

import { onKeyDown } from './store/actions.keyDown'
import onLoad from './store/actions.onLoad'

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

window.addEventListener('load', onLoad)
window.addEventListener('keydown', onKeyDown)