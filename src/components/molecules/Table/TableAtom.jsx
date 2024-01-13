import React from 'react';

const TableAtom = ({ columns, items, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items && items.map((item, index) => (
          <tr key={index}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAtom;
