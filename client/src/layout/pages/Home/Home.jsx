/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import React, {Component} from 'react';
import SearchBar from "material-ui-search-bar";

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import Header from "../Reuse/Header/Header";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    searchAGame = () => {
        const  {search} = this.state;
        console.log(search);
    }

    componentDidMount() {
        console.log('>>>', this.props.isMobile)
    }

    render() {

        return (
            <div>
                <Header/>
                <div style={{display: 'flex', flexDirection: 'row', flex: 4, alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{flex: 3, marginRight: '3vw'}}>
                        <SearchBar
                            value={this.state.value}
                            onChange={(newValue) => this.setState({value: newValue})}
                            onRequestSearch={this.searchAGame}
                        />
                    </div>
                    <div style={{flex: 1}}>
                        <PrimaryButton title="Pesquisar" />
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {};


const mapStateToProps = state => ({ isMobile: state.isMobile });
const router = withRouter(Home);
export default connect(mapStateToProps, null)(router);
