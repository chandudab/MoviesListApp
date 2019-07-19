import axios from 'axios';

const movieDbInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

movieDbInstance.interceptors.request.use(request => {
    const params = {
        ...request.params,
        language: 'en-US',
        api_key: '74017f757976ac7708b7ee131738f919'
    };
    request.params = params;
    return request;
});

const services = {
    movieDbInstance: movieDbInstance
};

export default services;