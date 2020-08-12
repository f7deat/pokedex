import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBasicComponent } from './toolbar-basic.component';

describe('ToolbarBasicComponent', () => {
  let component: ToolbarBasicComponent;
  let fixture: ComponentFixture<ToolbarBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
