import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenProductComponent } from './women-product.component';

describe('WomenProductComponent', () => {
  let component: WomenProductComponent;
  let fixture: ComponentFixture<WomenProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
