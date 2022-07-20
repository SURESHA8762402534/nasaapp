import "@testing-library/jest-native/extend-expect";
import "@testing-library/jest-native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Home from "../src/screens/Home";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe("Home", () => {
  it("renders without crash", () => {
    render(<Home />);
  });

  it("matches snapshot", () => {
    const tree = render(<Home />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("has component with req testID", () => {
    const tree = render(<Home />);
    expect(tree.getByTestId("home")).toBeTruthy();
    const txt = tree.getByTestId("input");
    const btn = tree.getByTestId("btn");
    const randombtn = tree.getByTestId("random");
    expect(btn).toBeDisabled();
    fireEvent.press(randombtn);

    fireEvent.changeText(txt, { target: { value: "test" } });
    fireEvent.press(btn);
  });
});
