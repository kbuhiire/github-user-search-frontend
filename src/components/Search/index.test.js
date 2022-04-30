import { render, screen } from "test-util";
import Search from "./index";

describe("Search", () => {
  test("renders Search component", () => {
    render(<Search />);
    expect(screen.getByTestId("search-input")).toBeDefined();
  });

  test("renders Search component with input", () => {
    render(<Search />);
    expect(screen.getByTestId("search-input")).toBeDefined();
  });

  test("renders Search component with placeholder text", () => {
    render(<Search />);
    expect(screen.getByPlaceholderText(/Search Github Users/i)).toBeDefined();
  });
});
