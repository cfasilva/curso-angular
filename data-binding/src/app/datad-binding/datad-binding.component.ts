import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datad-binding',
  templateUrl: './datad-binding.component.html',
  styleUrls: ['./datad-binding.component.css']
})
export class DatadBindingComponent implements OnInit {

  url = 'http://youtube.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (event.target as HTMLInputElement).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
