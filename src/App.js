import React from 'react';
import { observer, Provider } from 'mobx-react';

import { Icon, Button, IconButton, Drawer, Reboot, FontIcon, Paper } from 'material-ui';

import UiStore from './stores/UiStore';

import CreatePollDrawer from './components/CreatePollDrawer';
import ResultDrawer from './components/ResultDrawer';

// import './css/oswald.css'
// import './css/open-sans.css'
// import './css/pure-min.css'
import './App.css'


@observer
class App extends React.Component {
  constructor(props) {
    super(props);

    this.uiStore = new UiStore();
  }

  render() {
    return (
      <Provider
        uiStore={this.uiStore}
      >
        <div>
          <Reboot />
          {/* <CreatePollDrawer /> */}
          {/* <ResultDrawer /> */}
          <Paper>
            <Icon>send</Icon>
          </Paper>
        </div>
      </Provider>
    );
  }
}

export default App;