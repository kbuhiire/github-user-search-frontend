import { AiOutlineGithub } from "react-icons/ai";
const GithubIcon = <AiOutlineGithub size={68} />;

const Loading = () => {
  return (
    <div className="loader" data-testid="loading">
      <span className="loading" data-testid="github-icon">
        {GithubIcon}
      </span>
    </div>
  );
};

export default Loading;
