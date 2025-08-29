import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Usuario } from './usuario.model';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastrar-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastrar-login.component.html',
  styleUrl: './cadastrar-login.component.css',
})
export class CadastrarLoginComponent {

  constructor(private cadastroService: CadastroService){}

  usuario = new Usuario();

  criarUsuario(): void {
    this.cadastroService.setUsuario(this.usuario)  
    this.usuario.nome = '';
    this.usuario.email= '';
    this.usuario.senha = '';
  }

  mostrarUsuarios(){
    this.cadastroService.getCadastrados();
  }
}
