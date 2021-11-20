import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParicipantInfoComponent } from './paricipant-info.component';

describe('ParicipantInfoComponent', () => {
  let component: ParicipantInfoComponent;
  let fixture: ComponentFixture<ParicipantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParicipantInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParicipantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
