/** @format */

import { render } from "@testing-library/react-native";
import React from "react";
import App from "../App";
import Details from "../src/screens/Details";

const props = {
  params: {
    data: "1234",
  },
};

describe("Details", () => {
  jest.useFakeTimers();
  it("renders without crash", () => {
    render(<Details route={props} />);
  });

  it("matches snapshot", () => {
    const tree = render(<Details route={props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
