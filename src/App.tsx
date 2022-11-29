import React from 'react';
// import Card, { CardVariant } from './components/Card';
// import EventsExample from './components/EventsExample';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import TodoItemPage from './components/TodoItemPage copy';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UserPage from './components/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to={'/users'}>Пользователи </NavLink>
          <NavLink to={'/todos'}>Список дел</NavLink>
        </div>
        <Routes>
          <Route path='/users' element={<UserPage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
          <Route path='/todos/:id' element={<TodoItemPage />} />
          <Route path='*' element={<div>NotFound</div>} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //   <EventsExample />
    //   <Card
    //     onClick={(num) => console.log('click!!!', num)}
    //     variant={CardVariant.primary}
    //     width='200px'
    //     height='200px'
    //   >
    //     <button>Press me</button>
    //     <h5>Doppelganger!!!</h5>
    //   </Card>
    // </div>
  );
};

export default App;
