import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermitFormComponent } from './user-permit-form.component';

describe('UserPermitFormComponent', () => {
  let component: UserPermitFormComponent;
  let fixture: ComponentFixture<UserPermitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPermitFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPermitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
