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
            searchValue: '',
            resultSearch:[],
            isLoading: false,

        }
    }

    onChangeSearch = (newValue) => this.setState({ searchValue: newValue })

    doSearch = async  () => {
        const {searchValue} = this.state;
        this.setState({isLoading: true})
        const respo = await  axios.get(`${SEARCH_GAME}?name=${searchValue}`);
        const {conteudo} = respo.data
        this.setState({resultSearch: conteudo, isLoading: false})

    }

    render() {
        const {resultSearch, isLoading} = this.state;
    return (
      <div style={styles.container}>

        <SearchField onChangeSearch={this.onChangeSearch } makeSearch={this.doSearch}
                     onRequestSearch={this.doSearch}/>
        <ResultSearch data={resultSearch} isLoading={isLoading} />
      </div>
    );
  }
}

export default SearchScreen;
