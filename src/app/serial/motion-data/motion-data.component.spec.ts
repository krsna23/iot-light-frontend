import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionDataComponent } from './motion-data.component';

describe('MotionDataComponent', () => {
  let component: MotionDataComponent;
  let fixture: ComponentFixture<MotionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotionDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
