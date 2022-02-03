import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

export default {
    getEvent(){
        return apiClient.get('/events');
    },
    getEventDetail(id){
        return apiClient.get('/events/'+id);
    }
}