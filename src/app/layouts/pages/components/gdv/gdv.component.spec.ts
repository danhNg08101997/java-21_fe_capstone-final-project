import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdvComponent } from './gdv.component';

describe('GdvComponent', () => {
  let component: GdvComponent;
  let fixture: ComponentFixture<GdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
