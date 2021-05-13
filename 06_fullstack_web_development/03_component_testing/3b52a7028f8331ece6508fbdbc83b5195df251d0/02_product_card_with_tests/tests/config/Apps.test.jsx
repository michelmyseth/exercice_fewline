import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { App } from "../../src/App";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders at least an input", () => {
    expect.assertions(1);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
  screen.debug();
});
