import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmaestroComponent } from './loginmaestro.component';

describe('LoginmaestroComponent', () => {
  let component: LoginmaestroComponent;
  let fixture: ComponentFixture<LoginmaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
