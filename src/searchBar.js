import React from 'react';
import Debounce from './lib/debounce';
import PropTypes from 'prop-types';

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
				<input className="search-input" type="text" placeholder="search" onChange={this._searchInputChanged}/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	searchChanged: PropTypes.func.isRequired
}

export default SearchBar;