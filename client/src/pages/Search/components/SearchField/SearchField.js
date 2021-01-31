import React, {PureComponent} from 'react';
import {styles, costumStyles} from './SearchFieldStyles';
import SearchBar from "material-ui-search-bar";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";


class SearchField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  render() {
    const {onRequestSearch, classes, onChangeSearch, makeSearch} = this.props;
    const {value} = this.state;

    return (
      <div style={styles.container}>
          <div style={styles.searchContainer}>
            <SearchBar
                value={value}
                onChange={onChangeSearch}
                onRequestSearch={onRequestSearch}
            />
          </div>
        <div style={styles.searchButton}>
            <Button  variant="contained" color="primary" classes={{
              root: classes.button }}
                onClick={makeSearch}
            >
              Pesquisar
            </Button>
          </div>
      </div>
    );
  }
}



SearchField.propTypes = {
  onRequestSearch: PropTypes.func,
    onChangeSearch: PropTypes.func,
    makeSearch: PropTypes.func,
};

SearchField.defaultProps = {
  onRequestSearch: () => console.log('onRequestSearch')
};

export default  withStyles(costumStyles)(SearchField);
