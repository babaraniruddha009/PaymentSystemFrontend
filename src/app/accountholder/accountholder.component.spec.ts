import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountholderComponent } from './accountholder.component';

describe('AccountholderComponent', () => {
  let component: AccountholderComponent;
  let fixture: ComponentFixture<AccountholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
