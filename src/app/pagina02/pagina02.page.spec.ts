import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pagina02Page } from './pagina02.page';

describe('Pagina02Page', () => {
  let component: Pagina02Page;
  let fixture: ComponentFixture<Pagina02Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
