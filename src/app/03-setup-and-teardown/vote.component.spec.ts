import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  //Arrange
  let component:VoteComponent;

  //antes de cada test
  beforeEach(()=>{
     component = new VoteComponent();
  });

  //afterEach()
  //beforeAll()
  //afterAll()

  it('should increment totalVotes when upvoted', () => {
    //Act
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', () => {
    //Act
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(-1);
  });
});