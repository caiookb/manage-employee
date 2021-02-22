import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("modal component", () => {
  it("should render modal ", () => {
    const { getByTestId } = render(
      <div data-testid="modal">
        <Modal />
      </div>
    );
    const el = getByTestId("modal");
    expect(el).not.toBeNull();
  });
});
