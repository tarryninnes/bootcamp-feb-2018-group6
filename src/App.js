import React from 'react';
import { observer, Provider } from 'mobx-react';

import { Button, Paper, Reboot } from 'material-ui';

import UiStore from './stores/UiStore';
import DomainStore from './stores/DomainStore';

import CreatePollDrawer from './components/CreatePollDrawer';
import ResultDrawer from './components/ResultDrawer';
import PollTable from './components/PollTable';

// import './css/oswald.css'
// import './css/open-sans.css'
// import './css/pure-min.css'
import './App.css'


@observer
class App extends React.Component {
  constructor(props) {
    super(props);

    this.domainStore = new DomainStore();
    this.uiStore = new UiStore();
  }

  render() {
    return (
      <Provider
        uiStore={this.uiStore}
        domainStore={this.domainStore}
      >
        <div>
          <Reboot />
          <CreatePollDrawer />
          <ResultDrawer />
          <Paper>
            <h1>Crytocracy</h1>
            <PollTable />
          </Paper>
          <Button
            variant="raised"
            size="large"
            color="primary"
            onClick={() => this.uiStore.toggleCreatePollDrawer()}
          >
            Create new poll            
          </Button>
        </div>
      </Provider>
    );
  }
}

export default App;