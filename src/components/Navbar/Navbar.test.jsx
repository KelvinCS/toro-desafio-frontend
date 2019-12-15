import React from "react";
import { render } from "../../lib/test-utils";
import Navbar from "./index";

test("renders Navbar", () => {
  const { container } = render(<Navbar />);

  expect(container.firstChild).toBeInTheDocument();
});

test("navbar image mounted", () => {
  const { container } = render(<Navbar />);

  expect(container.getElementsByTagName("svg")).toHaveLength(1);
});
