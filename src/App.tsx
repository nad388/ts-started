import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
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
    </div>
  );
};

export default App;