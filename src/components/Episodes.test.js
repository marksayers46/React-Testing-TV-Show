import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("is episodes rendering", () => {
  // arrange
  render(<Episodes episodes={[]} />);
});