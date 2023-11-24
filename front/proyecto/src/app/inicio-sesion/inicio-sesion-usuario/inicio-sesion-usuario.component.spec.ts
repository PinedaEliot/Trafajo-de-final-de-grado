import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionUsuarioComponent } from './inicio-sesion-usuario.component';

describe('InicioSesionUsuarioComponent', () => {
  let component: InicioSesionUsuarioComponent;
  let fixture: ComponentFixture<InicioSesionUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionUsuarioComponent]
    });
    fixture = TestBed.createComponent(InicioSesionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
