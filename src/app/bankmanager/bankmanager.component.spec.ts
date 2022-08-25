import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankmanagerComponent } from './bankmanager.component';

describe('BankmanagerComponent', () => {
  let component: BankmanagerComponent;
  let fixture: ComponentFixture<BankmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
