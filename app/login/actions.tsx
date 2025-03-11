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
      return {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token
      };
    })
    .catch((error) => {
      return {
        error: ["Error occurred when parsing data"],
      };
    });

}