import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbillerComponent } from './masterbiller.component';

describe('MasterbillerComponent', () => {
  let component: MasterbillerComponent;
  let fixture: ComponentFixture<MasterbillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterbillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterbillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
