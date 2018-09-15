import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCardsComponent } from './row-cards.component';

describe('RowCardsComponent', () => {
  let component: RowCardsComponent;
  let fixture: ComponentFixture<RowCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
