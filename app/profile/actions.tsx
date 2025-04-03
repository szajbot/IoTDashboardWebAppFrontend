"use server";

import axios from "axios";

export async function fetchData(accessToken): Promise<any> {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://127.0.0.1:80/api/v1/demo/hello', //example endpoint with isAuthenticated auth
    // headers: {
    //   // 'Authorization': 'Bearer ' + accessToken
    // },
  };

  console.log(config)

  return axios.request(config)
    .then((response) => {
      console.log("Response received:", response.data); // Log the response data
      return {
        response: response.data,
      };
    })
    .catch((error) => {
      console.error("Error occurred during request:", error); // Log the error details
      if (error.response) {
        console.error("Error response data:", error.response.data); // Log the error response data if available
      }
      return {
        error: ["Error occurred when retrieving data"],
      };
    });

}