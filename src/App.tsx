import React from 'react';
import Bag from './components/Bag';
import ShoppingList from './components/ShoppingList';

const App = () => (
  <>
    <Bag />
    <div className="list-app">
      <ShoppingList />
    </div>
  </>
);

export default App;
