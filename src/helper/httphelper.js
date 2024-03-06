// import axios from "axios";

// export const httpAxios = axios.create({
//   baseURL: process.env.BASE_URL
// });


import axios from "axios";

export const httpAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL ,
});