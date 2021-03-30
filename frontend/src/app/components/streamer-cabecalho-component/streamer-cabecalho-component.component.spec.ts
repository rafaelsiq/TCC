import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerCabecalhoComponentComponent } from './streamer-cabecalho-component.component';

describe('StreamerCabecalhoComponentComponent', () => {
  let component: StreamerCabecalhoComponentComponent;
  let fixture: ComponentFixture<StreamerCabecalhoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamerCabecalhoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerCabecalhoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
