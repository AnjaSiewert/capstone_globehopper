import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders Header component", () => {
  render(<Header />);
  const headerElement = screen.getByRole("heading");
  expect(headerElement).toBeInTheDocument();
});
