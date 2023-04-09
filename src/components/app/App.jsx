import Profile from '../profile/Profile';
import Statistics from '../statistics/Statistics';
import FriendList from '../friendList/FriendList';
import TransactionHistory from '../transactionHistory/TransactionHistory';

import user from '../../source/user.json';
import data from '../../source/data.json';
import friends from '../../source/friends.json';
import transactions from '../../source/transactions.json';

import './App.css';

export const App = () => {
  return (
    <div className="app-container">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
