import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shoul have a <h3> tag with the text "Hola, Bienvenido"', () => {
    const el: HTMLElement = fixture.nativeElement;
    const h3 = el.querySelector('h3');
    expect(h3?.textContent).toEqual("Hola, Bienvenido");
  });

  it('Shoul have a <p> tag with a paragraph with more than 10 characters', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const hDebug = debugEl.query(By.css('p'));
    const p: HTMLElement = hDebug.nativeElement;
    // const p: HTMLElement = debugEl.nativeElement;
    expect(p?.textContent?.length).toBeGreaterThanOrEqual(10);
  });
});
