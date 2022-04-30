import Button from "../Button";
import { FiMoon } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import Search from "components/Search";

const icon = <FiMoon size={18} />;
const GithubIcon = <AiOutlineGithub size={40} />;

const Header = () => {
  function onClick() {
    const themeBtn = document.querySelector(".header-btn");
    themeBtn.classList.toggle("active");
    if (themeBtn.classList.contains("active")) {
      localStorage.setItem("data-theme", "dark");
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("data-theme")
      );
    } else {
      localStorage.setItem("data-theme", "light");
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("data-theme")
      );
    }
  }

  return (
    <header className="header">
      <div className="wrapper flex f-center-y f-btw">
        <Button data-testid="github-icon-header" text={GithubIcon} className="logo-btn" />
        <Search />
        <Button
          text={icon}
          altText="Dark Mode"
          className="header-btn"
          onclick={onClick}
        />
      </div>
    </header>
  );
};

export default Header;
