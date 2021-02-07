import React, {Component} from 'react';
import styles from './ConfirmEmailStyles';
import { withRouter } from 'react-router-dom';
import axios from '../../config/AxiosConfig';
import {AUTH} from "../../constants/Endpoints";
class ConfirmEmailScreen extends Component {

  constructor(props, context) {
    super(props, context);
    this.state ={
      loading: false
    }
  }

 async componentDidMount() {
    const {confirmEmailToken} = this.props.params;
    this.setState({loading: true})
    await  axios.get(`${AUTH.confirmAddressEmaill}/?token=${confirmEmailToken}`);
    this.setState({loading: false});
  }

  render() {
    console.log(this.props)
    return (
      <div style={styles.container}>
        Obrigado por confirmar seu e-mail
      </div>
    );
  }
}

export default withRouter(ConfirmEmailScreen);
