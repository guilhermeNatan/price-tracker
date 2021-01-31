import React, {Component} from 'react';
import styles from './SearchStyles';
import {SearchField} from "./components/SearchField";

class SearchScreen extends Component {
  render() {
    return (
      <div style={styles.container}>
        <SearchField />

      </div>
    );
  }
}

export default SearchScreen;
