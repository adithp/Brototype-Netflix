import axios from 'axios'
import {BASE_URl} from './constants/constants'
const instance = axios.create({
    baseURL: BASE_URl,
  });

  export default instance