import axios from "axios";

const instance = axios.create({
    baseURL: 'https://ai-open.herokuapp.com/openai'
});

export default instance;