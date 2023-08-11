import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdvModalComponent } from './gdv-modal.component';

describe('GdvModalComponent', () => {
  let component: GdvModalComponent;
  let fixture: ComponentFixture<GdvModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdvModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
