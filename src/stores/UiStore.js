import { action, computed, observable } from 'mobx';

class UiStore {
  @observable currentDrawer="CreatePollDrawer";
  @observable drawerOpen=true;
}

export default UiStore;