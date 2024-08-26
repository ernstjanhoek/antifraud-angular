import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantPanelComponent } from './merchant-panel.component';

describe('MerchantPanelComponent', () => {
  let component: MerchantPanelComponent;
  let fixture: ComponentFixture<MerchantPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
