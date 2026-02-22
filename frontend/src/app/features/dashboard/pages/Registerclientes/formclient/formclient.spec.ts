import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formclient } from './formclient';

describe('Formclient', () => {
  let component: Formclient;
  let fixture: ComponentFixture<Formclient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formclient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formclient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
