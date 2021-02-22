import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

import { Provider } from "react-redux";
import store from "../../Store";

describe("card component", () => {
  it("should render card ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Card data-testid="card" item={{ name: "Caio Henrique" }} />
      </Provider>
    );
    const el = getByTestId("card");
    expect(el).not.toBeNull();
  });
});
