import React, {Component} from 'react';
import styles from './SearchStyles';
import {SearchField} from "./components/SearchField";
import {ResultSearch} from "./components/ResultSearch";
import axios from '../../config/AxiosConfig';
import {SEARCH_GAME} from "../../constants/Endpoints";
import {GAME_DETAIL} from "../../constants/RoutePaths";
import { withRouter } from 'react-router-dom';

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

    onRowClick  = (e, rowData) => {
        const {history} = this.props;
        return history.push(`${GAME_DETAIL}/${rowData.id}`)
    }

    render() {
        const {resultSearch, isLoading} = this.state;
    return (
      <div style={styles.container}>

        <SearchField onChangeSearch={this.onChangeSearch } makeSearch={this.doSearch}
                     onRequestSearch={this.doSearch}/>
        <ResultSearch data={resultSearch} isLoading={isLoading}

                      onRowClick={this.onRowClick}/>
      </div>
    );
  }
}

export default withRouter(SearchScreen);
