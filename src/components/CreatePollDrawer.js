import React from 'react'
import { inject, observer } from 'mobx-react';
import { Drawer } from 'material-ui';

const CreatePollDrawer = inject('uiStore')(observer((props) => {
  return (
    <Drawer
      open={props.uiStore.currentDrawer === "CreatePollDrawer"}
      onClose={() => props.uiStore.toggleCreatePollDrawer()}
    >
      {'This is a create poll drawer'}
    </Drawer>
  );
}));

export default CreatePollDrawer;