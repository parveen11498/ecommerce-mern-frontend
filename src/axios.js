import axios from "axios";

const instance = axios.create({
    baseURL: "https://pk-ecommerce-mern.herokuapp.com/",
});

export default instance;