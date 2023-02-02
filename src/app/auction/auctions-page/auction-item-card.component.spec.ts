import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemCardComponent } from './auction-item-card.component';

describe('AuctionItemCardComponent', () => {
  let component: AuctionItemCardComponent;
  let fixture: ComponentFixture<AuctionItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
