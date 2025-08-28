import { Injectable } from '@angular/core';
import { Usuario } from './cadastrar-login/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private key = 'usuarios';

  constructor() { }

  salvarUsuario(usuario: Usuario){
    const usuarios = this.buscarUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(this.key, JSON.stringify(usuarios))
  }

  buscarUsuarios():Usuario[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  limparUsuarios(){
    localStorage.removeItem(this.key);
  }

  verificacaoLogin(usuario:Usuario){
    if(usuario.email === localStorage.getItem(usuario.nome)){
      console.log("usuario certo")
    }else{
      console.log("usuario invalido");
    }
  }
}
