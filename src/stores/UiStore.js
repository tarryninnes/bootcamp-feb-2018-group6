import { action, computed, observable } from 'mobx';

class UiStore {
  @observable currentDrawer = 'CreatePollDrawer';
  @observable resultDrawerIndex = 0;

  @action.bound
  toggleCreatePollDrawer() {
    if (this.currentDrawer === 'CreatePollDrawer') {
      this.currentDrawer = '';
    } else {
      this.currentDrawer = 'CreatePollDrawer';
    }
  }

  @action.bound
  toggleResultDrawer(i) {
    if (this.currentDrawer === 'ResultDrawer') {
      this.currentDrawer = '';
    } else {
      this.currentDrawer = 'ResultDrawer';
      this.resultDrawerIndex = i;
    }
  }
}

export default UiStore;