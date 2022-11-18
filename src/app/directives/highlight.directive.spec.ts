import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

// describe('HighlightDirective', () => {
//   it('should create an instance', () => {
//     const directive = new HighlightDirective();
//     expect(directive).toBeTruthy();
//   });
// });

@Component({
  template: `
  <h3 class="title" highlight>Directiva</h3>
  <h4 highlight="blue">Color</h4>
  <h5 highlight="red">Valor</h5>
  <p>Parrafo</p>
  `
})
class HostComponent { }
fdescribe('HighlightDirective from HostComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, HighlightDirective]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 elements with the directive', () => {
    // const elements = fixture.nativeElement.queryAll(By.css('*[highlight]')); // Selecciona cualquier elemento con el atributo 'highlight'.
    const elementsWithDirective = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    const elementsWithoutDirective: DebugElement[] = fixture.debugElement.queryAll(By.css('*:not([highlight])'));

    expect(elementsWithDirective.length).toEqual(3);
    expect(elementsWithoutDirective.length).toEqual(1);
  });

  it('elements should have a background color', () => {
    const elements = fixture.debugElement.queryAll(By.directive(HighlightDirective));

    expect(elements.length).toEqual(3);
    expect(elements[0].nativeElement.style.backgroundColor).toEqual('yellow');
    expect(elements[1].nativeElement.style.backgroundColor).toEqual('blue');
    expect(elements[2].nativeElement.style.backgroundColor).toEqual('red');
  });

  it('element with class .title should have a default color', () => {
    const h3Debug: DebugElement = fixture.debugElement.query(By.css('.title'));
    const h3: HTMLElement = h3Debug.nativeElement;
    const directiveInstance = h3Debug.injector.get(HighlightDirective);

    expect(h3.style.backgroundColor).toEqual(directiveInstance.defaultColor);
  });

});
