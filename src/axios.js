import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecommerce-mern-backend.vercel.app/",
});

export default instance;