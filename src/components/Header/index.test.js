import { render, screen } from "test-util";
import Header from "./index";

describe("Header", () => {
  test("renders Header component", () => {
    render(<Header />);
    const linkButton = screen.getByText(/dark mode/i);
    expect(linkButton).toBeInTheDocument();
  });

  test("renders search input", () => {
    render(<Header />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  test("renders github icon", () => {
    render(<Header />);
    expect(screen.queryByTestId("github-icon-header")).toBeDefined();
  });
});
