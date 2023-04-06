import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("Navigation component contains links", () => {
  render(<Navigation />);
  const linkElements = screen.getAllByLabelText(/home/i);
  expect(linkElements).toHaveLength(3);
});

test("Navigation component contains SVG links", () => {
  render(<Navigation />);
  const homeIcon = screen.getByRole("img", { name: /home/i });
  const earthIcon = screen.getByRole("img", { name: /list/i });
  const mapIcon = screen.getByRole("img", { name: /visited/i });
  expect(homeIcon).toBeInTheDocument();
  expect(earthIcon).toBeInTheDocument();
  expect(mapIcon).toBeInTheDocument();
});
