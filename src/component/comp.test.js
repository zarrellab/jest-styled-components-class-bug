import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { Comp } from "./comp";

describe("Comp", () => {
  test("should match snapshots", () => {
    const { container } = render(<Comp />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toMatchSnapshot();
  });
});
