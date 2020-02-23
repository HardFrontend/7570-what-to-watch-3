import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Videoplayer from "./videoplayer.jsx";

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
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`Should play video on click`, () => {
  const fakePlay = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  const moviePlayer = mount(
      <Videoplayer
        movie={movie}
        muted={true}
        autoPlay={false} />
  );

  expect(moviePlayer.state(`isPlaying`)).toBe(false);
  moviePlayer.simulate(`click`);
  expect(moviePlayer.state(`isPlaying`)).toBe(true);

  expect(fakePlay).toHaveBeenCalled();
  fakePlay.mockRestore();
});
