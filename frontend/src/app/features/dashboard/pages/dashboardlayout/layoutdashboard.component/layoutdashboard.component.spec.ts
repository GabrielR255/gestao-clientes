import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutdashboardComponent } from './layoutdashboard.component';

describe('LayoutdashboardComponent', () => {
  let component: LayoutdashboardComponent;
  let fixture: ComponentFixture<LayoutdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutdashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
