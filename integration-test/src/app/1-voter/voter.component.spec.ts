import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { VoterComponent } from './voter.component';


describe('VoterComponent', () => {
  let component:VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
       declarations: [
        VoterComponent,
      ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    //fixture.nativeElement
    //fixture.debugElement
  });

  it('should render total vots', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    //toma un predicado que retorna true si su condicion es correcta, encuentra le primer elemento que match el criterio
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain(21);

  });
});
