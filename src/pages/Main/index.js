import React from 'react';

import Add from './components/Add';
import List from './components/List';

import { Container } from './styles';

const Main = () => (
  <Container>
    <Add />
    <List />
  </Container>
);

export default Main;
