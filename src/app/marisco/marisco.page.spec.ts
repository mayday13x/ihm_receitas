import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MariscoPage } from './marisco.page';

describe('MariscoPage', () => {
  let component: MariscoPage;
  let fixture: ComponentFixture<MariscoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MariscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
