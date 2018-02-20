import { action, computed, observable } from 'mobx';

class DomainStore {
  @observable polls = [
    {
      id: 1,
      name: "PollName",
      description: "This is a great poll",
      // votes: 69,
      created: Date.now(),
      expires: Date.now() + 4999,
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
    },
    {
      id: 2,
      name: "PollName",
      description: "This is a great poll",
      // votes: 69,
      created: Date.now(),
      expires: Date.now() + 9994,
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
    },
    {
      id: 3,
      name: "PollName",
      description: "This is a great poll",
      // votes: 69,
      created: Date.now(),
      expires: Date.now() + 9994,
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
    },
    {
      id: 4,
      name: "other pollname",
      description: "This is a great poll",
      // votes: 69,
      created: Date.now(),
      expires: Date.now() + 9994,
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
    },
  ]

  @computed get pollsVotes() {
    return this.polls.map((n) => {
      return n.results.reduce((a, c) => {
        return a + c.votes;
      }, 0);
    });
  }
}

export default DomainStore;