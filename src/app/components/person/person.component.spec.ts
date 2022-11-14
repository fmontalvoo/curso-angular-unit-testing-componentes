import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person } from 'src/app/models/person.model';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    component.person = new Person('Fulano', 'Detal', 25, 82, 1.77);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the name "Fulano"', () => {
    expect(component.person?.name).toEqual('Fulano');
  });

  it('should have a the name "Fulanito" in the <p> tag', () => {
    // Arrange
    component.person = new Person('Fulanito', 'Detal', 25, 82, 1.77);
    const debugEl: DebugElement = fixture.debugElement;
    const hDebug = debugEl.query(By.css('h3'));
    const h3: HTMLElement = hDebug.nativeElement;
    // Act
    fixture.detectChanges();
    // Assert
    expect(h3?.textContent).toContain("Fulanito");
  });

  it('should have a <h3> tag with the text "Hola, Fulano"', () => {
    const el: HTMLElement = fixture.nativeElement;
    const h3 = el.querySelector('h3');
    expect(h3?.textContent).toEqual("Hola, Fulano");
  });

  it('should have a <p> tag with a paragraph with more than 10 characters', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const pDebug = debugEl.query(By.css('p'));
    const p: HTMLElement = pDebug.nativeElement;
    // const p: HTMLElement = debugEl.nativeElement;
    expect(p?.textContent?.length).toBeGreaterThanOrEqual(10);
    expect(p?.textContent).toContain(1.77);
  });

  it('should display the imc inside de button when it is clicked', () => {
    component.person = new Person('Fulanito', 'Detal', 25, 120, 1.65);
    const button: HTMLElement = fixture.debugElement.query(By.css('button.btn-imc')).nativeElement;
    // const btnDe = fixture.debugElement.query(By.css('button.btn-imc'));
    // const btnEl = btnDe.nativeElement;

    button.click();
    // component.calcIMC();
    // btnDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(button.textContent).toContain('overweight level 3');
  });
});
