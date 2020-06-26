import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "../App";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("has default info about Moscow", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toContain("Weather in Moscow:");
});

it("has buttons to change city", () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.textContent).toContain("Kazan");

  const button = document.getElementById("Kazan");
  button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  expect(container.textContent).toContain("Weather in Kazan:");
});
