import axios from "axios";

import { lastApiKey, napApiKey } from "./auth";

export const getTopTracksByGenre = (page = 6) => {
  console.log("getTopTracksByGenre");
  return axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=reggae&api_key=${lastApiKey}&format=json&limit=10&page=${page}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.tracks.track;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArtistInfo = (artist = "Cher") => {
  console.log("getArtistInfo");
  return axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastApiKey}&format=json`,
      {},
      { headers: { "User-Agent": "onlyReggae" } }
    )
    .then((result) => {
      return result.data.artist.bio.summary;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopArtistsByGenre = () => {
  console.log("getTopArtists");
  return axios
    .get(
      `https://api.napster.com/v2.2/genres/g.383/artists/top?limit=10&offset=0&apikey=${napApiKey}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      console.log(result.data);
      return result.data.artists;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopTracksByArtist = (artist, page = 1) => {
  console.log("getTopTracksByArtist");
  return axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${lastApiKey}&format=json&limit=10&page=${page}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.toptracks.track;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getImageUrl = (mbid) => {
  console.log("getImageUrl");
  return axios
    .get(
      `http://coverartarchive.org/release/${mbid}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
