import axios from "axios";

export const httpAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL ,
});



export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
