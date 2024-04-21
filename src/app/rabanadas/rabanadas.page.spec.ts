import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RabanadasPage } from './rabanadas.page';

describe('RabanadasPage', () => {
  let component: RabanadasPage;
  let fixture: ComponentFixture<RabanadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RabanadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
