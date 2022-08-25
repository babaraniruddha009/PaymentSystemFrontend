import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbillerComponent } from './newbiller.component';

describe('NewbillerComponent', () => {
  let component: NewbillerComponent;
  let fixture: ComponentFixture<NewbillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
