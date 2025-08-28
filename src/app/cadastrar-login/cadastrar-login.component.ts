import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-cadastrar-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastrar-login.component.html',
  styleUrl: './cadastrar-login.component.css',
})
export class CadastrarLoginComponent {
  
  local = new LocalStorageService()

  nome: string = '';
  email: string = '';
  senha: string = '';

  usuarios: Usuario[] = [];
  
  salvar() {
    const usuario: Usuario = { 
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    }
    
    this.local.salvarUsuario(usuario)
    
    this.nome = '';
    this.email = '';
    this.senha = '';
  }

  carregarUsuarios(){
    const dados = localStorage.getItem('usuarios');
    this.usuarios = dados ? JSON.parse(dados) : [];
    console.log('Usuarios: ', this.usuarios)
  }
}
