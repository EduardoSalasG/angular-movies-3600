import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterutComponent } from './createrut.component';

describe('CreaterutComponent', () => {
  let component: CreaterutComponent;
  let fixture: ComponentFixture<CreaterutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
