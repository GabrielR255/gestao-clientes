import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardlinkComponent } from './dashboardlink.component';

describe('DashboardlinkComponent', () => {
  let component: DashboardlinkComponent;
  let fixture: ComponentFixture<DashboardlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardlinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardlinkComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
