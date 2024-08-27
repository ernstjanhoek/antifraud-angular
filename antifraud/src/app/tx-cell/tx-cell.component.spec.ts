import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxCellComponent } from './tx-cell.component';

describe('TxCellComponent', () => {
  let component: TxCellComponent;
  let fixture: ComponentFixture<TxCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
