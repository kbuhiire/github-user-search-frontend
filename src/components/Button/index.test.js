import { render, screen } from "test-util";
import Button from './'

describe('Button', () => {
    test('renders the button', () => {
        render(<Button />);
    })

    test('renders the button with text', () => {
        render(<Button text="Dark Mode" />);
        expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
    })

    test('renders the button with alt text', () => {
        render(<Button altText="Alt Text" />);
        expect(screen.getByText(/Alt Text/i)).toBeInTheDocument();
    })

    test('renders the button with text and alt text', () => {
        render(<Button text="Dark Mode" altText="Alt Text" />);
        expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
        expect(screen.getByText(/Alt Text/i)).toBeInTheDocument();
    })


})