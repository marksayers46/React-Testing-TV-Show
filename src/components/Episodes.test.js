import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

import { mockEpisodesData } from "../utils/mockEpisodesData";

test("is episodes rendering", () => {
  // arrange
  render(<Episodes episodes={[]} />);
});


it('should render a list of episodes', () => {
  const {rerender, queryAllByTestId} = render(<Episodes episodes={[]} />)
  expect(queryAllByTestId(/episode/i)).toHaveLength(0);
  rerender(<Episodes episodes={mockEpisodesData.data._embedded.episodes}/>)
  expect(queryAllByTestId(/episode/i)).toHaveLength(26)
})