import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyInfoBoxComponent } from './any-info-box.component';

describe('AnyInfoBoxComponent', () => {
  let component: AnyInfoBoxComponent;
  let fixture: ComponentFixture<AnyInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnyInfoBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnyInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
