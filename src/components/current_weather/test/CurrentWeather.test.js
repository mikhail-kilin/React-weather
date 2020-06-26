import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CurrentWeather from "../CurrentWeather";

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

it("gets current info about Moscow", async () => {
  const result = {
    weather: [ {
      description: "scattered clouds",
      icon: "03d"
    }],
    main: {
      temp: 25,
      temp_min: 20,
      temp_max: 30
    }
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(result)
    })
  );

  await act(async () => {
    render(<CurrentWeather zip="524901" />, container);
  });

  expect(container.textContent).toContain("Temp now: 25 °C");
  expect(container.textContent).toContain("Temp min: 20 °C");
  expect(container.textContent).toContain("Temp max: 30 °C");
  global.fetch.mockRestore();
});
