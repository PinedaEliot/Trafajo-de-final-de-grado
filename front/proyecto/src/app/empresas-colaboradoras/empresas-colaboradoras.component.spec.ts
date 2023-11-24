import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasColaboradorasComponent } from './empresas-colaboradoras.component';

describe('EmpresasColaboradorasComponent', () => {
  let component: EmpresasColaboradorasComponent;
  let fixture: ComponentFixture<EmpresasColaboradorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasColaboradorasComponent]
    });
    fixture = TestBed.createComponent(EmpresasColaboradorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
