import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PescadaPage } from './pescada.page';

describe('PescadaPage', () => {
  let component: PescadaPage;
  let fixture: ComponentFixture<PescadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PescadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
