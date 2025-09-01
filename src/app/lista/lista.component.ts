import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [
    HeaderComponent,
    FormsModule,
    CommonModule
],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  novaNota:string = '';
  notas:string[] = [];

  ngOnInit(): void {
    const data = localStorage.getItem('notas');
    if(data){
      this.notas ? JSON.parse(data) : [];
    }
  }

  adicionarNota(){
    if(this.novaNota.trim() !== ''){
      this.notas.push(this.novaNota);
      this.novaNota='';
      this.salvar();  
    }
  }

  removerNota(index: number){
    this.notas.splice(index,1);
    this.salvar();
  }

  salvar(){
    localStorage.setItem('notas', JSON.stringify(this.notas));
  }
}

