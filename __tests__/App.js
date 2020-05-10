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
    api.getTopTracksByGenre("pp.53250712").then((result) => {
      expect(result.length).toBe(10);
      expect(result[0].name).toBe("She's Royal");
      done();
    });
  });
  it("getTopArtistsByGenre returns array of ten artists", (done) => {
    api.getTopTracksByGenre().then((result) => {
      expect(result.length).toBe(10);
      expect(result[0].name).toBe("She's Royal");
      done();
    });
  });
});
