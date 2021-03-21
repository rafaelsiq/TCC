import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuIndexComponent } from './submenu-index.component';

describe('SubmenuIndexComponent', () => {
  let component: SubmenuIndexComponent;
  let fixture: ComponentFixture<SubmenuIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmenuIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
