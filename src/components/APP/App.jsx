import React from 'react';
import {Container} from "./App.styled";

import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from '../Transactions/transactions';


import user from 'JSON/user.json';
import data from 'JSON/data.json';
import friends from 'JSON/friends.json';
import transactions from 'JSON/transactions.json';


export const App = () => {
  return (
    <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />;
        <TransactionHistory items={transactions} />;
    </Container>

  )};


export default App;





// //     <div
// //       style={{
// //         height: '100vh',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         fontSize: 40,
// //         color: '#010101'
// //       }}
// //     >
// //       React homework template
// //     </div>
// //   );
// // };
