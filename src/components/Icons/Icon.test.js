import React from "react";
import { render } from "@testing-library/react";
import Icon from "./Icon";

describe("icon component", () => {
  it("should render icon with props", () => {
    const { getByTestId } = render(
      <Icon data-testid="icon" icon={"employee"} />
    );
    const el = getByTestId("icon");
    expect(el).not.toBeNull();
  });
});
