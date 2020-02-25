import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./videoplayer.jsx";
import MoviePlayer from "./videoplayer";

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  title: `Bohemian rhapsody`,
  imgPoster: `img/bohemian-rhapsody.jpg`,
  genre: `Comedy`,
  releaseDate: 2020,
  imgBg: `img/bg-the-grand-budapest-hotel.jpg`,
  runTime: `1h 50m`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`],
  videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};
Enzyme.configure({adapter: new Adapter()});

jest.spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

jest.spyOn(window.HTMLMediaElement.prototype, `load`)
  .mockImplementation(() => {});

it(`VideoPlayer should have state isPlaying true`, () => {
  const player = mount(<VideoPlayer
    movie={movie}
    src={``}
    poster={``}
    muted={true}
    stopOnPause={true}
    isPlaying={true}
  />);

  player.instance()._videoRef.current.onplay();

  expect(player.state().isPlaying).toBe(true);
});

it(`VideoPlayer should have state isPlaying false (paused)`, () => {
  const player = mount(<VideoPlayer
    movie={movie}
    src={``}
    poster={``}
    muted={true}
    stopOnPause={true}
    isPlaying={false}
  />);

  expect(player.state().isPlaying).toBe(false);
});
