import React, {PureComponent} from 'react';
import {costumStyles} from './SearchFieldStyles';
import SearchBar from "material-ui-search-bar";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Verify from "../../../../util/Verify";

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
      <Grid
          container
          direction="row"
          justify="flex-end"
          spacing={2}

      >

          <Grid item  xs={12} sm={11} md={11} lg={11} >
            <SearchBar
                value={value}
                onChange={onChangeSearch}
                onRequestSearch={onRequestSearch}
            />
          </Grid>

          {
              !Verify.isMobile && (
                  <Grid item md={1} sm={11} lg={1} >
                      <Button  variant="contained" color="primary" classes={{
                          root: classes.button }}
                               onClick={makeSearch}
                      >
                          Pesquisar
                      </Button>
                  </Grid>
              )
          }


      </Grid>
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
