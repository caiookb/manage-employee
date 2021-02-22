import React from "react";
import { render } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput component", () => {
  it("should render textinput ", () => {
    const { getByTestId } = render(<TextInput data-testid="textinput" />);
    const el = getByTestId("textinput");
    expect(el).not.toBeNull();
  });
});
