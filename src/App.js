import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Button, IconButton, Drawer } from 'material-ui';

class Store {
  @observable foo = "hello"
}

const store = new Store();
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {store.foo}
        <Button onClick={() => store.foo = "world"} />
      </div>
    );
  }
}

export default App;