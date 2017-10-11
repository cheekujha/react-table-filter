import React from 'react';
import createReactClass from 'create-react-class';

const FilterIcon = createReactClass({
	getInitialState(){
		return {
		};
	},

	componentWillMount(){

	},

	componentDidMount(){

	},

	_iconClicked(){
		this.props.iconClicked && this.props.iconClicked();
	},

	render(){
		const className = [this.props.selected ? "selected ": "", "table-filter-icon"].join('');
		return (<div onClick={ this._iconClicked } className={ className }></div>);
	}
});

// TODO - Write Proptypes Definition
// FilterListItem.propTypes = {
// }

export default FilterIcon