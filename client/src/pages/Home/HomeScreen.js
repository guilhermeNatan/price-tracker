import React, {Component} from 'react';
import styles from './HomeStyles';
import {SearchField} from "../Search/components/SearchField";
import axios from 'axios';
import {SEARCH_GAME} from "../../constants/Endpoints";
import {GAME_DETAIL} from "../../constants/RoutePaths";
import {withRouter} from 'react-router-dom';
import {CategoryMenu} from "../Search/components/CategoryMenu";
import {RecentAnnoucements} from "./components/RecentAnnoucements";
import {ResultSearch} from "../Search/components/ResultSearch";

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

    const {mediaQuery} = this.props;

    return (

  <div style={{display: 'flex', flexDirection: 'column'}}>

            <div style={styles.container}>
              <SearchField onChangeSearch={this.onChangeSearch}
                           makeSearch={this.doSearch}
                           onRequestSearch={this.doSearch}/>


              <CategoryMenu
                  mediaQuery={mediaQuery}
              />


            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center",  marginRight: '10vw', marginLeft: '10vw'}}>

              <RecentAnnoucements />
            </div>

            {/*Esse componente será utilizado na tela de pesquisa*/}
            {/*<ResultSearch data={resultSearch}*/}
            {/*              isLoading={isLoading}*/}
            {/*              onRowClick={this.onRowClick}/>*/}

  </div>

    );
  }
}

export default withRouter(SearchScreen);
