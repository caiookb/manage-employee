import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text";

describe("Text component", () => {
  it("should render text ", () => {
    const { getByTestId } = render(<Text data-testid="text" />);
    const el = getByTestId("text");
    expect(el).not.toBeNull();
  });
});
