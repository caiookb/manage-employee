import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("dropwdown component", () => {
  it("should render dropwdown with props", () => {
    const { getByTestId } = render(
      <Dropdown data-testid="dropdown" name={"gender"} label={"Gender"} />
    );
    const el = getByTestId("dropdown");
    expect(el).not.toBeNull();
  });
});
