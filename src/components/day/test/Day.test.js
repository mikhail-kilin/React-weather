import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Day from "../Day";

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

it("get info about day", () => {
  const data = {
    weather: [{
      description: "scattered clouds",
      icon: "03d"
    }],
    temp: {
      day: 30,
      night: -30
    }
  }
  act(() => {
    render(
      <table>
        <tbody>
          <Day index='0' data={data} />
        </tbody>
      </table>,
      container
    );
  });

  expect(container.textContent).toContain("30 °C");
  expect(container.textContent).toContain("-30 °C");
});
