import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorClassSpeedComponent } from './armor-class-speed.component';

describe('ArmorClassSpeedComponent', () => {
  let component: ArmorClassSpeedComponent;
  let fixture: ComponentFixture<ArmorClassSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmorClassSpeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmorClassSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
