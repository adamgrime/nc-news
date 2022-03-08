import axios from "axios";

const baseUrl = 'https://nc-news-example-seminar-3-12.herokuapp.com/api';

export const getTopics = () => {
    return axios.get(`${baseUrl}/topics`).then(({data}) => {
        return data;
    })
}

export const getArticles = () => {
    return axios.get(`${baseUrl}/articles`).then(({ data }) => {
        return data
    })
}

export const getArticlesByTopic = (topic) => {
    return axios.get(`${baseUrl}/articles?topic=${topic}`).then(({ data }) => {
        return data
    })
}