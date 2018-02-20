import React from 'react'
import { inject, observer } from 'mobx-react';
import { Button, Drawer } from 'material-ui';

const CreatePollDrawer = inject('uiStore')(observer((props) => {
  return (
    <Drawer open={props.uiStore.drawerOpen}>
      <Button onClick={() => props.uiStore.drawerOpen=false} />
      {'Your content here'}
    </Drawer>
  );
}));

export default CreatePollDrawer;