import React from "react";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinneer component", () => {
  it("should render Spinneer ", () => {
    const { getByTestId } = render(<Spinner data-testid="spinner" />);
    const el = getByTestId("spinner");
    expect(el).not.toBeNull();
  });
});
