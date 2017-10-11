import React from 'react';
import FilterList from './filterList';
import {
	isUndefined,
	isTypeArray
} from './lib/util';
import styles from './css/tableFilter.scss';

const render = function(){
	const children = this.props.children;
	const finalChildren = [];	

	if(!isUndefined(children) && children.length > 0){

		this.props.children.map((child, index) => {

			if(!isUndefined(child) && !isUndefined(child.props.filterkey, true)){
				
				let childClass = child.props.className;
				let childChildren = child.props.children || [];

				if(!isTypeArray(childChildren)){
					childChildren = [childChildren];
				}

				if(isUndefined(childClass, true)){
					childClass = "apply-filter"
				}else{
					childClass = [childClass, ' ', "apply-filter"].join('');
				}

				if(child.props.filterAdded != "true"){
					childChildren.push(<FilterList
									{...child.props} 
									initialData={this.state.initialData} 
									filteredData={this.state.filteredData} 
									filterRows={this._filterRows}
									resetRows={this._resetRows}
									sortRows={this._sortRows}
									sortKey={this.state.sortKey}/>);
				}else{
					childChildren[childChildren.length - 1] = (<FilterList 
									{...child.props}
									initialData={this.state.initialData} 
									filteredData={this.state.filteredData} 
									filterRows={this._filterRows}
									resetRows={this._resetRows}
									sortRows={this._sortRows}
									sortKey={this.state.sortKey}/>);
				}
				
				let newProps = {
					className: childClass,
					filteradded: "true"
				}

				const clonedChild = React.cloneElement(child, newProps, [...childChildren])
				finalChildren.push(clonedChild);
			}else{
				const clonedChild = React.cloneElement(child)
				finalChildren.push(clonedChild);
			}
		});
	}else{
		console.error('TableFilter Error: Should contain one or more children');
	}
	return (
			<tr className={ [this.props.rowClass ? this.props.rowClass + ' ': '', 'table-filter-row' ].join('')}>
				{ finalChildren }
			</tr>
		)
}

export default render;