import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pagina03Page } from './pagina03.page';

describe('Pagina03Page', () => {
  let component: Pagina03Page;
  let fixture: ComponentFixture<Pagina03Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
