import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    //saca el elemento del formulario name y lo asigna a control
    let control = component.form.get('name');
    //lo pone en blanco
    control.setValue('');
    //valida, como hay elementos sin llenar se espera que sea falso
    expect(control.valid).toBeFalsy();
  });
});