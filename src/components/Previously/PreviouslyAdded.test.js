import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Store";
import PreviouslyAdded from "./PreviouslyAdded";

describe("PreviouslyAdded component", () => {
  it("should render PreviouslyAdded ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <div data-testid="previous">
          <PreviouslyAdded />
        </div>
      </Provider>
    );
    const el = getByTestId("previous");
    expect(el).not.toBeNull();
  });
});
