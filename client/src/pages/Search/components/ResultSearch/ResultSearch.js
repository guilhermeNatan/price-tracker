import React, {PureComponent} from 'react';
import styles from './ResultSearchStyles';
import MaterialTable from 'material-table';


class ResultSearch extends PureComponent {

  render() {
    const {data, isLoading} = this.props;

    return (
      <div style={styles.container}>
        <MaterialTable
            title="Jogos"
            options={{
                header: false,
                search: false,
                showTitle: false
            }}
            columns={[
              { title: 'Nome', field: 'name' },
            ]}
            data={data}
            isLoading={isLoading}
        />
      </div>
    );
  }
}

export default ResultSearch;
