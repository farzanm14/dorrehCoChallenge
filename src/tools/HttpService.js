import axios from 'axios';
export const baseUrl = 'https://jsonplaceholder.typicode.com/';

const httpService = {
    async httpGet(url) {
        const res = await axios.get(baseUrl + url);
        return await res.data;
    },
};

export default httpService;