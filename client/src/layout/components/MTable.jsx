import React from 'react';
import MaterialTable from 'material-table';

const MTable = () => (
  <MaterialTable
    columns={[
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ]}
    data={[
      {
        name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63,
      },
      {
        name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34,
      },
    ]}
    title="Selection Change Event"
    actions={[
      {
        icon: 'done_all',
        tooltip: 'Do',
        onClick: (event, rows) => {
          alert(`You selected ${rows.length} rows`);
        },
      },
    ]}
    options={{
      selection: true,
    }}
    onSelectionChange={data => alert(`You selected ${data.length} rows`)}
  />
);

export default MTable;
