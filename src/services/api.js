import axios from 'axios';


const api = axios.create({
  baseURL: 'http://advquestapi-env.eba-qfqfkwgf.sa-east-1.elasticbeanstalk.com/'
})

export default api;