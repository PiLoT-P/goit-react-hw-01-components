import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";
import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <Profile profiles={user} />
      <Statistics title={"Upload stats"} statistic={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </Fragment>
  );
};
