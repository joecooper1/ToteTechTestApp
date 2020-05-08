import axios from "axios";

import { lastApiKey } from "./auth";

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

export const getTopArtistsByGenre = (page = 1) => {
  console.log("getTopArtists");
  return axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=reggae&api_key=${lastApiKey}&format=json&limit=10&page=${page}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.topartists.artist;
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
      `//musicbrainz.org/ws/2/release/${mbid}`,
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
