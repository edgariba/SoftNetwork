import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPrincipalesComponent } from './services-principales.component';

describe('ServicesPrincipalesComponent', () => {
  let component: ServicesPrincipalesComponent;
  let fixture: ComponentFixture<ServicesPrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPrincipalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
