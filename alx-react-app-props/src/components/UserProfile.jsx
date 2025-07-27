import { useContext } from 'react';
import UserContext from '../UserContext'; // adjust path as needed
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext); // ✅ use context here

  return (
    <div>
      <h2>{userData.name}'s Profile</h2>
      <UserInfo />
    </div>
  );
}

export default UserProfile;

