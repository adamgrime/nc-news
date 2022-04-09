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

export const getArticlesByArticleId = (article_id) => {

    return axios.get(`${baseUrl}/articles/${article_id}`).then(({ data }) => {
         return data
    })
         

}

export const getCommentByArticleId = (article_id) => {

    return axios.get(`${baseUrl}/articles/${article_id}/comments`).then(({ data }) => {
        return data
    })

}

export const patchUser = (article_id, inc_votes) => {
    
    return axios.patch(`${baseUrl}/articles/${article_id}`, { inc_votes: inc_votes }).then(({ data: { article } }) => {
        return article
    });

}

export const postComment = (article_id, newComment) => {
    
    console.log(newComment)
    return axios.post(`${baseUrl}/articles/${article_id}/comments`, newComment)
        .then(({ data : {comment} }) => {
            console.log(comment)
            return comment
    })
        .catch((err) => {
        console.log(err)
    })
    }





