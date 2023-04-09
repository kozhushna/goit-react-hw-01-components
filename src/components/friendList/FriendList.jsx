import PropTypes from 'prop-types';
import FriendListItem from 'components/friendListItem/FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friends">
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
