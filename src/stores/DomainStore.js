import { action, computed, observable } from 'mobx';

class DomainStore {
  @observable foo = 'bar';
  @observable polls = [
    {
      id: 1,
      name: "PollName",
      description: "This is a great poll",
      // votes: 69,
      created: Date.now(),
      expires: Date.now() + 4,
      results: [
        {
          name: "John",
          votes: 4
        },
        {
          name: "Bar",
          votes: 5
        }
      ]
    }
  ]
}

export default DomainStore;