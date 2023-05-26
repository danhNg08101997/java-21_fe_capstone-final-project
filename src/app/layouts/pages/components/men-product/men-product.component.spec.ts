import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenProductComponent } from './men-product.component';

describe('MenProductComponent', () => {
  let component: MenProductComponent;
  let fixture: ComponentFixture<MenProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
