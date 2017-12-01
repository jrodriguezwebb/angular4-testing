import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

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

  it('should call the server to save the changes when the new todo item is added ', ()=>{
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server ', ()=>{
    let todo = { id: 1};
    
    //machaca la funcionalidad principal de add y emula su respuesta
    /*let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.from([todo]);
    });*/

    let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    //lanza la funcion que queremos probar
    component.add();

    //prueba que se haya agregado el valor a la propiedad todo
    expect(component.todos.lastIndexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns error when adding a new todo ', ()=>{
    let error = 'error from the server'
    //lanza un error a drede
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    //lanza la funcion que queremos probar
    component.add();

    //prueba que se haya agregado el valor a la propiedad todo
    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo item if the usr confirms',()=>{
    spyOn(window,'confirm').and.returnValue(true);
    let spy = spyOn(service,'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);

  });

  it('should NOT call the server to delete a todo item if the usr cancels',()=>{
    spyOn(window,'confirm').and.returnValue(false);
    let spy = spyOn(service,'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });

  
});