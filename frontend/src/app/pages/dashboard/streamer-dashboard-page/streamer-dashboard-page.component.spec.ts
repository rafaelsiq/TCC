import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerDashboardPageComponent } from './streamer-dashboard-page.component';

describe('StreamerDashboardPageComponent', () => {
  let component: StreamerDashboardPageComponent;
  let fixture: ComponentFixture<StreamerDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamerDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
