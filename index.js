import './style'
import { Component } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'

import { reset } from './store/actions'
import { onKeyDown } from './store/actions.keyDown'
import onLoad from './store/actions.onLoad'

import Router from './pages/Router'

export default class App extends Component {
	render() {
		return (<Provider store={ store } >
			<div>
				<Router />
			</div>
		</Provider>);
	}
}

window.addEventListener('load', reset)
window.addEventListener('keydown', onKeyDown)