import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Usuario } from '../cadastrar-login/usuario.model';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  constructor(private user: CadastroService){}
  usuario = new Usuario();
}

