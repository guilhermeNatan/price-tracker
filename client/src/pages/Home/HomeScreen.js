import React, {Component} from 'react';
import styles from './HomeStyles';
import {SearchField} from "../Search/components/SearchField";
import {GAME_DETAIL, SEARCH} from "../../constants/RoutePaths";
import {withRouter} from 'react-router-dom';
import {CategoryMenu} from "../Search/components/CategoryMenu";
import {RecentAnnoucements} from "./components/RecentAnnoucements";

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
    const {history} = this.props;
    history.push({
      pathname: SEARCH.search,
      search: `q=${searchValue}`,
      state: { tab: 1 },
    });
    // this.setState({isLoading: true})
    // const respo = await  axios.get(`${SEARCH_GAME}?name=${searchValue}`);
    // const {conteudo} = respo.data
    // this.setState({resultSearch: conteudo, isLoading: false})

  }

  onRowClick  = (e, rowData) => {
    const {history} = this.props;
    return history.push(`${GAME_DETAIL}/${rowData.id}`)
  }

  render() {
    const {resultSearch, isLoading} = this.state;

    const {mediaQuery, history} = this.props;

    return (

  <div style={{display: 'flex', flexDirection: 'column'}}>

            <div style={styles.container}>
              <SearchField onChangeSearch={this.onChangeSearch}
                           makeSearch={this.doSearch}
                           onRequestSearch={this.doSearch}/>


              <CategoryMenu
                  mediaQuery={mediaQuery}
                  history={history}
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
