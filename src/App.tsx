import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: 'Laura',
      email: 'laura@twinpeaks.com',
      address: {
        city: 'Twin Peaks',
        street: 'Sycamore',
        zipcode: '92998-3874',
      },
    },
    {
      id: 2,
      name: 'Doppelganger',
      email: 'cooper@twinpeaks.com',
      address: {
        city: 'Twin Peaks',
        street: 'Colorado',
        zipcode: '90566-7771',
      },
    },
  ];
  return (
    <div>
      <Card
        onClick={(num) => console.log('click!!!', num)}
        variant={CardVariant.primary}
        width='200px'
        height='200px'
      >
        <button>Press me</button>
        <h5>Doppelganger!!!</h5>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
