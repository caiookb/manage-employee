import React from "react";
import { render } from "@testing-library/react";
import Welcome from "./Welcome";
import { Provider } from "react-redux";
import store from "../../Store";

describe("Welcome component", () => {
  it("should render welcome ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Welcome data-testid="welcome" />
      </Provider>
    );
    const el = getByTestId("welcome");
    expect(el).not.toBeNull();
  });
});
