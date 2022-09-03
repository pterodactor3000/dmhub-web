import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsFeaturesNotesComponent } from './actions-features-notes.component';

describe('ActionsFeaturesNotesComponent', () => {
  let component: ActionsFeaturesNotesComponent;
  let fixture: ComponentFixture<ActionsFeaturesNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsFeaturesNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsFeaturesNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
