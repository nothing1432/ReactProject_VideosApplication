import axios from 'axios';

const KEY = 'AIzaSyC7-A4igKoqaJ5IbDT9yK07BqsjOY30pIQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});