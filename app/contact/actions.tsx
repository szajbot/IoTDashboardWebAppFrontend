"use server";

import axios from "axios";
import qs from "qs";


export async function logout(accessToken, refreshToken): Promise<any> {

  let data = qs.stringify({
    'client_id': 'test-client-id',
    'client_secret': '6I1yeLYvW8Vrk1Iz11WLF1gGTHD20BXI',
    'refresh_token': refreshToken
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:9090/realms/TestRealm/protocol/openid-connect/logout',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + accessToken,
    },
    data : data
  };

  return axios.request(config)
    .then((response) => {
      console.log(response);
      return {
        response: ["Properly logout"],
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        error: ["Error occurred when parsing data"],
      };
    });

}