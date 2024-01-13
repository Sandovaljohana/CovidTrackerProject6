import React, { useState, useEffect } from 'react';
import useFetch from '../../services/UseFetch';
import TableAtom from './TableAtom';
import CSmartTable from 'tu-libreria-de-tabla'; // Asegúrate de importar tu librería de tabla

export const Table = (props) => {
  // Lógica para la primera tabla de países
  const urlCountries = 'https://disease.sh/v3/covid-19/countries';
  const { data: countriesData } = useFetch(urlCountries);

  const [loadingCountries, setLoadingCountries] = useState(true);

  useEffect(() => {
    if (countriesData) {
      setLoadingCountries(false);
    }
  }, [countriesData]);

  const columnsCountries = [
    {
      key: 'Flag',
      _style: { minWidth: '130px' },
    },
    {
      key: 'Country',
      _style: { minWidth: '130px' },
    },
    'email',
    {
      key: 'Cases',
      _style: { minWidth: '120px' },
    },
    {
      key: 'New Cases',
      _style: { minWidth: '130px' },
    },
    {
      key: 'Deaths',
      _style: { minWidth: '130px' },
    },
    {
      key: 'New Deaths',
      _style: { minWidth: '130px' },
    },
    {
      key: 'Recovered',
      _style: { minWidth: '130px' },
    },
    {
      key: 'Active',
      _style: { minWidth: '130px' },
    },
    {
      key: 'Critical',
      _style: { minWidth: '130px' },
    },
    {
      key: 'Tested',
      _style: { minWidth: '130px' },
    },
  ];

  // Lógica para la segunda tabla de usuarios
  const urlUsers = 'https://apitest.coreui.io/demos/users';
  const { data: usersData } = useFetch(urlUsers);

  const [loadingUsers, setLoadingUsers] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [columnFilter, setColumnFilter] = useState([]);
  const [columnSorter, setColumnSorter] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (usersData) {
      setLoadingUsers(false);
      setRecords(usersData.number_of_matching_records);
      setUsers(usersData.records);
    }
  }, [usersData]);

  const columnsUsers = [
    {
      key: 'first_name',
      _style: { minWidth: '130px' },
    },
    {
      key: 'last_name',
      _style: { minWidth: '130px' },
    },
    'email',
    {
      key: 'country',
      _style: { minWidth: '120px' },
    },
    {
      key: 'ip_address',
      label: 'IP',
    },
  ];

  return (
    <div>
      {/* Primera tabla */}
      <TableAtom
        columns={columnsCountries}
        items={countriesData ? countriesData.country : []}
        loading={loadingCountries}
      />

      {/* Segunda tabla */}
      <CSmartTable
        columns={columnsUsers}
        items={users}
        itemsPerPage={itemsPerPage}
        loading={loadingUsers}
        pagination
        onActivePageChange={(activePage) => setActivePage(activePage)}
        onColumnFilterChange={(filter) => {
          setActivePage(1);
          setColumnFilter(filter);
        }}
        onItemsPerPageChange={(itemsPerPage) => {
          setActivePage(1);
          setItemsPerPage(itemsPerPage);
        }}
        onSorterChange={(sorter) => setColumnSorter(sorter)}
      />
    </div>
  );
};
