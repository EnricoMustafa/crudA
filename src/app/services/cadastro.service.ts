import { Injectable } from '@angular/core';
import { Usuario } from '../cadastrar-login/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  getCadastrados(): Usuario[]{
    const data = localStorage.getItem("usuariosss");
    const lista = data ? JSON.parse(data) : []; 
    return Array.isArray(lista) ? lista : []
  }

  setUsuario(usuario: Usuario){
    const cadastrados = this.getCadastrados();
    cadastrados.push(usuario);
    localStorage.setItem("usuariosss",JSON.stringify(cadastrados))
  }
}
