import React, {Component} from 'react';
import styles from './SearchStyles';
import {SearchField} from "./components/SearchField";
import {ResultSearch} from "./components/ResultSearch";
import axios from '../../config/AxiosConfig';
import {SEARCH_GAME} from "../../constants/Endpoints";

class SearchScreen extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            searchValue: ''
        }
    }

    onChangeSearch = (newValue) => this.setState({ searchValue: newValue })

    makeSearch = async  () => {
        const {searchValue} = this.state;
        const respo = await  axios.get(`${SEARCH_GAME}?name=${searchValue}`);
        console.log(respo)

    }

    render() {
    return (
      <div style={styles.container}>
        <SearchField onChangeSearch={this.onChangeSearch } makeSearch={this.makeSearch}/>
        <ResultSearch />
      </div>
    );
  }
}

export default SearchScreen;
