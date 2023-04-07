import Profile from './profile/Profile';
import user from '../source/user.json';

export const App = () => {
  return (
    <div className="app-container">
      <Profile {...user} />
    </div>
  );
};
