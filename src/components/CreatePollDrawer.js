import React from 'react'
import { inject, observer } from 'mobx-react';
import { Drawer, TextField } from 'material-ui';

const CreatePollDrawer = inject('uiStore')(observer((props) => {
  return (
    <Drawer
      open={props.uiStore.currentDrawer === "CreatePollDrawer"}
      onClose={() => props.uiStore.toggleCreatePollDrawer()}
    >
      <h1> Create Poll </h1>
      <TextField helperText={'Name'}></TextField>
      <TextField helperText={'Option 1'}></TextField>
      <TextField helperText={'Option 2'}></TextField>
    </Drawer>
  );
}));

export default CreatePollDrawer;