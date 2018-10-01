import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionequipoComponent } from './descriptionequipo.component';

describe('DescriptionequipoComponent', () => {
  let component: DescriptionequipoComponent;
  let fixture: ComponentFixture<DescriptionequipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionequipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
