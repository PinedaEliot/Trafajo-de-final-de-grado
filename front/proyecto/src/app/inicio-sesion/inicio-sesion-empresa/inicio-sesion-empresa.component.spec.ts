import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionEmpresaComponent } from './inicio-sesion-empresa.component';

describe('InicioSesionEmpresaComponent', () => {
  let component: InicioSesionEmpresaComponent;
  let fixture: ComponentFixture<InicioSesionEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionEmpresaComponent]
    });
    fixture = TestBed.createComponent(InicioSesionEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
