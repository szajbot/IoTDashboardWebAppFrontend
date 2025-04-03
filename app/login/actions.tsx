"use server";

import axios from "axios";
import qs from "qs";

export async function login(credentials): Promise<any> {
  let data = qs.stringify({
    'password': credentials.password,
    'username': credentials.username,
    'grant_type': 'password',
    'client_id': 'test-client-id',
    'client_secret': '6I1yeLYvW8Vrk1Iz11WLF1gGTHD20BXI',
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:9090/realms/TestRealm/protocol/openid-connect/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };

  return axios.request(config)
    .then((response) => {
      console.log("Response received:", response.data); // Log the response data
      return {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token
      };
    })
    .catch((error) => {
      console.error("Error occurred during request:", error); // Log the error details
      if (error.response) {
        console.error("Error response data:", error.response.data); // Log the error response data if available
      }
      return {
        error: ["Error occurred when trying to log in"],
      };
    });

}