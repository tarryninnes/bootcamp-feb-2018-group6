import React from 'react'
import { inject, observer } from 'mobx-react';
import { Button, Drawer, TextField } from 'material-ui';

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
      <Button variant='raised' color='primary'>Create Poll</Button>
    </Drawer>
  );
}));

export default CreatePollDrawer;
