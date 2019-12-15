import React from "react";
import { render } from "../../lib/test-utils";
import RoundButton from "./index";
import { colors } from "../../styles/variables";

test("renders RoundButton", () => {
  const { getByText } = render(<RoundButton>Test</RoundButton>);
  const linkElement = getByText("Test");
  expect(linkElement).toBeInTheDocument();
});

test("renders disabled RoundButton", () => {
  const { container } = render(<RoundButton disabled>Test</RoundButton>);
  expect(container.firstChild).toHaveStyle(`background-color: ${colors.gray}`);
});

test("renders primary button", () => {
  const { container } = render(<RoundButton>Test</RoundButton>);
  expect(container.firstChild).toHaveStyle(
    `background-color: ${colors.primary}`
  );
});
