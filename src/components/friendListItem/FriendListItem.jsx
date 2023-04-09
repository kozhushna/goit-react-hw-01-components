import PropTypes from 'prop-types';
import './FriendListItem.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friends__item">
      <span className={clsx('friends__status', { online: isOnline })}></span>
      <img
        className="friends__avatar"
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className="friends__name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
