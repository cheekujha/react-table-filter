import React from 'react';
import Debounce from './lib/debounce';
import constants from './lib/constants';


class SearchBar extends React.Component {

	constructor(props){

		super(props);

		this._initMethods();
	}

	_initMethods(){
		this._searchInputChanged = this._searchInputChanged.bind(this);
		this._callSearchChanged = Debounce(this._callSearchChanged.bind(this), 300);
	}

	_searchInputChanged(e){
		const newValue = e.target.value;

		this._callSearchChanged(newValue);
	}

	_callSearchChanged(val){
		this.props.searchChanged && this.props.searchChanged(val);
	}

	render(){
		return (
			<div className="search-parent filter-list-item">
				<input className="search-input" type="text" placeholder={constants.SEARCH_PLACEHOLDER} onChange={this._searchInputChanged}/>
			</div>
		);
	}
}

export default SearchBar;