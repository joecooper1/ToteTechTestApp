import axios from "axios";

import { lastApiKey, napApiKey } from "./auth";

export const getTopTracksByGenre = (playlist) => {
  console.log("getTopTracksByGenre");
  return axios
    .get(
      `https://api.napster.com/v2.2/playlists/${playlist}/tracks?limit=10&offset=0&apikey=${napApiKey}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.tracks;
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
      return result.data.artists;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopTracksByArtist = (artist) => {
  console.log("getTopTracksByArtist");
  return axios
    .get(
      `https://api.napster.com/v2.2/artists/${artist}/tracks/top?limit=10&offset=0&apikey=${napApiKey}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.tracks;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTracksByAlbum = (album) => {
  console.log("getTracksByAlbum");
  return axios
    .get(
      `https://api.napster.com/v2.2/albums/${album}/tracks?&apikey=${napApiKey}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.tracks;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getImageUrl = (artist) => {
  console.log("getImageUrl");
  return axios
    .get(
      `https://api.napster.com/v2.2/artists/${artist}/images?apikey=${napApiKey}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.images[0] ? result.data.images[0].url : "none";
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAlbumImageUrl = (album) => {
  console.log("getAlbumImageUrl");
  return axios
    .get(
      `https://api.napster.com/v2.2/albums/${album}/images?apikey=${napApiKey}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.images[0] ? result.data.images[0].url : "none";
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchByTerm = ({ term, type }) => {
  console.log("searchByTerm");
  return axios
    .get(
      `https://api.napster.com/v2.2/search?query=${term}&type=${type}&per_type_limit=10&apikey=${napApiKey}`,
      {},
      { headers: { "User-Agent": "OnlyReggae" } }
    )
    .then((result) => {
      return result.data.search.data[type + "s"];
      // return result.data.search.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
