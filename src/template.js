import React from 'react';
import FilterList from './filterList';
import {
  isUndefined,
  isTypeArray,
} from './lib/util';
import styles from './css/tableFilter.scss';
import {
  calculateFilterProps,
} from './lib/filter';

/**
 * Main render function of the TableFilter
 * @return {JSX}
 */
const render = function() {
  const children = this.props.children;
  const finalChildren = [];
  const {
    filteredData,
    sortType,
    sortKey,
  } = this.state;

  if (!isUndefined(children) && children.length > 0) {
    React.Children.map(this.props.children, (child, index) => {
      if (!isUndefined(child) && !isUndefined(child.props.filterkey, true)) {
        let childClass = child.props.className;
        let childChildren = child.props.children || [];
        const {
          filterkey,
          itemDisplayValueFunc,
          itemSortValueFunc,
        } = child.props;

        if (!isTypeArray(childChildren)) {
          childChildren = [childChildren];
        }

        if (isUndefined(childClass, true)) {
          childClass = 'apply-filter';
        } else {
          childClass = [childClass, ' ', 'apply-filter'].join('');
        }

        const filterProps = calculateFilterProps({
          filteredData,
          filterkey,
          itemDisplayValueFunc,
          itemSortValueFunc,
          sortKey,
          sortType,
        }); // filterList, selectAllFilters, sortType

        if (child.props.filterAdded != 'true') {
          childChildren.push(<FilterList
            {...child.props}
            {...filterProps}
            key={`list_${index}`}
            filterRows={this._filterRows}
            filterMultipleRows={this._filterMulipleRows}
            resetRows={this._resetRows}
            sortRows={this._sortRows}/>);
        } else {
          childChildren[childChildren.length - 1] = (<FilterList
            {...child.props}
            {...filterProps}
            key={`list_${index}`}
            filterRows={this._filterRows}
            filterMultipleRows={this._filterMulipleRows}
            resetRows={this._resetRows}
            sortRows={this._sortRows}/>);
        }

        const newProps = {
          className: childClass,
          filteradded: 'true',
        };

        const clonedChild = React.cloneElement(child, newProps, [...childChildren]);
        finalChildren.push(clonedChild);
      } else {
        if (!isUndefined(child)) {
          const clonedChild = React.cloneElement(child);
          finalChildren.push(clonedChild);
        }
      }
    });
  } else {
    console.error('TableFilter Error: Should contain one or more children');
  }

  let rowHtml;
  // The child columns will by default be placed inside <tr></tr> component. If 'rowComponent' is
  // passed in via props it will be used
  if (!isUndefined(this.props.rowComponent)) {
    const rowComponent = this.props.rowComponent;
    const newProps = {
      className: [this.props.rowClass ? this.props.rowClass + ' ': '', 'table-filter-row'].join(''),
    };
    const clonedRowComponent = React.cloneElement(rowComponent, newProps, [...finalChildren]);
    rowHtml = clonedRowComponent;
  } else {
    rowHtml = (
      <tr className={ [this.props.rowClass ? this.props.rowClass + ' ': '', 'table-filter-row'].join('')}>
        { finalChildren }
      </tr>
    );
  }

  return rowHtml;
};

export default render;
