import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChange event when upvoted', () => {
    let totalVotes = null
    //saco el valor del eventemitter y lo meto en totalvotes
    component.voteChanged.subscribe(tv => totalVotes = tv)
    component.upVote();

    //expect(totalVotes).not.toBeNull(); //muy general
     expect(totalVotes).toBe(1); //mas especifico
  });
});