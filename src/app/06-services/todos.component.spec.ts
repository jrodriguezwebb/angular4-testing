import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service:TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property the items return from the server', () => {
    let todos = [
      {id:1, title: 'a'},
      {id:2, title: 'b'},
      {id:3, title: 'c'}
    ]
    
    //replace the real implementation
    spyOn(service, 'getTodos').and.callFake(()=>{
      return Observable.from([todos]);
    });

    component.ngOnInit();

    //expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos).toBe(todos);
  });
});