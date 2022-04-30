import { render, screen } from "test-util";
import Loading from "./index";


describe("Loading", () => {
  test("renders Loading component", () => {
    render(<Loading />);
    expect(screen.getByTestId('loading')).toBeDefined();
  });

  test("renders Loading component with icon", () => {
    render(<Loading  />);
    expect(screen.getByTestId('github-icon')).toBeDefined();
  })
})