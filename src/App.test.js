import { render, screen } from "test-util";

import App from "./App";

describe('App', () => {
  test("renders App component", () => {
  
    render(<App />);
    const linkButton = screen.getByText(/dark mode/i);
    expect(linkButton).toBeInTheDocument()
  });
  
})