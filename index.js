import './style';
import { Component } from 'preact';

import List from './components/List'

const items = [
	{ type: 'text', label: 'One' },
	{ type: 'text', label: 'Two' },
	{ type: 'text', label: 'Three' },
]

export default class App extends Component {
	render() {
		return (
			<div>
				<List items={items} current={1} />
			</div>
		);
	}
}