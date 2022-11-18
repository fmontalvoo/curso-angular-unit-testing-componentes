import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

import { OthersComponent } from './others.component';

describe('OthersComponent', () => {
  let component: OthersComponent;
  let fixture: ComponentFixture<OthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        OthersComponent,
        HighlightDirective
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
