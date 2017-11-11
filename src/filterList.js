import React from 'react';
import FilterListItem from './filterListItem';
import SelectAllItem from './selectAllItem';
import {
	isUndefined, 
	isTypeString,
	getValForKey
} from './lib/util';
import EventStack from './lib/eventStack';
import FilterIcon from './filterIcon';
import {
	sortAction
} from './lib/sort';
import {
	BLANK_LABEL,
	ASC_VALUE,
	DSC_VALUE
} from './lib/constants';
import SortIcon from './sortIcon';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const FilterList = createReactClass({
	getInitialState(){
		this.unselectedFilters = 0;
		const { filterList, selectState } = this._calculateFilterState(this.props);
		// this._sortClicked = this._sortClicked.bind(this);
		return {
			filterList: filterList,
			showFilter: false,
			selectAllFilters: selectState,
			sortType: undefined
		};
	},

	componentWillMount(){

	},

	componentDidMount(){
		
	},

	componentWillUnmount(){
		EventStack.unsub('click', this._handleOutsideClick, document);
	},

	_handleOutsideClick(e){
		if(!this.filterIconNode.contains(e.target)){
			this._hideFilter();
		}
	},

	componentWillReceiveProps(nextProps){
		const { filterList, selectState } = this._calculateFilterState(nextProps);

		const sortTypeState = (!isUndefined(nextProps.sortKey) && (nextProps.sortKey === this.props.filterkey) ) ? nextProps.sortType : undefined;

		this.setState({
			filterList: filterList,
			selectAllFilters: selectState,
			sortType: sortTypeState
		});
	},

	_calculateFilterState(props){
		const initialData = props.initialData ? [...props.initialData] : [];
		let filteredData = props.filteredData ? [...props.filteredData] : [];
		const filterkey = props.filterkey;
		let usedKeys = [];
		let filteredUsedKeys = [];
		let filterList = [];

		let selectState = true;

		filteredData.map((item) => {
			let itemKey = getValForKey(item, filterkey)
			let orinigalValue = itemKey;

			if(!isUndefined(this.props.itemDisplayValueFunc)){
				itemKey = this.props.itemDisplayValueFunc(itemKey);
			}

			const appliedFilters = item.appliedFilters || {};
			let displayName = itemKey;

			if(isUndefined(itemKey)){
				displayName = BLANK_LABEL;
				itemKey = "";
				orinigalValue = displayName;
			}else if((isTypeString(itemKey))){
				itemKey = itemKey.trim();
				if(itemKey.length === 0){
					displayName = BLANK_LABEL;
					orinigalValue = displayName;
				}
			}
			
			if(usedKeys.indexOf(itemKey) === -1){
				if(!isUndefined(appliedFilters) && Object.keys(appliedFilters).length > 0){
					if(Object.keys(appliedFilters).length === 1 && Object.keys(appliedFilters)[0] === filterkey){
						selectState = false;
						filterList.push({
							"key": itemKey,
							"display": displayName,
							"selected": false,
							"visible": true,
							"orinigalValue": orinigalValue
						});
					}else{
						filterList.push({
							"key": itemKey,
							"display": displayName,
							"selected": true,
							"visible": false,
							"orinigalValue": orinigalValue
						});
					}
				}else{
					filterList.push({
						"key": itemKey,
						"display": displayName,
						"selected": true,
						"visible": true,
						"orinigalValue": orinigalValue
					});
				}

				usedKeys.push(itemKey);
			}else{
				const filterIndex = usedKeys.indexOf(itemKey);
				let filterItem = filterList[filterIndex];
				if(Object.keys(appliedFilters).length === 0){
					if(!filterItem.selected || !filterItem.visible){
						filterItem = Object.assign({}, filterItem, {"selected": true, "visible": true});
						filterList[filterIndex] = filterItem;
					}
				}

				if(Object.keys(appliedFilters).length === 1 && Object.keys(appliedFilters)[0] === filterkey){
					selectState = false;
					filterItem = Object.assign({}, filterItem, {"selected": false, "visible": true});
					filterList[filterIndex] = filterItem;
				}
			}
		});

		filterList = sortAction(filterList, ASC_VALUE, {
			valueFunc: this.props.itemSortValueFunc,
			key: 'orinigalValue'
		});

		return {
			filterList,
			selectState
		};
	},

	_filterIconClicked(e){
		const filterState = this.state.showFilter;
		const newState = !filterState;

		if(newState){
			this._displayFilter();
		}else{
			this._hideFilter();
		}
		
	},

	_displayFilter(){
		EventStack.sub('click', this._handleOutsideClick, document);
		this.setState({
			showFilter: true
		});
	},

	_hideFilter(){
		EventStack.unsub('click', this._handleOutsideClick, document);
		this.setState({
			showFilter: false
		});
	},

	_filterUpdated(index){
		let allFilters = this.state.filterList;
		if(!isUndefined(allFilters[index])){
			const newFilterState = !allFilters[index]['selected'];
			this._filterData(allFilters[index]['key'], !newFilterState);
		}
	},

	_selectAllClicked(){
		const selectAllState = this.state.selectAllFilters;
		const newSelectAllState = !selectAllState;

		if(newSelectAllState){
			const visibleFiltersValues = this.state.filterList.filter((filterItem) => {
				return (filterItem.visible && !filterItem.selected);
			}).map((filterItem) => {
				return filterItem.key;
			});

			this._resetData(visibleFiltersValues, newSelectAllState);
		}else{

			const visibleFiltersValues = this.state.filterList.filter((filterItem) => {
				return (filterItem.visible && filterItem.selected);
			}).map((filterItem) => {
				return filterItem.key;
			});

			this._resetData(visibleFiltersValues, newSelectAllState);
		}		
	}, 
	
	_filterData(filterValue=undefined, addFilter=true){
		this.props.filterRows(filterValue, this.props.filterkey, addFilter, this.props.itemDisplayValueFunc);
	},

	_resetData(filterValues=[], selectAll=true){
		this.props.resetRows(filterValues, this.props.filterkey, selectAll, this.props.itemDisplayValueFunc);
	},

	_sortClicked(){
		const currentSortType = this.state.sortType;
		let newSortType;
		if(isUndefined(currentSortType) || currentSortType === DSC_VALUE){
			newSortType = ASC_VALUE;
		}else{
			newSortType = DSC_VALUE;
		}

		this.props.sortRows(newSortType, {
			itemSortValueFunc: this.props.itemSortValueFunc,
			caseSensitive: this.props.caseSensitive,
			key: this.props.filterkey
		});
		// this.setState({
		// 	sortType: newSortType
		// }, () => {
		// 	debugger
		// 	this.props.sortRows(newSortType, {
		// 		itemSortValueFunc: this.props.itemSortValueFunc,
		// 		caseSensitive: this.props.caseSensitive,
		// 		key: this.props.filterkey
		// 	});
		// });
	},

	render(){
		const filterState = this.state.showFilter,
			filterkey = this.props.filterkey;
		let filterListItemHtml = [],
			filterListHtml;
		

		if(this.state.filterList.length > 1){
			if(filterState){
				this.state.filterList.map((filterItem, index) => {
					if(filterItem.visible){
						filterListItemHtml.push(<FilterListItem filterClicked={this._filterUpdated} index={index} label={filterItem.display} selected={filterItem.selected}/>);
					}
				});

				const filterListClass = [!isUndefined(this.props.alignleft) ? "align-left " : "",  "filter-list"].join('');

				filterListHtml = (<div className={ filterListClass }>
									<SortIcon sort={ this._sortClicked } sortType={ this.state.sortType }/>
									<SelectAllItem filterClicked={this._selectAllClicked} selected={this.state.selectAllFilters}/>
									{ filterListItemHtml }
								</div>);
			}

			const filterActive = !this.state.selectAllFilters || filterState;
			return (<div className="table-filter-parent" ref={ (node) => {this.filterIconNode = node;} }>
						<FilterIcon iconClicked={ this._filterIconClicked } selected={filterActive}/>
						{ filterListHtml }
					</div>);
		}else{
			return (<div style={ {display: "none"} }></div>);
		}
	}
});

FilterList.propTypes = {
	initialData: PropTypes.array.isRequired,
	filteredData: PropTypes.array.isRequired,
	filterRows: PropTypes.func.isRequired,
	resetRows: PropTypes.func.isRequired,
	sortRows: PropTypes.func.isRequired,
	sortKey: PropTypes.string,
	sortType: PropTypes.string,
}

export default FilterList