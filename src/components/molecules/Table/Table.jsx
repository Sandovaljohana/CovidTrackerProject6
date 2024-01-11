// Table.jsx
import React, { useState } from "react";
import DataTable from "react-data-table-component-with-filter";
import { usePagination } from "@table-library/react-table-library/pagination";  
import "./table.css";

const Table = (props) => {
  const [filterText, setFilterText] = useState("");

  const customFilterFunction = (rows, filterText) => {
    return rows.filter((row) =>
      row.country.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  const pagination = usePagination(
    props.data,
    {
      state: {
        page: 0,
        size: props.paginationSizes[0],
      },
      onChange: onPaginationChange,
    },
    {
      isServer: true,
    }
  );

  function onPaginationChange(action, state) {
    const pageSize = state.size < props.paginationSizes[0] ? props.paginationSizes[0] : state.size; 
    props.doGet({
      offset: state.page * pageSize,
      limit: pageSize,
    });
  }

  const filteredData = customFilterFunction(props.data, filterText);
  const columns = props.columns;

  return (
    <div className="bg-white text-indigo-800 p-4 rounded shadow">
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border rounded"
      />

      <DataTable
        data={filteredData}
        columns={columns}
        pagination={pagination}
        theme="customTheme"
      />

      {props.data.pageInfo && (
        <div>
          Page Size:{" "}
          {props.paginationSizes.map((size) => (
            <button
              key={size}
              type="button"
              style={{
                fontWeight:
                  pagination.state.size === size ? "bold" : "normal",
              }}
              onClick={() => pagination.fns.onSetSize(size)}
            >
              {size}
            </button>
          ))}
          <button
            type="button"
            style={{
              fontWeight:
                pagination.state.size === props.data.pageInfo.total
                  ? "bold"
                  : "normal",
            }}
            onClick={() => pagination.fns.onSetSize(props.data.pageInfo.total)}
          >
            All
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
