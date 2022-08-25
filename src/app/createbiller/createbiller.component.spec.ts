import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebillerComponent } from './createbiller.component';

describe('CreatebillerComponent', () => {
  let component: CreatebillerComponent;
  let fixture: ComponentFixture<CreatebillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
