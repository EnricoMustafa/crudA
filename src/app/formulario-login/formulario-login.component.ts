import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LocalStorageService } from '../local-storage.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../cadastrar-login/usuario.model';

@Component({
  selector: 'app-formulario-login',
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  local = new LocalStorageService()
  obj:  Usuario[] = []
  email: string = "";
  nome: string = "";
  senha: string = "";

  autenticar(){
  const usuario: Usuario ={
    nome: this.nome,
    email: this.email,
    senha: this.senha
  };
    this.local.verificacaoLogin(usuario);
  }

}
