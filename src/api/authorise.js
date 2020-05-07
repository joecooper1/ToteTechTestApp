import axios from "axios";
import qs from "qs";

//Get and encode into base64 id and secret
import { clientId, clientSecret } from "./auth";
import base64 from "react-native-base64";

export const getAuth = async () => {
  console.log("hi");
  const headers = {
    Authorization: `Basic ${base64.encode(`${clientId}:${clientSecret}`)}`,
    "Content-Type": "application/x-www-form-urlencoded",
    redirect_uri: 'http://localhost:8888/callback'
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      data,
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log('ERROR', error);
  }
};
