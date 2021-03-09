import React, {PureComponent} from 'react';
import styles from './ResultSearchStyles';
import MaterialTable from 'material-table';
import {CardResult} from "./CardResult";


class ResultSearch extends PureComponent {
    anuncios =  [
        {
            image: 'https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            publishDate: '06-12-1991',
            address: 'Capelinha'
        },
        {
            image: 'https://img.olx.com.br/thumbs256x256/92/922115269743729.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            publishDate: '06-12-1991',
            address: 'Belo Horizonte'
        },
        {
            image: 'https://img.olx.com.br/thumbs256x256/92/922115269743729.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            publishDate: '06-12-1991',
            description: ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            address: 'Belo Horizonte'
        },
        {
            image: 'https://img.olx.com.br/thumbs256x256/83/830196138322724.jpg',
            title: 'Violão',
            price:  'R$ 600,00',
            publishDate: '06-12-1991',
            description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            address: 'Capelinha'
        },
    ]


  render() {
    const {data, isLoading, onRowClick} = this.props;

    return (
      <div style={styles.container}>
        <MaterialTable
            options={{
                header: false,
                search: false,
                showTitle: false,
                emptyRowsWhenPaging: false
            }}
            columns={[
              { title: 'Nome', field: 'name' },
            ]}
            components={{
                Row: ({data}) => {
                    return (
                        <CardResult anuncio={data} />
                    )
                }
            }}
            data={this.anuncios}
            isLoading={isLoading}
            onRowClick={onRowClick}
        />
      </div>
    );
  }
}

export default ResultSearch;
