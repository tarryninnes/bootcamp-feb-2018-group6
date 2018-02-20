import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, IconButton, Drawer } from 'material-ui';

import CreatePollDrawer from './components/CreatePollDrawer';
import ResultDrawer from './components/ResultDrawer';


@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CreatePollDrawer />
        <ResultDrawer />
      </div>
    );
  }
}

export default App;