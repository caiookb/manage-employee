import React from "react";
import { render } from "@testing-library/react";
import Grid from "./Grid";

describe("grid component", () => {
  it("should render grid with props", () => {
    const { getByTestId } = render(
      <div data-testid="grid">
        <Grid columns={3} rows={2} />)
      </div>
    );
    const el = getByTestId("grid");
    expect(el).not.toBeNull();
  });
});
