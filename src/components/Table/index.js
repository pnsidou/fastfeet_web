import React from 'react';
import { useTable, useFlexLayout } from 'react-table';
import PerfectScrollbar from 'react-perfect-scrollbar';

import PropTypes from 'prop-types';

function Table({ columns, data }) {
  const { rows, headers, headerGroups, prepareRow } = useTable(
    { columns, data },
    useFlexLayout
  );
  return (
    <div className="table">
      <div className="thead">
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headers.map(header => {
              return (
                <h1 {...header.getHeaderProps()} className="th">
                  {header.render('Header')}
                </h1>
              );
            })}
          </div>
        ))}
      </div>
      <PerfectScrollbar className="tbody">
        {rows.map(row => {
          prepareRow(row);
          return (
            <div {...row.getRowProps()} className="tr">
              {row.cells.map(cell => (
                <div {...cell.getCellProps()}>{cell.render('Cell')}</div>
              ))}
            </div>
          );
        })}
      </PerfectScrollbar>
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      minWidth: PropTypes.number,
      width: PropTypes.number,
      maxWidth: PropTypes.number,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Table;
