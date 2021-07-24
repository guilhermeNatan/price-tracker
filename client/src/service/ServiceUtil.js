import {isNil, omitBy} from 'lodash';
import axios from 'axios';

export default class ServiceUtil {




  static logout = () =>  console.log('realizar logout');


  static tryLogin = ({ email, password }) =>new Promise(()=> "resolve");



  static prepareDataBeforeUpsert = object => omitBy(object, isNil);

  static makePostRequest = async ({values, url, onSuccess, onError, beforeRequest, afterRequest}) => {
    try {
      beforeRequest && beforeRequest();
      const respo = await axios.post(url, values);
      onSuccess && onSuccess(respo);
    } catch (error) {
      onError && onError(error)
    }finally {
      afterRequest && afterRequest()
    }
  }


  static makeGetRequest = async ( url, onSuccess, onError) => {
    try {
      const respo = await axios.get(url);
      onSuccess && onSuccess(respo);
    } catch (error) {
      onError && onError(error)
    }
  }

}
