import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorBasicComponent } from './paginator-basic.component';

describe('PaginatorBasicComponent', () => {
  let component: PaginatorBasicComponent;
  let fixture: ComponentFixture<PaginatorBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
