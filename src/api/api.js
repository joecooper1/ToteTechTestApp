import axios from "axios";

import { lastApiKey } from "./auth";

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

export const getArtistInfo = (artist = "Cher") => {
  return axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastApiKey}&format=json`,
      {},
      { headers: { "User-Agent": "onlyReggae" } }
    )
    .then((result) => {
      console.log(result.data.artist.bio.summary);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopArtistsByGenre = () => {}
