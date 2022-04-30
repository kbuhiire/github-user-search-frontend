import { render, screen } from "test-util";
import Home from "./index";

describe("Home", () => {
  test("renders Home component", () => {
    render(<Home />);
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

  test("renders no users found by default", () => {
    render(<Home />);
    expect(screen.getByText(/No users found/i)).toBeInTheDocument();
  });

  test("renders github icon by default", () => {
    render(<Home />);
    expect(screen.getByTestId("github-icon-nousers")).toBeDefined();
  });


});