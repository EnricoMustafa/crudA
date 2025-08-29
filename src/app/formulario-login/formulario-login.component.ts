import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Usuario } from '../cadastrar-login/usuario.model';
import { Logar } from '../services/logar.service';
import { Router } from '@angular/router';


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
  constructor(
    private logar: Logar,
    private router: Router
  ){}

  email:string = '';
  senha:string = '';

  mensagemErro: string = '';
  
    mensagemSucesso(){
      if(this.logar.validarLogin(this.email,this.senha) === true){
        console.log("Validação deu certo");
        this.router.navigate(['/lista'])        
      }else{
        console.log("Email ou senha incorreto");
        this.mensagemErro = 'Usuario ou senha incorreta!'
        setTimeout(() => {
          this.mensagemErro = ''
        }, 1000)
      }
  }
}
