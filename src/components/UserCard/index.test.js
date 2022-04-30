import { render, screen } from "test-util";
import UserCard from "./index";
 const user = {
    avatar_url: "https://avatars0.githubusercontent.com/u/17098?v=4",
    bio: "",
    blog: "",
    company: "",
    followers: 0,
    public_repos: 0,
 }
describe("UserCard", () => {
  test("renders UserCard component", () => {
    render(<UserCard user={user} />);
    expect(screen.getByTestId("user-card")).toBeDefined();
  });

  test("renders UserCard component with avatar", () => {
    render(<UserCard user={user} />);
    expect(screen.getByTestId("user-avatar")).toBeDefined();
  });

  test("renders UserCard component with name", () => {
    render(<UserCard user={user} />);
    expect(screen.getByTestId("name")).toBeDefined();
  });

  test("renders UserCard component with username", () => {
    render(<UserCard user={user} />);
    expect(screen.getByTestId("user-name")).toBeDefined();
  });

  test("renders UserCard component with bio", () => {
    render(<UserCard user={user} />);
    expect(screen.getByTestId("user-bio")).toBeDefined();
  });

  test("renders UserCard component with followers", () => {
    render(<UserCard user={user} />);
    expect(screen.getByTestId("user-followers")).toBeDefined();
  });

  test("renders UserCard component with follow Button", () => {
    render(<UserCard user={user} />);
    expect(screen.queryByTestId("follow-btn")).toBeDefined(); 
  });
});
