import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import CardList from 'components/Cards/CardsList';

function App() {
  return (
    <div className="App">
      <Container>
        <CardList />
      </Container>
    </div>
  );
}

export default App;
