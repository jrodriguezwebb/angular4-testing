import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the item returned form de server', () => {
    const todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([ todos ]);
      // return Observable.from([ [1, 2, 3] ]);
    });
    component.ngOnInit();
    // General mode ->  expect(component.todos.length).toBeGreaterThan(0);
    // More Specific -> expect(component.todos.length).toBe(3);
    // Even more Specific
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new todo iten is added', () => {
    const spy = spyOn(service, 'add').and.callFake((t) => {
      return of({});
      // return Observable.from([ [1, 2, 3] ]);
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo return from the server', () => {
    const todo = { id: 1};

    /* const spy = spyOn(service, 'add').and.callFake((t) => {
      return Observable.from([ todo ]);
    }); */

    const spy = spyOn(service, 'add').and.returnValue(from([ todo ]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns an error when adding a new todo', () => {
    const error = 'error from the server';

    const spy = spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    const spy = spyOn(service, 'delete').and.returnValue(of({}));

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
