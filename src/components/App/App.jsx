import { useState } from "react";
import css from "./App.module.css";

import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.header}>GOIT React HW1</h1>
      </div>
      <h2 className={css.header}>Task 1</h2>
      <div className={css.container}>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <h2 className={css.header}>Task 2</h2>
      <div className={css.container}>
        <FriendList friends={friends} />
      </div>
      <h2 className={css.header}>Task 3</h2>
      <div className={css.container}>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}
