import {isNil, omitBy} from 'lodash';
import axios from "../config/AxiosConfig";

export default class ServiceUtil {




  static logout = () =>  console.log('realizar logout');


  static tryLogin = ({ email, password }) =>new Promise(()=> "resolve");



  static prepareDataBeforeUpsert = object => omitBy(object, isNil);

  static makePostRequest = async (values, url, onSuccess, onError) => {
    try {
      const respo = await axios.post(url, values);
      onSuccess && onSuccess(respo);
    } catch (error) {
      onError && onError(error)
    }
  }

}
