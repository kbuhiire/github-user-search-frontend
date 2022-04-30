import Button from 'components/Button';

const UserCard = ({ user }) => {
  const openUserProfile = () => {
    window.open(user.html_url, '_blank');
  }
  return (
    <div className="user-card" data-testid="user-card" onClick={openUserProfile}>
      <div className="user-card-item">
        <div className="left-item">
          <img
            data-testid="user-avatar"
            className="avatar"
            src={user.avatar_url}
            alt="user avatar"
          />
        </div>
        <div className="middle-item">
          <div className="user-header"><h5 data-testid="name">{user.name || user.login}</h5> <span data-testid="user-name" className="username">{user.login}</span></div>
            <p data-testid="user-bio">{user.bio || `Based in ${user.location}`}</p>
            <div className='bottom-item'>
                <span data-testid="user-repo" className="repo">{`${user.public_repos} repositories`}</span>
                <span data-testid="user-followers" className="follower">{`${user.followers} followers`}</span>
            </div>
        </div>
        <div className="right-item">
            <Button data-testid="follow-btn" text="Follow" className="follow-btn" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
