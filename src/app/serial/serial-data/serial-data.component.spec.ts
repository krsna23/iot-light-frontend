import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialDataComponent } from './serial-data.component';

describe('SerialDataComponent', () => {
  let component: SerialDataComponent;
  let fixture: ComponentFixture<SerialDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
