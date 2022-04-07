import axios from "axios";

const BASE_URL = "http://localhost:8080/";
let TOKEN ;
if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser)
 {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;
 }
console.log("token",TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });
