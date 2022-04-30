import { render, screen } from "test-util";
import Footer from "./index";

describe("Footer", () => {
  test("renders Footer component", () => {
    render(<Footer />);
  });

  test("renders a select element", () => {
    render(<Footer />);
    expect(screen.getByLabelText(/Select Users Per Page/i)).toBeInTheDocument();
  });

  test("renders a pagination element", () => {
    render(<Footer />);
    expect(screen.getByText(/Previous/i)).toBeInTheDocument();
  });

});
