import axios from "axios";

import { clientId, clientSecret } from "./auth";

export const getTopTracks = () => {
  return axios
    .get(`https://api.spotify.com/v1/search?q=bowie&type=artist`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return err;
    });
};
