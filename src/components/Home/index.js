import { useSelector } from "react-redux";
import { AiOutlineGithub } from 'react-icons/ai'
import UserCard from "components/UserCard";
import Loading from "components/Loading";

const GithubIcon = <AiOutlineGithub size={68} />

const Home = () => {
  const { users, isLoading } = useSelector((state) => state.user);
  
  return (
    <div data-testid="home">
      {isLoading ? (
        <div className="loading-container">
          <Loading text="Loading Users" />
        </div>
      ) : users.items && users.items.length !== 0 ? (
        <div className="user-card-container">
          {users.items.map((user, index) => {
            return <UserCard user={user} key={index} />;
          })}
        </div>
      ) : (
        <div className="no-content">
          <span data-testid="github-icon-nousers">
               {GithubIcon}
           </span>
          <span>No Users Found</span>
        </div>
      )}
    </div>
  );
};

export default Home;
