import React from 'react'
import { inject, observer } from 'mobx-react';
import { Drawer } from 'material-ui';

const ResultDrawer = inject('uiStore')(observer((props) => {
  return (
    <Drawer
      open={props.uiStore.currentDrawer === "ResultDrawer"}
      onClose={() => props.uiStore.toggleResultDrawer()}
    >
      {'This is a result drawer of index ' + props.uiStore.resultDrawerIndex}
    </Drawer>
  );
}));

export default ResultDrawer;