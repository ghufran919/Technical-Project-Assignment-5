import React, { Fragment } from 'react';

import Title from './components/title/title';

const App = () => (
  <Fragment>
    <Title title="ToDo App" />
    <ToDo />
  </Fragment>
);

export default App;