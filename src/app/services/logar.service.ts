import { Injectable } from '@angular/core';
import { CadastroService } from './cadastro.service';

@Injectable({
  providedIn: 'root'
})
export class Logar{

  constructor(private cadastroService: CadastroService) { }

  validarLogin(email:string, senha: string): boolean{
    const cadastrados = this.cadastroService.getCadastrados();
    return cadastrados.some(u => u.email === email && u.senha === senha) 
  }
}
