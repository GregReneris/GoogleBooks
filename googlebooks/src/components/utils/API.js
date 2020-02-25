import axios from "axios"

const GOOGLE ="https://www.googleapis.com/books/v1/volumes?q="
const URL = "http://localhost:8080"


const API = {
    search: searchString => axios.get(`${GOOGLE}${searchString}`),
    saveBook : book=> axios.post(`${URL}/api/books`, book),
    deleteBook : book=> axios.delete(`${URL}/api/book/${book}`),
    getBooks : ()=> axios.get(`${URL}/api/books`)
}


export default API;