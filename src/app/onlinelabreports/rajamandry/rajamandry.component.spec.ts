import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajamandryComponent } from './rajamandry.component';

describe('RajamandryComponent', () => {
  let component: RajamandryComponent;
  let fixture: ComponentFixture<RajamandryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajamandryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RajamandryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
