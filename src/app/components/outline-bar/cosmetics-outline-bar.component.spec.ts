import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticsOutlineBarComponent } from './cosmetics-outline-bar.component';

describe('CosmeticsOutlineBarComponent', () => {
  let component: CosmeticsOutlineBarComponent;
  let fixture: ComponentFixture<CosmeticsOutlineBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticsOutlineBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticsOutlineBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
