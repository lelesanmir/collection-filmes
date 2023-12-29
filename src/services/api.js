import axios from 'axios';

//Base da url: https://api.themoviedb.org/3/
// Url DA API: movie/now_playing?api_key=5d62e7bfe08c28abcd165d846f8984bd&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
