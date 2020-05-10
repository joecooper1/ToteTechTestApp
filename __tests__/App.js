import "react-native";
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import * as api from "../src/api/api";

// it('renders correctly', () => {
//   const tree = renderer.create(<Intro />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe("api tests", () => {
  it("getTopTracksByPlaylist returns array of ten tracks when given a playlist id", (done) => {
    api.getTopTracksByPlaylist("pp.53250712").then((result) => {
      expect(result.length).toBe(10);
      expect(result[0].name).toBe("She's Royal");
      done();
    });
  });
  it("getTopArtistsByGenre returns array of ten artists", (done) => {
    api.getTopArtistsByGenre().then((result) => {
      expect(result.length).toBe(10);
      expect(result[0].name).toBe("Bob Marley");
      done();
    });
  });
  it("getTopTracksByArtist returns array of ten tracks when given artist id", (done) => {
    api.getTopTracksByArtist("art.4771").then((result) => {
      expect(result.length).toBe(10);
      expect(result[0].name).toBe("Believe");
      done();
    });
  });
  it("getTracksByAlbum returns array of tracks when given album id", (done) => {
    api.getTracksByAlbum("alb.54719066").then((result) => {
      expect(result[0].name).toBe("Over My Dead Body (Album Version (Edited))");
      done();
    });
  });
  it("searchByTerm returns array of artists when given keyword and type artist", (done) => {
    api.searchByTerm({term: "Cher", type: 'artist'}).then((result) => {
      expect(result[0].name).toBe("Cher");
      done();
    });
  });
  it("searchByTerm returns array of tracks when given keyword and type track", (done) => {
    api.searchByTerm({term: "Cher", type: 'track'}).then((result) => {
      expect(result[0].name).toBe("Believe");
      done();
    });
  });
});
