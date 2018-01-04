import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SampleData from './sampleData.json';
import TableFilter from '../src/index.js';
import styles from './example.scss';
// import TableFilterStyles from '../lib/styles.css';

class SimpleExample extends Component {
	constructor(props){
		super(props);
		this.state = {
			"episodes": SampleData._embedded.episodes
		}
		this._filterUpdated = this._filterUpdated.bind(this);
	}

	_filterUpdated(newData){
		this.setState({
			"episodes": newData
		});
	}

	render(){
		const episodes = this.state.episodes;
		const elementsHtml = episodes.map((item) => {
			return (
				<tr>
					<td className="cell">
						{ item.name }
					</td>
					<td className="cell">
						{ item.season }
					</td>
					<td className="cell">
						{ item.number }
					</td>
				</tr>
			);
		});
		return (
			<div>
				<div className="nav-bar">
					<div className="container">
						React Table Filters
					</div>
				</div>
				<div className="examples">
					<div className="basic">
						<h3 className="header">Basic Usage</h3>
						<table className="basic-table">
							<thead>
								<TableFilter 
									rows={episodes} 
									onFilterUpdate={this._filterUpdated}>
									<th filterkey="name" className="cell" showSearch={true}>
										Name
									</th>
									<th filterkey="season" className="cell">
										Season
									</th>
									<th filterkey="number" className="cell" alignleft>
										Number
									</th>
								</TableFilter>
							</thead>
							<tbody>
								{ elementsHtml }
							</tbody>
						</table>
					</div>
					
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<SimpleExample/>,
	document.getElementById('mainContainer')
);