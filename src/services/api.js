import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'http://api.nytimes.com/svc/mostpopular/v2/viewed/',
});

ApiClient.interceptors.response.use(
    (response) => {
        process.env.NODE_ENV !== 'production' && console.log('response', response)
        return response;
    },
    (error) => {
        process.env.NODE_ENV !== 'production' && console.log('error', error.response)
        return Promise.reject(error);
    }
);

class Api{

    getPeriod(period){
        return ApiClient.get(`${period}.json`,{
            params:{
                'api-key': process.env.REACT_APP_API_KEY
            }
        })
    }

}


export default new Api()